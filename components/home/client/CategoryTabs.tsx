import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { MealCategory } from "@/lib/types";

interface CategoryTabsProps {
  value: MealCategory | "all";
  onChange: (category: MealCategory | "all") => void;
}

const CATEGORIES: { value: MealCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "meat", label: "Meat" },
  { value: "salads", label: "Salads" },
  { value: "snacks", label: "Snacks" },
  { value: "drinks", label: "Drinks" },
];

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
      <Tabs
        value={value}
        onChange={(_, next) => onChange(next)}
        aria-label="Menu categories"
        variant="scrollable"
        scrollButtons="auto"
      >
        {CATEGORIES.map((category) => (
          <Tab key={category.value} value={category.value} label={category.label} />
        ))}
      </Tabs>
    </Box>
  );
}
