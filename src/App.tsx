import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Layout } from "components/Layout";
import { HomePage } from "pages/home";
import { theme } from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      {/* <HomePage />
      </Layout> */}
    </ThemeProvider>
  );
}

export default App;
