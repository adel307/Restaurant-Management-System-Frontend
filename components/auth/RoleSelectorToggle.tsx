"use client";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Box from "@mui/material/Box";
import { Role } from "@/lib/types";

interface RoleSelectorToggleProps {
  value: Role;
  onChange: (role: Role) => void;
}

const ROLES: { value: Role; label: string }[] = [
  { value: "client", label: "Client" },
  { value: "restaurant-admin", label: "Restaurant Admin" },
  { value: "website-admin", label: "Website Admin" },
];

export function RoleSelectorToggle({ value, onChange }: RoleSelectorToggleProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <ToggleButtonGroup
        value={value}
        exclusive
        fullWidth
        aria-label="Sign in as"
        onChange={(_, next) => {
          if (next !== null) onChange(next);
        }}
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(8px)",
          p: "4px",
          borderRadius: 3,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          "& .MuiToggleButtonGroup-grouped": {
            border: 0,
            borderRadius: 2,
            mx: "2px",
            color: "rgba(255, 255, 255, 0.7)",
            transition: "all 0.3s ease",
            fontWeight: 500,
            "&.Mui-selected": {
              bgcolor: "primary.main",
              color: "#fff",
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            },
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.08)",
              color: "#fff",
            },
          },
        }}
      >
        {ROLES.map((role) => (
          <ToggleButton
            key={role.value}
            value={role.value}
            aria-label={role.label}
            sx={{
              fontSize: { xs: "0.725rem", sm: "0.8125rem" },
              textTransform: "none",
              py: 1,
            }}
          >
            {role.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}