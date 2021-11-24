import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useTextFieldStyles, useIconStyles } from "./styles";

export const SearchBar = () => {
  const classesTextField = useTextFieldStyles();
  const classesIcon = useIconStyles();

  return (
    <TextField
      placeholder='Search symbols or companies'
      fullWidth
      classes={classesTextField}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon color='primary' classes={classesIcon} />
          </InputAdornment>
        ),

        disableUnderline: true,
      }}
    />
  );
};
