import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  userPic: {
    width: 35,
    height: 35,
    margin: "auto",
    marginTop: 16,
    borderRadius: "50%",
    backgroundColor: theme.palette.navy.main,
  },
}));
