import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.tsx";
import { CartProvider } from "./globals/index.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <ToastContainer theme="dark" />
      <App />
    </CartProvider>
  </React.StrictMode>
);
