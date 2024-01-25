import { Home, Products } from "../pages";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
    </Routes>
  );
};

export default AppRoutes;
