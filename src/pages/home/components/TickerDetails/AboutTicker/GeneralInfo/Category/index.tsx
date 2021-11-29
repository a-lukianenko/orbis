import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";

type Props = {
  category: string;
  value: string;
};

export const GeneralInfoCategory = ({ category, value }: Props) => {
  return (
    <Box>
      <Typography display='inline' variant='body1'>
        {category}:
      </Typography>
      <Box component='span' ml='5px' fontSize={16} fontWeight='bold'>
        {value}
      </Box>
    </Box>
  );
};
