import Box from "@material-ui/core/Box/Box";
import { ResponsiveContainer, LineChart, Line } from "recharts";

type Props = {
  data: PriceAggregate[];
};

export const AggregatesChart = ({ data }: Props) => (
  <Box component='section' mt='10px'>
    <ResponsiveContainer width='100%' height={330}>
      <LineChart width={400} height={400} data={data}>
        <Line
          type='monotone'
          strokeWidth={4}
          dataKey='c'
          stroke='#E51616'
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </Box>
);
