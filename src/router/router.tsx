import { Home, Products } from "../pages";
import { Route, Routes } from "react-router-dom";

import { Layout } from "../layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route Component={Layout}>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
