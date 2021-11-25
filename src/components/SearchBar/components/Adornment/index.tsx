import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useIconStyles } from "./styles";

export const Adornment = () => {
  const classesIcon = useIconStyles();

  return (
    <InputAdornment position='start'>
      <SearchIcon color='primary' classes={classesIcon} />
    </InputAdornment>
  );
};
