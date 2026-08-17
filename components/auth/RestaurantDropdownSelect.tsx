import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { mockRestaurants } from "@/lib/mock-data";

interface RestaurantDropdownSelectProps {
  value: string;
  onChange: (restaurantId: string) => void;
}

export function RestaurantDropdownSelect({
  value,
  onChange,
}: RestaurantDropdownSelectProps) {
  function handleChange(e: SelectChangeEvent) {
    onChange(e.target.value);
  }

  return (
    <FormControl fullWidth required>
      <InputLabel id="restaurant-select-label">Your restaurant</InputLabel>
      <Select
        labelId="restaurant-select-label"
        id="restaurant-select"
        label="Your restaurant"
        value={value}
        onChange={handleChange}
        displayEmpty
      >
        {mockRestaurants.map((restaurant) => (
          <MenuItem key={restaurant.id} value={restaurant.id}>
            {restaurant.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
