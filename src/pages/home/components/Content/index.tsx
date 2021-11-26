import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Content = ({ children }: Props) => {
  const { content } = useStyles();
  return <div className={content}>{children}</div>;
};
