import Typography from "@material-ui/core/Typography/Typography";
import { useStyles } from "./styles";

export type TickerTitleProps = Pick<TickerDetails, "symbol" | "name">;

export const TickerTitle = <T extends TickerTitleProps>({
  symbol,
  name,
}: T) => {
  const { symbol: symbolStyle, name: nameStyle } = useStyles();

  return (
    <section>
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
    </section>
  );
};
