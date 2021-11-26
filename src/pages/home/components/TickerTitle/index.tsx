import Typography from "@material-ui/core/Typography/Typography";
import { useStyles } from "./styles";

type Props = Pick<TickerDetails, "symbol" | "name">;

export const TickerTitle = ({ symbol, name }: Props) => {
  const { symbol: symbolStyle, name: nameStyle } = useStyles();

  return (
    <div>
      <Typography
        variant='h5'
        component='h2'
        display='inline'
        className={symbolStyle}
      >
        {symbol}
      </Typography>
      <Typography display='inline' component='span' className={nameStyle}>
        {name}
      </Typography>
    </div>
  );
};
