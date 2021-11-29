import Box from "@material-ui/core/Box/Box";
import { UserPic } from "components/UserPic";
import { SideBar } from "./components/SideBar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Box display='flex' minHeight='100vh'>
      <SideBar>
        <UserPic />
      </SideBar>
      {children}
    </Box>
  );
};
