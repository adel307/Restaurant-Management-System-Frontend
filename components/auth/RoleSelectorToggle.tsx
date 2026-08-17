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
    <Box sx={{ mb: 4 }}>
      <ToggleButtonGroup
        value={value}
        exclusive
        fullWidth
        aria-label="Sign in as"
        onChange={(_, next) => {
          if (next !== null) onChange(next);
        }}
      >
        {ROLES.map((role) => (
          <ToggleButton
            key={role.value}
            value={role.value}
            aria-label={role.label}
            sx={{ fontSize: { xs: "0.7rem", sm: "0.8125rem" }, textTransform: "none" }}
          >
            {role.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
