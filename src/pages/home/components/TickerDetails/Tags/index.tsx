import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import { theme } from "theme";

type Props = Pick<TickerDetails, "tags">;

export const Tags = ({ tags }: Props) => {
  return (
    <div>
      <Box component='h3' fontSize='18px' fontWeight='bold'>
        Tags
      </Box>
      {tags.map((tag, i) => {
        return (
          <Button
            key={tag}
            size='small'
            style={{
              marginRight: 20,
              color: "#fff",
              textTransform: "none",
              cursor: "default",
              backgroundColor:
                i % 2
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
            }}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};
