import styled from "styled-components";
import Navside from "@/components/navside/Navside";
import { routeItems } from "@/assets/routeItems";
import { Outlet } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function Root() {
  return (
    <RootPage>
      <Grid
        templateAreas={`'sidebar main'`}
        templateColumns="auto 1fr"
        p={0}
        m={0}
      >
        <GridItem area="sidebar" as="aside" w="full">
          <Box
            pos="sticky"
            top={0}
            w={{ base: "233px" }}
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
            <Navside navItems={routeItems} />
          </Box>
        </GridItem>
        <GridItem as="main" area="main" paddingInline={8}>
          <Outlet />
        </GridItem>
      </Grid>
    </RootPage>
  );
}

const RootPage = styled.div`
  background-color: #f0f5ff;
  font-size: 16px;
`;
