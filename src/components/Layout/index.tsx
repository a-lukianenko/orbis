import { UserPic } from "components/UserPic";
import { SideBar } from "./components/SideBar";
import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { layout } = useStyles();

  return (
    <div className={layout}>
      <SideBar>
        <UserPic />
      </SideBar>
      {children}
    </div>
  );
};
