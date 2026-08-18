"use client";

import { useState } from "react";
import { notFound, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { getMealById } from "@/lib/mock-data";
import { useSession } from "@/lib/session-context";
import { TopBar } from "@/components/ui/TopBar";
import { MealHeader } from "@/components/meal/MealHeader";
import { MealDescription } from "@/components/meal/MealDescription";
import { QuantitySelector } from "@/components/meal/QuantitySelector";
import { AddToOrderButton } from "@/components/meal/AddToOrderButton";

export default function MealDetailsPage({
  params,
}: {
  params: { mealId: string };
}) {
  const router = useRouter();
  const { role, addMealToOrder } = useSession();
  const meal = getMealById(params.mealId);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!meal) {
    notFound();
  }

  function handleAdd() {
    if (role !== "client") {
      router.push("/login");
      return;
    }
    addMealToOrder(meal!, quantity);
    setAdded(true);
  }

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.35) 0%,
          rgba(0, 0, 0, 0.55) 100%
        ), url('/res5.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* شريط التنقل العلوي */}
      <TopBar />

      {/* محتوى الوجبة الرئيسي مع أنيميشن الظهور */}
      <Fade in timeout={1000}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, sm: 4 },
            py: { xs: 6, sm: 8 },
          }}
        >
          <Slide direction="down" in timeout={800}>
            <Card
              sx={{
                width: "100%",
                maxWidth: 680,
                bgcolor: "rgba(18, 22, 31, 0.78)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: 4,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                overflow: "hidden",
                color: "#ffffff",
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
                {/* هيدر الوجبة (الصورة، الاسم، السعر) */}
                <MealHeader meal={meal} />

                {/* وصف الوجبة */}
                <Box sx={{ my: 3 }}>
                  <MealDescription meal={meal} />
                </Box>

                {/* التحكم بالكمية وإضافة للطلب */}
                <Box
                  sx={{
                    pt: 3,
                    mt: 3,
                    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "stretch", sm: "center" },
                    justifyContent: "space-between",
                    gap: 2.5,
                  }}
                >
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                  
                  <Box sx={{ flexGrow: 1, maxWidth: { sm: 260 } }}>
                    <AddToOrderButton onAdd={handleAdd} added={added} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Slide>
        </Box>
      </Fade>
    </Box>
  );
}