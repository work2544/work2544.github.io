import { Box, Divider, GridItem, HStack } from "@chakra-ui/react";
import { navItems } from "@/assets/routeItems";
import NavBarItems from "@/components/navbar/navbaritems";

export function NavBar() {
  return (
    <GridItem area="sidebar" as="aside" w="full">
      <Box
        pos="sticky"
        top={0}
        w={"100%"}
        borderRight="1px solid"
        borderColor="#D2BDEA"
        p={5}
        overflow="auto"
      >
        <HStack as="nav" justifyContent={"center"}>
          <NavBarItems navItems={navItems} />
        </HStack>
        <Divider mt={10} orientation="horizontal" />
      </Box>
      
    </GridItem>
  );
}

export default NavBar;
