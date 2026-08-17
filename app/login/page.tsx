"use client";

import { useState } from "react";
import { Role } from "@/lib/types";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { RoleSelectorToggle } from "@/components/auth/RoleSelectorToggle";
import { ClientLoginForm } from "@/components/auth/ClientLoginForm";
import { RestaurantAdminLoginForm } from "@/components/auth/RestaurantAdminLoginForm";
import { WebsiteAdminLoginForm } from "@/components/auth/WebsiteAdminLoginForm";

export default function LoginPage() {
  const [role, setRole] = useState<Role>("client");

  return (
    <AuthLayout>
      <RoleSelectorToggle value={role} onChange={setRole} />
      {role === "client" && <ClientLoginForm />}
      {role === "restaurant-admin" && <RestaurantAdminLoginForm />}
      {role === "website-admin" && <WebsiteAdminLoginForm />}
    </AuthLayout>
  );
}
