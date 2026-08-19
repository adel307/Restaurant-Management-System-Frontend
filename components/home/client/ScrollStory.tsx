"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STORY_BEATS = [
  {
    eyebrow: "01 — Live from the kitchen",
    title: "Every order, tracked the moment it fires.",
    body: "From the second a ticket prints to the second it lands on the table, RMS keeps the whole line in sync — no shouted order numbers, no guessing.",
  },
  {
    eyebrow: "02 — One system, every role",
    title: "Diners, admins, and platform owners share one ticket.",
    body: "A client's session order, a restaurant's daily analytics, and a platform-wide directory are all views onto the same underlying record.",
  },
  {
    eyebrow: "03 — Built for service speed",
    title: "Menus that update as fast as the kitchen does.",
    body: "Categories, availability, and pricing changes reach the dining room in real time — what's on screen is what's actually on the stove.",
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const beats = gsap.utils.toArray<HTMLElement>(".story-beat");
      beats.forEach((beat) => {
        gsap.fromTo(
          beat,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: beat,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const rail = sectionRef.current?.querySelector(".story-progress-rail");
      if (rail) {
        gsap.fromTo(
          rail,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 0.5,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink px-6 sm:px-10 py-20 overflow-hidden"
    >
      <div className="glow-blob glow-blob--top-right" aria-hidden="true" />
      <div className="max-w-4xl mx-auto relative">
        <div
          className="story-progress-rail absolute left-0 top-2 bottom-2 w-px bg-blue-light/60 origin-top hidden sm:block"
          aria-hidden="true"
        />
        <div className="space-y-24 sm:pl-10">
          {STORY_BEATS.map((beat) => (
            <div key={beat.title} className="story-beat max-w-xl">
              <p className="font-mono text-xs tracking-[0.25em] text-blue-light uppercase mb-3">
                {beat.eyebrow}
              </p>
              <h3 className="font-display text-3xl sm:text-4xl text-cream leading-snug mb-4">
                {beat.title}
              </h3>
              <p className="font-body text-cream/60 text-base leading-relaxed">
                {beat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
