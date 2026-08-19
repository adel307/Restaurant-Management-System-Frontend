"use client";

import { createTheme } from "@mui/material/styles";

// Design tokens — the amber/yellow accent has been replaced with blue
// throughout. Ink/cream/sage/clay/mute/line stay as the ticket-motif
// neutrals; "teal" now fills the role amber used to play for the
// trial-subscription status chip so it stays visually distinct from the
// new blue accent.
export const tokens = {
  ink: "#1B1611",
  cream: "#F6F0E4",
  blue: "#2F5FE0",
  blueLight: "#6E93FF",
  sage: "#6B8F71",
  clay: "#8A5A44",
  teal: "#3E7C8C",
  mute: "#8A7B6C",
  line: "#D8CBB8",
  lineDark: "#3A3128",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: tokens.blue,
      light: tokens.blueLight,
      contrastText: "#FFFFFF",
    },
    success: {
      main: tokens.sage,
    },
    warning: {
      main: tokens.teal,
    },
    error: {
      main: tokens.clay,
    },
    background: {
      default: tokens.cream,
      paper: tokens.cream,
    },
    text: {
      primary: tokens.ink,
      secondary: tokens.mute,
    },
    divider: tokens.line,
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: "var(--font-body)",
    h1: { fontFamily: "var(--font-display)" },
    h2: { fontFamily: "var(--font-display)" },
    h3: { fontFamily: "var(--font-display)" },
    h4: { fontFamily: "var(--font-display)" },
    h5: { fontFamily: "var(--font-display)" },
    h6: { fontFamily: "var(--font-display)" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          border: `1px solid ${tokens.line}`,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: "var(--font-mono)" },
      },
    },
  },
});

// Dark variant, nested via ThemeProvider wherever the ink background is
// used (login, website-admin, the open session ticket).
export const darkTheme = createTheme(theme, {
  palette: {
    mode: "dark",
    primary: {
      main: tokens.blueLight,
      contrastText: tokens.ink,
    },
    background: {
      default: tokens.ink,
      paper: tokens.ink,
    },
    text: {
      primary: tokens.cream,
      secondary: "rgba(246, 240, 228, 0.6)",
    },
    divider: tokens.lineDark,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          border: `1px solid ${tokens.lineDark}`,
          boxShadow: "none",
          backgroundColor: tokens.ink,
        },
      },
    },
  },
});

export default theme;
