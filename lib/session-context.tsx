"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { Meal, OrderItem, Role } from "./types";

interface SessionState {
  role: Role | null;
  restaurantId: string | null;
  currentOrderItems: OrderItem[];
  login: (role: Role, restaurantId?: string) => void;
  logout: () => void;
  addMealToOrder: (meal: Meal, quantity: number) => void;
}

const SessionContext = createContext<SessionState | null>(null);

// Session lives in memory only, matching the doc's rule that a session opens
// on login and closes (converting to a saved order) on logout. No browser
// storage is used — this is placeholder state until the real auth/orders API
// is wired up.
export function SessionProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null);
  const [restaurantId, setRestaurantId] = useState<string | null>(null);
  const [currentOrderItems, setCurrentOrderItems] = useState<OrderItem[]>([]);

  const login = (nextRole: Role, nextRestaurantId?: string) => {
    setRole(nextRole);
    setRestaurantId(nextRestaurantId ?? null);
    setCurrentOrderItems([]);
  };

  const logout = () => {
    setRole(null);
    setRestaurantId(null);
    setCurrentOrderItems([]);
  };

  const addMealToOrder = (meal: Meal, quantity: number) => {
    setCurrentOrderItems((prev) => {
      const existing = prev.find((item) => item.mealId === meal.id);
      if (existing) {
        return prev.map((item) =>
          item.mealId === meal.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        { mealId: meal.id, name: meal.name, quantity, unitPrice: meal.price },
      ];
    });
  };

  const value = useMemo(
    () => ({ role, restaurantId, currentOrderItems, login, logout, addMealToOrder }),
    [role, restaurantId, currentOrderItems]
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession(): SessionState {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return ctx;
}
