import { createTheme } from "@mui/material/styles";
import { palette } from "./colorPalette";

const theme = createTheme({
  palette: {
    primary: {
      main: palette.PRIMARY,
    },
    secondary: {
      main: palette.SECONDARY,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "20rem",
        },
      },
    },
  },
});

export { theme };
