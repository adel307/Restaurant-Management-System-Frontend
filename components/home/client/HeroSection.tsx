import dynamic from "next/dynamic";
import { motion } from "framer-motion";
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
    <section 
      className="relative text-cream px-6 sm:px-10 pt-16 pb-14 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        // تم تفتيح الشفافية من (0.92 و 0.88) إلى (0.65 و 0.45) لإبراز تفاصيل صورة المطعم
        backgroundImage: `linear-gradient(to right, rgba(10, 15, 29, 0.65) 0%, rgba(10, 15, 29, 0.45) 50%, rgba(10, 15, 29, 0.60) 100%), url('/BG.jpg')`,
      }}
    >
      <div className="grid-overlay" aria-hidden="true" />
      <div className="glow-blob glow-blob--bottom-left opacity-50" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-10 items-center">
        {/* النص الجانبي */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-blue-light uppercase mb-4 drop-shadow">
            Table for one — order tonight
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] mb-5 drop-shadow-md">
            Fire, herbs,
            <br />
            and a full house.
          </h1>
          <p className="font-body text-cream/90 max-w-md text-base leading-relaxed mb-6 drop-shadow">
            Charcoal-grilled mains, market-fresh salads, and drinks poured cold
            — cooked to order and tracked from the coals to your table.
          </p>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cream/80 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-md bg-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-light animate-pulse" />
            {totalOrdersPerMinute} orders/min across the platform right now
          </div>
        </motion.div>

        {/* الكرة الأرضية */}
        <motion.div
          className="relative h-[340px] sm:h-[420px]"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Globe3D />
        </motion.div>
      </div>
    </section>
  );
}