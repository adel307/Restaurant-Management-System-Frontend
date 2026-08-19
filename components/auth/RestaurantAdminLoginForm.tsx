"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSession } from "@/lib/session-context";
import { RestaurantDropdownSelect } from "./RestaurantDropdownSelect";

export function RestaurantAdminLoginForm() {
  const router = useRouter();
  const { login } = useSession();
  const [restaurantId, setRestaurantId] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Placeholder auth: real implementation validates the restaurant
    // password against the selected restaurant via the auth API.
    login("restaurant-admin", restaurantId);
    router.push("/");
  }

  return (
    <Stack component="form" spacing={2.5} onSubmit={handleSubmit}>
      <RestaurantDropdownSelect value={restaurantId} onChange={setRestaurantId} />
      <TextField
        id="restaurant-password"
        label="Restaurant password"
        type="password"
        autoComplete="current-password"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" size="large" fullWidth>
        Sign in to dashboard
      </Button>
    </Stack>
  );
}
