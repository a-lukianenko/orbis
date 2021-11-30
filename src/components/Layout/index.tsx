import { UserPic } from "components/Layout/UserPic";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme } from "@material-ui/core/styles";
import { ReactNode, useEffect, useState } from "react";
import { SearchBar } from "components/Layout/SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import { getPriceAggregates } from "api/getPriceAggregates";
import { getTickerPrice } from "api/getTickerPrice";
import { getTickerDetails } from "api/getTickerDetails";
import { useStyles } from "./styles";
import { useTickerDispatch, useTickerState } from "context";

type Props = {
  children?: ReactNode;
};

export type SearchResults = {
  results: Ticker[] | null;
  search: string;
};

export const Layout = ({ children }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { searchResults, ticker: selectedTicker } = useTickerState();
  const dispatch = useTickerDispatch();

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

        dispatch({ type: "setTickerDetails", payload: tickerDetails });
      } catch (error) {}
    };

    if (selectedTicker !== "" && selectedTicker !== null)
      requestTickerDetails();
  }, [dispatch, selectedTicker]);

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

          <SearchBar isSearchSelected={Boolean(selectedTicker)} />

          {(searchResults.results === null ||
            searchResults.results?.length > 0) && (
            <SearchResultsList data={searchResults} />
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

      <main className={classes.content}>{children}</main>
    </div>
  );
};
