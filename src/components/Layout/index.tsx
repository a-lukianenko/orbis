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
    const requestTickerDetails = async (selectedTicker: string) => {
      try {
        const [detailsRes, priceRes, aggregatesRes] = await Promise.allSettled([
          getTickerDetails(selectedTicker),
          getTickerPrice(selectedTicker),
          getPriceAggregates(selectedTicker),
        ]);

        const details =
          ((detailsRes as PromiseRejectedResult)?.reason as Error) ||
          (detailsRes as PromiseFulfilledResult<{ data: TickerDetails }>).value
            .data;

        const price =
          ((priceRes as PromiseRejectedResult)?.reason as Error) ||
          (priceRes as PromiseFulfilledResult<{ data: TickerPrice }>).value
            .data;

        const aggregates =
          ((aggregatesRes as PromiseRejectedResult)?.reason as Error) ||
          (
            aggregatesRes as PromiseFulfilledResult<{
              data: { results: PriceAggregate[] };
            }>
          ).value.data.results;

        const tickerDetails = {
          details,
          price,
          aggregates,
        };

        dispatch({ type: "setTickerDetails", payload: tickerDetails });
        dispatch({
          type: "setSearchResults",
          payload: { results: [], search: "" },
        });
      } catch (error) {
        console.log({ error });
      }
    };

    if (selectedTicker !== null) requestTickerDetails(selectedTicker);
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
