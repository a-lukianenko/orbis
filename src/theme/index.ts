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
      light: "#E51616",
    },
    success: {
      main: "#58D38C",
    },
    neutral: {
      main: "#B6B7C3",
    },
    navy: {
      main: "#001458",
    },
  },
  props: {
    MuiButton: {
      size: "small",
    },
  },
});

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
    navy: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
    navy: PaletteOptions["primary"];
  }
}
