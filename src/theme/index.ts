import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5887D3",
    },
    secondary: {
      main: "#8B40CB",
    },
    error: {
      main: "#E83E3E",
    },
    success: {
      main: "#58D38C",
    },
  },
  props: {
    MuiButton: {
      size: "small",
    },
  },
});
