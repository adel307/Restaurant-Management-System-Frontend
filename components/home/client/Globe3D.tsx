"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { mockLiveActivity } from "@/lib/mock-data";
import { tokens } from "@/lib/theme";

const GLOBE_RADIUS = 2.2;

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Base sphere — a faint wireframe "wire globe" rather than a solid
    // sphere, so it reads as data-driven rather than a literal planet.
    const wireGeometry = new THREE.IcosahedronGeometry(GLOBE_RADIUS, 4);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tokens.blueLight),
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const wireSphere = new THREE.Mesh(wireGeometry, wireMaterial);
    scene.add(wireSphere);

    // Soft inner glow sphere
    const glowGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 0.985, 48, 48);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tokens.ink),
      transparent: true,
      opacity: 0.6,
    });
    scene.add(new THREE.Mesh(glowGeometry, glowMaterial));

    // Activity markers — one pulsing point + ring per city, sized by
    // orders-per-minute.
    const markerGroup = new THREE.Group();
    const pulseMeshes: { mesh: THREE.Mesh; phase: number; speed: number }[] = [];

    mockLiveActivity.forEach((point, index) => {
      const position = latLngToVector3(point.lat, point.lng, GLOBE_RADIUS * 1.01);
      const scale = 0.02 + point.ordersPerMinute * 0.0022;

      const dotGeometry = new THREE.SphereGeometry(scale, 12, 12);
      const dotMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(tokens.blueLight),
      });
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.copy(position);
      markerGroup.add(dot);

      const ringGeometry = new THREE.RingGeometry(scale * 1.6, scale * 1.9, 24);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(tokens.blueLight),
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);
      ring.lookAt(position.clone().multiplyScalar(2));
      markerGroup.add(ring);

      pulseMeshes.push({ mesh: ring, phase: index * 0.6, speed: 0.9 + (index % 3) * 0.15 });
    });

    scene.add(markerGroup);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.4;

    let frameId: number;
    const clock = new THREE.Clock();

    function animate() {
      const elapsed = clock.getElapsedTime();
      pulseMeshes.forEach(({ mesh, phase, speed }) => {
        const t = (elapsed * speed + phase) % 2;
        const scale = 1 + t * 1.8;
        mesh.scale.setScalar(scale);
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.max(0, 0.55 - t * 0.3);
      });
      controls.update();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      markerGroup.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Interactive 3D globe showing live order activity across the platform"
      className="w-full h-full min-h-[320px] cursor-grab active:cursor-grabbing"
    />
  );
}
