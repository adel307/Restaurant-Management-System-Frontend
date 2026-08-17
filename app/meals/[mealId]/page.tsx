"use client";

import { useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { getMealById } from "@/lib/mock-data";
import { useSession } from "@/lib/session-context";
import { TopBar } from "@/components/ui/TopBar";
import { MealHeader } from "@/components/meal/MealHeader";
import { MealDescription } from "@/components/meal/MealDescription";
import { QuantitySelector } from "@/components/meal/QuantitySelector";
import { AddToOrderButton } from "@/components/meal/AddToOrderButton";

export default function MealDetailsPage({
  params,
}: {
  params: { mealId: string };
}) {
  const router = useRouter();
  const { role, addMealToOrder } = useSession();
  const meal = getMealById(params.mealId);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!meal) {
    notFound();
  }

  function handleAdd() {
    if (role !== "client") {
      router.push("/login");
      return;
    }
    addMealToOrder(meal!, quantity);
    setAdded(true);
  }

  return (
    <main className="min-h-screen bg-cream">
      <TopBar />
      <div className="max-w-2xl mx-auto px-6 sm:px-10 py-10">
        <MealHeader meal={meal} />
        <MealDescription meal={meal} />
        <div className="flex items-center justify-between gap-6 mt-8">
          <QuantitySelector value={quantity} onChange={setQuantity} />
        </div>
        <div className="mt-6">
          <AddToOrderButton onAdd={handleAdd} added={added} />
        </div>
      </div>
    </main>
  );
}
