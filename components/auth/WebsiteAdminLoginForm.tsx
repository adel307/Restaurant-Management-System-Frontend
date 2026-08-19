import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSession } from "@/lib/session-context";

export function WebsiteAdminLoginForm() {
  const router = useRouter();
  const { login } = useSession();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Placeholder auth: real implementation calls the platform-level auth API.
    login("website-admin");
    router.push("/");
  }

  return (
    <Stack component="form" spacing={2.5} onSubmit={handleSubmit}>
      <TextField
        id="admin-email"
        label="Personal email"
        type="email"
        placeholder="you@rms.com"
        autoComplete="username"
        fullWidth
        required
      />
      <TextField
        id="admin-password"
        label="Admin password"
        type="password"
        autoComplete="current-password"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" size="large" fullWidth>
        Sign in to platform
      </Button>
    </Stack>
  );
}
