export type Role = "client" | "restaurant-admin" | "website-admin";

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  contact: string;
  subscriptionStatus: "active" | "trial" | "suspended";
  staffCount: number;
  ordersCount: number;
  totalSales: number;
}

export type MealCategory = "meat" | "salads" | "snacks" | "drinks";

export interface Meal {
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  calories: number;
  description: string;
  ingredients: string[];
  rating: number;
  orderCount: number;
  imageAlt: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  shift: "Morning" | "Evening" | "Night";
  active: boolean;
}

export interface OrderItem {
  mealId: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface SessionOrder {
  id: string;
  status: "open" | "closed";
  items: OrderItem[];
  openedAt: string;
  closedAt?: string;
}

export interface AnalyticsSnapshot {
  totalSalesToday: number;
  totalOrdersToday: number;
  averageOrderValue: number;
  weeklyTrendPct: number;
}

export interface LiveActivityPoint {
  id: string;
  city: string;
  lat: number;
  lng: number;
  ordersPerMinute: number;
}
