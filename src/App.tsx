import AppRoutes from "./router/router";
import { Layout } from "./layout";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
