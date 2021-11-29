import { UserPic } from "components/UserPic";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme } from "@material-ui/core/styles";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { SearchBar } from "components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import { getPriceAggregates } from "api/getPriceAggregates";
import { getTickerPrice } from "api/getTickerPrice";
import { getTickerDetails } from "api/getTickerDetails";
import { HomePage } from "pages/home";
import { useStyles } from "./styles";

type Props = {
  children?: ReactNode;
};

export type SearchResults = {
  results: Ticker[] | null;
  search: string;
};

const initialState = {
  results: [],
  search: "",
} as SearchResults;

export const Layout = ({ children }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [searchResults, setSearchResults] =
    useState<SearchResults>(initialState);

  const [selectedTicker, setSelectedTicker] = useState("");
  const [tickerDetails, setTickerDetails] = useState<
    (TickerDetails & TickerPrice & { aggregates: PriceAggregate[] }) | null
  >(null);

  const handleSearchresults = useCallback(
    (results) => setSearchResults(results),
    []
  );

  const handleTickerSelect = useCallback((ticker: string) => {
    setSelectedTicker(ticker);
    setSearchResults(initialState);
  }, []);

  const { results } = searchResults;

  useEffect(() => {
    const requestTickerDetails = async () => {
      try {
        const [detailsRes, priceRes, aggregatesRes] = await Promise.all([
          getTickerDetails(selectedTicker),
          getTickerPrice(selectedTicker),
          getPriceAggregates(selectedTicker),
        ]);

        const { data: details } = detailsRes;
        const {
          data: { open, close },
        } = priceRes;

        const tickerDetails = {
          ...details,
          open,
          close,
          aggregates: aggregatesRes.data.results,
        };

        setTickerDetails(tickerDetails);
      } catch (error) {}
    };

    if (selectedTicker !== "") requestTickerDetails();
  }, [selectedTicker]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <SearchBar
            isSearchSelected={Boolean(selectedTicker)}
            handleSearchresults={handleSearchresults}
          />

          {(results === null || results?.length > 0) && (
            <SearchResultsList
              data={searchResults}
              handleResultSelect={handleTickerSelect}
            />
          )}
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <UserPic />
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <UserPic />
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <HomePage
          tickerDetails={tickerDetails}
          handleTickerSelect={handleTickerSelect}
        />
      </main>
    </div>
  );
};
