import { VStack, Icon, Box, GridItem } from "@chakra-ui/react";
import { SiWwise } from "react-icons/si";
import NavSideItems from "./navsideitems";
import { navItems } from "@/assets/routeItems";

export function NavSide() {
  return (
    <GridItem area="sidebar" as="aside" w="full">
      <Box
        pos="sticky"
        top={0}
        w={{ base: "0px" }}
        borderRight="1px solid"
        borderColor="#D2BDEA"
        p={5}
        height="100vh"
        overflow="auto"
        css={{
          "&::-webkit-scrollbar": {
            height: "var(--chakra-sizes-1)",
            width: "var(--chakra-sizes-1)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--chakra-colors-gray-400)",
          },
        }}
      >
        <VStack spacing="5" as="nav" alignItems={"start"}>
          <Icon as={SiWwise} boxSize={8} /> {/*OR PUT YOUR LOGO HERE */}
          <NavSideItems navItems={navItems} />
        </VStack>
      </Box>
    </GridItem>
  );
}

export default NavSide;
