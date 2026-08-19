import { Meal } from "@/lib/types";

export function MealDescription({ meal }: { meal: Meal }) {
  return (
    <div className="mt-6">
      <p className="font-body text-base text-ink/80 leading-relaxed mb-5">
        {meal.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {meal.ingredients.map((ingredient) => (
          <span
            key={ingredient}
            className="font-body text-xs bg-line/40 text-ink/70 rounded-full px-3 py-1"
          >
            {ingredient}
          </span>
        ))}
      </div>
      <p className="font-mono text-xs text-mute">{meal.calories} kcal</p>
    </div>
  );
}
