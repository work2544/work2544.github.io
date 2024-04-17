import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    brand: {
      blue: "#0A1828",
      turquoise: "#178582",
      gold: "#BFA181",
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: "normal ",
        color: "#BFA181",
      },
    },
    Icon: {
      baseStyle: {
        color: "#BFA181",
      },
    },
    Flex: {
      baseStyle:{
        width: '100%',
        height: '100%'
      }
    }
  },
});
export default theme;
