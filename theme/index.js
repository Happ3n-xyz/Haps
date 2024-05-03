import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    brand: {
      100: "linear-gradient(180deg, #A2D6C7 3%, #53F6C6 82%)",
      200: "#53F6C6",
    },
    background: "#060606",
    primaryBackground: "#121212",

    textPrimary: "#ffffff",
    textSecondary: "black",
    textTertiary: "#CBCBCB",
    textBrand: "#53F6C6",

    buttonPrimary : {
      bg: "linear-gradient(90deg, #17D7C0 0%, #0C7164 100%)",
      color: "black",
      hover: "linear-gradient(180deg, #53F6C6 3%, #53F6C6 82%)",
    },
    buttonSecondary: {
      bg: "#29282B",
      color: "textPrimary",
      hover: "#3b393e",
    },
    buttonTertiary: {
      bg: "#FFFFFF",
      color: "textSecondary",
      hover: "#bcbcbc",
    },
    //items
    itemselector : "#D9D9D9",
    cardBackground: "#121212",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        bg: "background",
        color: "textPrimary",
      },
    },
  },
});

export default theme;
