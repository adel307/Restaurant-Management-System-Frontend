"use client";

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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 1.5, sm: 2 },
        width: { xs: "100%", sm: "auto" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 11, sm: 12 },
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "rgba(255, 255, 255, 0.6)",
          fontFamily: "var(--font-body)",
        }}
      >
        Quantity
      </Typography>

      {/* صندوق العداد الزجاجي */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: 2.5,
          p: 0.5,
          transition: "border-color 0.2s ease",
          "&:hover": {
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        {/* زر الإنقاص */}
        <IconButton
          aria-label="Decrease quantity"
          size="small"
          disabled={value <= 1}
          onClick={() => onChange(Math.max(1, value - 1))}
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            p: { xs: 0.75, sm: 1 },
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "rgba(239, 68, 68, 0.15)", // توريد باللون الأحمر الخفيف
              color: "#ef4444",
              boxShadow: "0 0 10px rgba(239, 68, 68, 0.4)", // إضاءة Glow
            },
            "&.Mui-disabled": {
              color: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <RemoveIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
        </IconButton>

        {/* رقم الكمية الحالي */}
        <Typography
          sx={{
            width: { xs: 36, sm: 40 },
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 700,
            color: "#ffffff",
            userSelect: "none",
          }}
        >
          {value}
        </Typography>

        {/* زر الزيادة */}
        <IconButton
          aria-label="Increase quantity"
          size="small"
          onClick={() => onChange(value + 1)}
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            p: { xs: 0.75, sm: 1 },
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "rgba(34, 197, 94, 0.15)", // توريد باللون الأخضر الخفيف
              color: "#22c55e",
              boxShadow: "0 0 10px rgba(34, 197, 94, 0.4)", // إضاءة Glow
            },
          }}
        >
          <AddIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
        </IconButton>
      </Box>
    </Box>
  );
}