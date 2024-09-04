import { extendTheme,  theme as chakraTheme } from "@chakra-ui/react";

export const theme: Record<string, any> = extendTheme({
  colors: {
    ...chakraTheme.colors,
    primary: {
      500: "#FF5959"
    },
    secondary: {
      500: "#F3F2EF"
    },
    black: {
      500: "#171717"
    },
    grey: {
      500: "#4C4C49"
    }
  },
  space: {
    ...chakraTheme.space,
    20: "20px",
    40: "40px",
    60: "60px",
    80: "80px",
    120: "120px"
  },
  fontSizes: {
    ...chakraTheme.fontSizes,
  }
});