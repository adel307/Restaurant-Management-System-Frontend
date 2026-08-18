import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Meal } from "@/lib/types";

export function MealHeader({ meal }: { meal: Meal }) {
  return (
    <Box>
      {/* Container موحد للـ Box كخلفية للصورة أو للـ Fallback */}
      <Box
        sx={{
          height: 256,
          borderRadius: 2,
          position: "relative",
          overflow: "hidden",
          mb: 3,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          background:
            "linear-gradient(135deg, rgba(138,90,68,0.25), rgba(47,95,224,0.15))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* الحرف الأول يعرض دائماً في المنتصف تحت الصورة */}
        <Typography
          variant="h2"
          sx={{
            fontStyle: "italic",
            color: "rgba(138,90,68,0.5)",
            userSelect: "none",
          }}
        >
          {meal.name.charAt(0)}
        </Typography>

        {/* 2. إذا كان الـ URL موجود، يتم وضع الصورة فوق الكارت */}
        {meal.imageUrl && (
          <Box
            component="img"
            src={meal.imageUrl}
            alt={meal.imageAlt || meal.name}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
              color: "transparent", // إخفاء نص الـ alt الأبيض إذا فشل تحميل الصورة
              // إخفاء أي أثر للـ broken image icon أو الـ alt text في حالة الخطأ
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              },
            }}
          />
        )}
      </Box>

      {/* تفاصيل الوجبة */}
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#ffffff" }}>
          {meal.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "var(--font-mono)",
            fontSize: 24,
            fontWeight: 600,
            whiteSpace: "nowrap",
            color: "#22c55e",
          }}
        >
          {meal.price} EGP
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "rgba(255, 255, 255, 0.5)",
          mt: 0.5,
        }}
      >
        Order #{meal.id.replace("meal-", "")} · ★ {meal.rating}
      </Typography>
    </Box>
  );
}