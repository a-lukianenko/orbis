import TextField from "@material-ui/core/TextField";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { handleAxiosError } from "api/httpClient";
import axios from "axios";
import { getTickers } from "api/getTickers";
import { useDebouncedCallback } from "../../hooks/useDebouncedCallback";
import { Adornment } from "./components/Adornment";

type Props = {
  isSearchSelected: boolean;
  handleSearchresults: (res: {
    results: Ticker[] | null;
    search: string;
  }) => void;
};

export const SearchBar = ({ isSearchSelected, handleSearchresults }: Props) => {
  const classesTextField = useStyles();

  // `tickerName` stands for ticker symbol and company name
  const [tickerName, setTickerName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTickerName(event.target.value);
  };

  const requestTickers = useCallback(async () => {
    if (tickerName === "") {
      return handleSearchresults({ results: [], search: "" });
    }

    try {
      const response = await getTickers(tickerName);

      const {
        data: { results },
      } = response;

      handleSearchresults({ results, search: tickerName });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return handleAxiosError(error);
      }

      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }, [handleSearchresults, tickerName]);

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
