"use client";

import { useMemo, useState } from "react";
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
    <section className="px-6 sm:px-10 py-14 max-w-6xl mx-auto">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="font-display text-3xl text-ink">Tonight&apos;s menu</h2>
        <span className="font-mono text-xs text-mute">
          {filteredMeals.length} item{filteredMeals.length === 1 ? "" : "s"}
        </span>
      </div>
      <TicketRail className="mb-8" />
      <CategoryTabs value={category} onChange={setCategory} />
      <MealGrid meals={filteredMeals} />
    </section>
  );
}
