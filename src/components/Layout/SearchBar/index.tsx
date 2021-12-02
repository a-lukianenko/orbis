import { ChangeEvent, useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import TextField from "@material-ui/core/TextField";

import { useTickerDispatch } from "context";
import { getTickers } from "api/getTickers";
import { useStyles } from "./styles";
import { Adornment } from "./components/Adornment";
import { useDebouncedCallback } from "hooks/useDebouncedCallback";

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
      const response: AxiosResponse<{ results: Ticker[] | null }> =
        await getTickers(tickerName);

      const {
        data: { results },
      } = response;

      return dispatch({
        type: "setSearchResults",
        payload: { results, search: tickerName },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return dispatch({
          type: "setError",
          payload: error?.response?.data || "error",
        });
      }
      if (error instanceof Error) {
        dispatch({ type: "setError", payload: error.message });
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
