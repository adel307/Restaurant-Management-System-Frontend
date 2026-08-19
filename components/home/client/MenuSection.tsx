"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockMeals } from "@/lib/mock-data";
import { MealCategory } from "@/lib/types";
import { CategoryTabs } from "./CategoryTabs";
import { MealGrid } from "./MealGrid";
import { TicketRail } from "@/components/ui/TicketRail";

export function MenuSection() {
  const [category, setCategory] = useState<MealCategory | "all">("all");

  const filteredMeals = useMemo(() => {
    if (category === "all") return mockMeals;
    return mockMeals.filter((meal) => meal.category === category);
  }, [category]);

  return (
    <section
      className="relative text-cream py-16 px-4 sm:px-8 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 15, 29, 0.75) 0%, rgba(10, 15, 29, 0.60) 50%, rgba(10, 15, 29, 0.85) 100%), url('/BG.jpg')`,
      }}
    >
      {/* Container زجاجي أملس ليبرز ألوان المطعم في الخلفية */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 backdrop-blur-xl bg-slate-950/60 border border-white/10 shadow-2xl relative z-10"
      >
        {/* Header Section */}
        <div className="flex items-baseline justify-between mb-3 border-b border-white/10 pb-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl text-cream drop-shadow-md tracking-tight"
          >
            Tonight&apos;s menu
          </motion.h2>

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-xs text-blue-light/90 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full shadow-inner"
          >
            {filteredMeals.length} item{filteredMeals.length === 1 ? "" : "s"}
          </motion.span>
        </div>

        {/* Ticket Rail with Subtle Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <TicketRail className="mb-8" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-8"
        >
          <CategoryTabs value={category} onChange={setCategory} />
        </motion.div>

        {/* Animated Meal Grid upon Category Change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <MealGrid meals={filteredMeals} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}