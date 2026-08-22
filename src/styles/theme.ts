import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#0F766E",
      light: "#14B8A6",
      dark: "#115E59",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#F7F8F7",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
      disabled: "#9CA3AF",
    },

    error: {
      main: "#DC2626",
      light: "#FEE2E2",
      dark: "#B91C1C",
      contrastText: "#FFFFFF",
    },

    success: {
      main: "#16A34A",
      light: "#DCFCE7",
      dark: "#15803D",
      contrastText: "#FFFFFF",
    },

    warning: {
      main: "#F59E0B",
      light: "#FEF3C7",
      dark: "#D97706",
      contrastText: "#FFFFFF",
    },

    info: {
      main: "#0284C7",
      light: "#E0F2FE",
      dark: "#0369A1",
      contrastText: "#FFFFFF",
    },

    divider: "#E5E7EB",

    action: {
      hover: "rgba(15, 118, 110, 0.08)",
      selected: "rgba(15, 118, 110, 0.12)",
      disabled: "rgba(31, 41, 55, 0.38)",
      disabledBackground: "rgba(31, 41, 55, 0.08)",
      focus: "rgba(15, 118, 110, 0.16)",
    },
  },

  typography: {
    fontFamily: "var(--font-peyda), sans-serif",

    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.35,
    },

    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },

    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },

    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },

    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },

    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.6,
    },

    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.6,
    },

    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.8,
    },

    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.8,
    },

    button: {
      fontFamily: "inherit",
      fontWeight: 600,
      textTransform: "none",
    },

    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },

  shape: {
    borderRadius: 8,
  },

  spacing: 8,

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 8,

          "&:hover": {
            backgroundColor: "transparent",
          },

          "&:active": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 600,
        },
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E5E7EB",
        },
      },
    },
  },
});

export default theme;