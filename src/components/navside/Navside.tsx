import React from "react";
import {
  VStack,
  Icon
} from "@chakra-ui/react";
import { SiWwise } from "react-icons/si";
import SidenavItems, { SidenavItem } from './Navitems';

export interface SidenavProps {
  navItems: SidenavItem[];
}

export function Navside({ navItems }: SidenavProps) {
  
  return (
    <React.Fragment>
      <VStack spacing="5" as="nav" alignItems={'start'}>
        <Icon as={SiWwise} boxSize={8} /> {/*OR PUT YOUR LOGO HERE */}
        <SidenavItems navItems={navItems} />
      </VStack>
    </React.Fragment>
  );
}

export default Navside;