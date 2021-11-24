import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const SideBar = ({ children }: Props) => {
  const { sidebar } = useStyles();
  return <aside className={sidebar}>{children}</aside>;
};
