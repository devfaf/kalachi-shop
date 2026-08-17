import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#0F766E",
    },
    secondary: {
      main: "#F59E0B",
    },

    background: {
      default: "#F7F8F7",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1F2937",
    },
  },
  typography: {
    fontFamily: "var(--font-peyda), sans-serif",
  },
});

export default theme;