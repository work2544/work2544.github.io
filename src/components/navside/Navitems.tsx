import { List, ListItem, Icon, Flex, Text, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";
export interface SidenavItem {
  icon: IconType;
  label: string;
  to: string;
}

export interface NavitemsProps {
  navItems: SidenavItem[];
  mode?: "semi" | "over";
}

export function Navitems({ navItems }: NavitemsProps) {
  const sidebarItemInOverMode = (item: SidenavItem, index: number) => (
    <ListItem key={index}>
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
        <Flex alignItems="center" p={2}>
          <Icon boxSize="5" as={item.icon} />
          <Text ml={2}>{item.label}</Text>
        </Flex>
      </Link>
    </ListItem>
  );
  return (
    <List spacing={3}>
      {navItems.map((item, index) => sidebarItemInOverMode(item, index))}
    </List>
  );
}

export default Navitems;
