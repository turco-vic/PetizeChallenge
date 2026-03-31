import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      purple: "#7B2FBE",
      blue: "#4A90D9",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "brand.purple",
          color: "white",
          _hover: { bg: "#6a28a8" },
        },
      },
    },
  },
});

export default theme;
