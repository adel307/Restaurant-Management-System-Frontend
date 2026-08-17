"use client";

import dynamic from "next/dynamic";
import { mockLiveActivity } from "@/lib/mock-data";

const Globe3D = dynamic(
  () => import("./Globe3D").then((mod) => mod.Globe3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[320px] flex items-center justify-center">
        <span className="font-mono text-xs text-cream/40">Loading live map…</span>
      </div>
    ),
  }
);

export function HeroSection() {
  const totalOrdersPerMinute = mockLiveActivity.reduce(
    (sum, point) => sum + point.ordersPerMinute,
    0
  );

  return (
    <section className="relative bg-ink text-cream px-6 sm:px-10 pt-16 pb-14 overflow-hidden">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="glow-blob glow-blob--bottom-left" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-blue-light uppercase mb-4">
            Table for one — order tonight
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] mb-5">
            Fire, herbs,
            <br />
            and a full house.
          </h1>
          <p className="font-body text-cream/70 max-w-md text-base leading-relaxed mb-6">
            Charcoal-grilled mains, market-fresh salads, and drinks poured cold
            — cooked to order and tracked from the coals to your table.
          </p>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cream/50 border border-line-dark rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
            {totalOrdersPerMinute} orders/min across the platform right now
          </div>
        </div>

        <div className="relative h-[340px] sm:h-[420px]">
          <Globe3D />
        </div>
      </div>
    </section>
  );
}
