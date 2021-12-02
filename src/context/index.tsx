import { createContext, ReactNode, useContext, useReducer } from "react";

type Action =
  | {
      type: "setSearchResults";
      payload: { results: Ticker[] | null; search: string };
    }
  | { type: "setTicker"; payload: string }
  | { type: "setTickerDetails"; payload: SelectedTickerDetails | null }
  | { type: "setError"; payload: string };

type Dispatch = (action: Action) => void;

type State = {
  ticker: string | null;
  tickerDetails: SelectedTickerDetails | null;
  error: string | null;
  searchResults: { results: Ticker[] | null; search: string };
};

type TickerProviderProps = { children: ReactNode };

const initialState = {
  ticker: null,
  tickerDetails: null,
  error: null,
  searchResults: { results: [] as Ticker[], search: "" },
} as State;

const TickerStateContext = createContext({} as State);
TickerStateContext.displayName = "TickerStateContext";

const TickerDispatchContext = createContext<Dispatch | undefined>(undefined);
TickerDispatchContext.displayName = "TickerDispatchContext";

function tickerReducer(state: State, action: Action) {
  switch (action.type) {
    case "setSearchResults": {
      return {
        ...state,
        searchResults: {
          results: action.payload.results,
          search: action.payload.search,
        },
      };
    }
    case "setTicker": {
      return {
        ...state,
        ticker: action.payload,
      };
    }
    case "setTickerDetails": {
      return {
        ...state,
        tickerDetails: action.payload,
      };
    }
    case "setError": {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

function TickerProvider({ children }: TickerProviderProps) {
  const [state, dispatch] = useReducer(tickerReducer, initialState);

  return (
    <TickerStateContext.Provider value={state}>
      <TickerDispatchContext.Provider value={dispatch}>
        {children}
      </TickerDispatchContext.Provider>
    </TickerStateContext.Provider>
  );
}

function useTickerState() {
  const context = useContext(TickerStateContext);
  if (context === undefined) {
    throw new Error("useTickerState must be used within a TickerProvider");
  }
  return context;
}

function useTickerDispatch() {
  const dispatch = useContext(TickerDispatchContext);
  if (dispatch === undefined) {
    throw new Error("useTickerDispatch must be used within a TickerProvider");
  }
  return dispatch;
}

export { TickerProvider, useTickerState, useTickerDispatch };
