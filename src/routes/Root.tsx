import { Outlet } from "react-router-dom";
import PageContainer from "@/components/pagecontainer/PageContainer";

export default function Root() {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
}
