"use client";

import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

interface AddToOrderButtonProps {
  onAdd: () => void;
  added: boolean;
}

export function AddToOrderButton({ onAdd, added }: AddToOrderButtonProps) {
  return (
    <Button
      type="button"
      variant="contained"
      fullWidth
      onClick={onAdd}
      startIcon={
        added ? (
          <CheckCircleOutlineIcon sx={{ fontSize: "20px !important" }} />
        ) : (
          <LocalMallOutlinedIcon sx={{ fontSize: "20px !important" }} />
        )
      }
      sx={{
        height: { xs: 48, sm: 52 },
        borderRadius: 2.5,
        fontSize: { xs: 14, sm: 15 },
        fontWeight: 700,
        textTransform: "none",
        letterSpacing: "0.02em",
        fontFamily: "var(--font-body)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        
        /* التنسيق الأساسي وحالة الإضافة */
        bgcolor: added ? "rgba(34, 197, 94, 0.2)" : "#22c55e",
        color: added ? "#4ade80" : "#0f172a",
        border: added ? "1px solid rgba(34, 197, 94, 0.4)" : "1px solid transparent",
        boxShadow: added
          ? "0 0 15px rgba(34, 197, 94, 0.25)"
          : "0 4px 14px rgba(34, 197, 94, 0.35)",

        /* تأثير الإضاءة والتألق (Glow) عند مرور الماوس */
        "&:hover": {
          bgcolor: added ? "rgba(34, 197, 94, 0.28)" : "#16a34a",
          color: added ? "#86efac" : "#ffffff",
          borderColor: added ? "rgba(34, 197, 94, 0.6)" : "transparent",
          transform: "translateY(-2px)",
          boxShadow: added
            ? "0 0 20px rgba(34, 197, 94, 0.4)"
            : "0 0 25px rgba(34, 197, 94, 0.65), 0 4px 20px rgba(34, 197, 94, 0.4)",
        },

        /* تأثير الضغط على الزر */
        "&:active": {
          transform: "translateY(0)",
        },
      }}
    >
      {added ? "Added to order" : "Add to order"}
    </Button>
  );
}