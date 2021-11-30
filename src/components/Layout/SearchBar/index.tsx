import TextField from "@material-ui/core/TextField";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { handleAxiosError } from "api/httpClient";
import axios from "axios";
import { getTickers } from "api/getTickers";
import { useDebouncedCallback } from "../../../hooks/useDebouncedCallback";
import { Adornment } from "./components/Adornment";
import { useTickerDispatch } from "context";

type Props = {
  isSearchSelected: boolean;
};

export const SearchBar = ({ isSearchSelected }: Props) => {
  const classesTextField = useStyles();

  const dispatch = useTickerDispatch();

  // `tickerName` stands for ticker symbol and company name
  const [tickerName, setTickerName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTickerName(event.target.value);
  };

  const requestTickers = useCallback(async () => {
    if (tickerName === "") {
      return dispatch({
        type: "setSearchResults",
        payload: { results: [], search: "" },
      });
    }

    try {
      const response = await getTickers(tickerName);

      const {
        data: { results },
      } = response;

      return dispatch({
        type: "setSearchResults",
        payload: { results, search: tickerName },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return handleAxiosError(error);
      }

      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }, [dispatch, tickerName]);

  useDebouncedCallback(requestTickers);

  useEffect(() => {
    if (isSearchSelected) {
      setTickerName("");
    }
  }, [isSearchSelected]);

  return (
    <TextField
      placeholder='Search symbols or companies'
      fullWidth
      classes={classesTextField}
      value={tickerName}
      onChange={handleChange}
      InputProps={{
        startAdornment: <Adornment />,
        disableUnderline: true,
      }}
    />
  );
};
