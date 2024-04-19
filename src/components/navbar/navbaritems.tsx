import { NavitemsProps, NavItemType } from "@/assets/routeItems";
import { Flex, Text, Link, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";

export function NavBarItems({ navItems }: NavitemsProps) {
  const renderItems = (item: NavItemType, index: number) => (
    <Box key={index} w='200px'>
      <Link
        display="block"
        as={NavLink}
        to={item.to}
        _focus={{ bg: "gray.100" }}
        _hover={{
          bg: "gray.200",
        }}
        _activeLink={{ bg: "#485389", color: "white" }}
        w="full"
        borderRadius="md"
      >
        <Flex alignItems="center" p={2} justifyContent={"center"}>
          <Text color={"brand.turquoise"}>{item.label}</Text>
        </Flex>
      </Link>
    </Box>
  );
  return <Flex>{navItems.map((item, index) => renderItems(item, index))}</Flex>;
}

export default NavBarItems;
