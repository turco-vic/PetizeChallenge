import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      purple: "#8C19D2",
      blue: "#2F6FB2",
    },
  },
  fonts: {
    heading: "Nunito, sans-serif",
    body: "Nunito, sans-serif",
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "brand.purple",
          color: "white",
          _hover: { bg: "#8C19D2" },
        },
      },
    },
  },
});

export default theme;
