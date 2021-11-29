import { makeStyles } from "@material-ui/core";

export const useListStyles = makeStyles({
  root: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    backgroundColor: "#ffffff",
  },
});

export const useTextStyles = makeStyles({
  highlight: {
    fontWeight: 700,
  },
});
