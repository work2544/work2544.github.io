import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    brand: {
      blue: "#0A1828",
      turquoise: "#178582",
      gold: "#BFA181",
    },
  },
  components: {
    Heading:{
      baseStyle: {
        color: "brand.turquoise",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "normal ",
        color: "brand.gold",
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
