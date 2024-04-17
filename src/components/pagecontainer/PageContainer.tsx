import { Divider, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../navbar/navbar";
import { ReactNode } from "react";
interface PageContainerProps {
  children: ReactNode;
}
export default function PageContainer(props: PageContainerProps) {
  return (
    <>
      {/* <Grid
        templateAreas={`'sidebar main'`}
        templateColumns="auto 1fr"
        p={0}
        m={0}
        bgColor={"brand.blue"}
      >
        <NavSide />
       
        <GridItem as="main" area="main" paddingInline={8}>
          <Outlet />
        </GridItem>
      </Grid> */}
      <Grid
        templateAreas={`'sidebar'
                         'main'`}
        templateRows="200px 1fr"
        bgColor={"brand.blue"}
        w="100vw"
        h="100vh"
      >
        <NavBar />
        <GridItem as="main" area="main">
          {props.children}
        </GridItem>
      </Grid>
    </>
  );
}
