import {
  AnalyticsSnapshot,
  LiveActivityPoint,
  Meal,
  OrderItem,
  Restaurant,
  SessionOrder,
  StaffMember,
} from "./types";

// NOTE: All data in this file is placeholder data standing in for real
// Backend API responses (RestaurantDropdownSelect, MenuSection, dashboards,
// etc.). Replace the functions below with real `fetch` calls to the RMS API
// once endpoints exist — the shapes returned here already match the types
// in lib/types.ts so the swap should be mechanical.

export const mockRestaurants: Restaurant[] = [
  {
    id: "rst-01",
    name: "Nile Grill House",
    address: "14 Corniche El Nil, Maadi, Cairo",
    contact: "+20 100 111 2233",
    subscriptionStatus: "active",
    staffCount: 12,
    ordersCount: 348,
    totalSales: 214500,
  },
  {
    id: "rst-02",
    name: "Sahara Spice Kitchen",
    address: "6 Tahrir St, Dokki, Giza",
    contact: "+20 101 222 3344",
    subscriptionStatus: "active",
    staffCount: 8,
    ordersCount: 201,
    totalSales: 132750,
  },
  {
    id: "rst-03",
    name: "Delta Bites",
    address: "22 El Geish Rd, Mansoura",
    contact: "+20 102 333 4455",
    subscriptionStatus: "trial",
    staffCount: 4,
    ordersCount: 39,
    totalSales: 18200,
  },
  {
    id: "rst-04",
    name: "Red Sea Table",
    address: "3 Sheraton Rd, Hurghada",
    contact: "+20 103 444 5566",
    subscriptionStatus: "suspended",
    staffCount: 6,
    ordersCount: 87,
    totalSales: 51300,
  },
];

export const mockMeals: Meal[] = [
  {
    id: "meal-01",
    name: "Charcoal Kofta Skewers",
    category: "meat",
    price: 185,
    calories: 620,
    description:
      "Hand-minced beef kofta, charred over open coals, served with grilled tomato and tahini.",
    ingredients: ["Beef", "Onion", "Parsley", "Baharat spice", "Tahini"],
    rating: 4.8,
    orderCount: 412,
    imageAlt: "Charcoal-grilled kofta skewers on a metal plate",
    imageUrl: "/Kofta-kebabs-1.jpg",
  },
  {
    id: "meal-02",
    name: "Lemon Herb Roast Chicken",
    category: "meat",
    price: 210,
    calories: 540,
    description: "Half chicken marinated in lemon, garlic, and thyme, roasted until crisp.",
    ingredients: ["Chicken", "Lemon", "Garlic", "Thyme", "Olive oil"],
    rating: 4.6,
    orderCount: 355,
    imageAlt: "Roast chicken with lemon wedges",
  },
  {
    id: "meal-03",
    name: "Baladi Fattoush",
    category: "salads",
    price: 95,
    calories: 240,
    description: "Crisp romaine, radish, and toasted baladi bread tossed in a sumac vinaigrette.",
    ingredients: ["Romaine", "Radish", "Baladi bread", "Sumac", "Pomegranate molasses"],
    rating: 4.5,
    orderCount: 198,
    imageAlt: "Fattoush salad with toasted bread pieces",
  },
  {
    id: "meal-04",
    name: "Roasted Beet & Feta Salad",
    category: "salads",
    price: 110,
    calories: 280,
    description: "Slow-roasted beets, whipped feta, candied walnuts, and a mint oil drizzle.",
    ingredients: ["Beetroot", "Feta", "Walnuts", "Mint", "Honey"],
    rating: 4.4,
    orderCount: 132,
    imageAlt: "Beet and feta salad on a white plate",
  },
  {
    id: "meal-05",
    name: "Crispy Falafel Bites",
    category: "snacks",
    price: 65,
    calories: 310,
    description: "Herb-packed falafel, fried to order, served with tahini and pickles.",
    ingredients: ["Fava beans", "Chickpeas", "Coriander", "Cumin", "Tahini"],
    rating: 4.7,
    orderCount: 289,
    imageAlt: "Falafel bites with tahini dip",
  },
  {
    id: "meal-06",
    name: "Sweet Potato Fries",
    category: "snacks",
    price: 55,
    calories: 380,
    description: "Oven-crisped sweet potato fries with a smoked paprika dust.",
    ingredients: ["Sweet potato", "Smoked paprika", "Sea salt"],
    rating: 4.3,
    orderCount: 176,
    imageAlt: "Sweet potato fries in a paper cone",
  },
  {
    id: "meal-07",
    name: "Hibiscus Iced Tea",
    category: "drinks",
    price: 40,
    calories: 90,
    description: "Cold-brewed karkade steeped with mint and a touch of raw sugar.",
    ingredients: ["Hibiscus", "Mint", "Raw sugar"],
    rating: 4.6,
    orderCount: 264,
    imageAlt: "Glass of hibiscus iced tea with mint",
  },
  {
    id: "meal-08",
    name: "Mango Sohary Juice",
    category: "drinks",
    price: 45,
    calories: 160,
    description: "Fresh-pressed Sohary mango, chilled and unsweetened.",
    ingredients: ["Mango"],
    rating: 4.9,
    orderCount: 301,
    imageAlt: "Glass of fresh mango juice",
  },
];

