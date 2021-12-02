import { makeStyles } from "@material-ui/core";

export const useListStyles = makeStyles({
  root: {
    position: "absolute",
    zIndex: 10,
    top: 65,
    right: 0,
    width: "100%",
    backgroundColor: "#ffffff",
  },
});

export const useTextStyles = makeStyles({
  highlight: {
    fontWeight: 700,
  },
});

export const useListItemStyles = makeStyles({
  root: {
    paddingLeft: 70,
  },
});
