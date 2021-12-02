import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 72;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.neutral.main,
  },
  content: {
    flexGrow: 1,
    padding: `${theme.spacing(3)}px 0`,
    border: "none",
    marginTop: 40,
  },
}));
