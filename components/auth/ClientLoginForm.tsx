import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSession } from "@/lib/session-context";

export function ClientLoginForm() {
  const router = useRouter();
  const { login } = useSession();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Placeholder auth: real implementation calls the auth API here.
    login("client");
    router.push("/");
  }

  return (
    <Stack component="form" spacing={2.5} onSubmit={handleSubmit}>
      <TextField
        id="client-email"
        label="Email or username"
        type="text"
        placeholder="you@example.com"
        autoComplete="username"
        fullWidth
        required
      />
      <TextField
        id="client-password"
        label="Password"
        type="password"
        autoComplete="current-password"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" size="large" fullWidth>
        Sign in
      </Button>
    </Stack>
  );
}
