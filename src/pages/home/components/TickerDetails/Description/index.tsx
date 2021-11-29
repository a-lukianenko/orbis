import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button/Button";
import { useLayoutEffect, useRef, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useStyles } from "./styles";

type Props = {
  description: string;
};

const COLLAPSED_SIZE = 50;

export const Description = ({ description }: Props) => {
  const [checked, setChecked] = useState(true);
  const [showCollapseToggler, setShowCollapseToggler] = useState(true);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const classes = useStyles();

  const handleChange = () => setChecked((prev) => !prev);

  useLayoutEffect(() => {
    if (ref.current !== null) {
      const { height } = ref.current.getBoundingClientRect();
      if (height < COLLAPSED_SIZE) {
        setChecked(false);
        setShowCollapseToggler(false);
      }
    }
  }, []);

  return (
    <Box display='flex' flexDirection='column'>
      <Box component='h3' fontSize='18px' fontWeight='bold'>
        Description
      </Box>

      <>
        <Collapse in={!checked} collapsedSize={COLLAPSED_SIZE}>
          <Typography variant='body1' component='p' ref={ref}>
            {description}
          </Typography>
        </Collapse>

        {showCollapseToggler && (
          <Button onClick={handleChange} disableRipple classes={classes}>
            {checked ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </Button>
        )}
      </>
    </Box>
  );
};