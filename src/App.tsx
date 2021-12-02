import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Layout } from "components/Layout";
import { TickerProvider } from "context";
import { HomePage } from "pages/home";
import { theme } from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TickerProvider>
        <Layout>
          <HomePage />
        </Layout>
      </TickerProvider>
    </ThemeProvider>
  );
}

export default App;
