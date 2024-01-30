import { Footer, Topbar } from "../components";

import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 transition duration-200 text-gray-700">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