export const mockStaff: StaffMember[] = [
  { id: "stf-01", name: "Mostafa Reda", role: "Head Chef", shift: "Morning", active: true },
  { id: "stf-02", name: "Yara Hassan", role: "Sous Chef", shift: "Morning", active: true },
  { id: "stf-03", name: "Karim Fathy", role: "Waiter", shift: "Evening", active: true },
  { id: "stf-04", name: "Nourhan Adel", role: "Waiter", shift: "Evening", active: false },
  { id: "stf-05", name: "Omar Sami", role: "Cashier", shift: "Night", active: true },
  { id: "stf-06", name: "Salma Tarek", role: "Host", shift: "Morning", active: true },
];

export const mockAnalytics: AnalyticsSnapshot = {
  totalSalesToday: 18420,
  totalOrdersToday: 96,
  averageOrderValue: 192,
  weeklyTrendPct: 7.4,
};

export const mockOrderHistory: SessionOrder[] = [
  {
    id: "ord-2201",
    status: "closed",
    openedAt: "2026-08-12T19:04:00Z",
    closedAt: "2026-08-12T20:31:00Z",
    items: [
      { mealId: "meal-01", name: "Charcoal Kofta Skewers", quantity: 2, unitPrice: 185 },
      { mealId: "meal-07", name: "Hibiscus Iced Tea", quantity: 2, unitPrice: 40 },
    ],
  },
  {
    id: "ord-2187",
    status: "closed",
    openedAt: "2026-08-05T13:12:00Z",
    closedAt: "2026-08-05T14:02:00Z",
    items: [
      { mealId: "meal-05", name: "Crispy Falafel Bites", quantity: 1, unitPrice: 65 },
      { mealId: "meal-03", name: "Baladi Fattoush", quantity: 1, unitPrice: 95 },
      { mealId: "meal-08", name: "Mango Sohary Juice", quantity: 1, unitPrice: 45 },
    ],
  },
];

export function getMealById(mealId: string): Meal | undefined {
  return mockMeals.find((m) => m.id === mealId);
}

export function orderItemsTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

// Illustrative "global activity" points for the hero globe. Not tied to the
// restaurant directory above (which is Egypt-only) — this is presentational
// mock data standing in for a future live-orders feed across the whole
// platform. Replace with a real websocket/polling feed keyed the same way.
export const mockLiveActivity: LiveActivityPoint[] = [
  { id: "act-cai", city: "Cairo", lat: 30.04, lng: 31.24, ordersPerMinute: 14 },
  { id: "act-dxb", city: "Dubai", lat: 25.2, lng: 55.27, ordersPerMinute: 9 },
  { id: "act-ruh", city: "Riyadh", lat: 24.71, lng: 46.68, ordersPerMinute: 7 },
  { id: "act-ist", city: "Istanbul", lat: 41.01, lng: 28.98, ordersPerMinute: 11 },
  { id: "act-lon", city: "London", lat: 51.51, lng: -0.13, ordersPerMinute: 6 },
  { id: "act-nyc", city: "New York", lat: 40.71, lng: -74.0, ordersPerMinute: 12 },
  { id: "act-par", city: "Paris", lat: 48.85, lng: 2.35, ordersPerMinute: 5 },
  { id: "act-sin", city: "Singapore", lat: 1.35, lng: 103.82, ordersPerMinute: 8 },
  { id: "act-tok", city: "Tokyo", lat: 35.68, lng: 139.65, ordersPerMinute: 10 },
  { id: "act-sao", city: "São Paulo", lat: -23.55, lng: -46.63, ordersPerMinute: 6 },
];
