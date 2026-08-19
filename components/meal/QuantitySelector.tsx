import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuantitySelectorProps {
  value: number;
  onChange: (quantity: number) => void;
}

export function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography
        sx={{
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "text.secondary",
        }}
      >
        Quantity
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", border: 1, borderColor: "divider", borderRadius: 1 }}>
        <IconButton
          aria-label="Decrease quantity"
          size="small"
          onClick={() => onChange(Math.max(1, value - 1))}
        >
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ width: 32, textAlign: "center", fontFamily: "var(--font-mono)" }}>
          {value}
        </Typography>
        <IconButton
          aria-label="Increase quantity"
          size="small"
          onClick={() => onChange(value + 1)}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
