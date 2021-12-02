import { useStyles } from "./styles";

export const UserPic = () => {
  const { userPic } = useStyles();
  return <div className={userPic}></div>;
};
