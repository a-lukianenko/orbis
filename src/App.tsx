import CssBaseline from "@material-ui/core/CssBaseline";
import { Layout } from "components/Layout";
import { HomePage } from "pages/home";

function App() {
  return (
    <div>
      <CssBaseline />
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
