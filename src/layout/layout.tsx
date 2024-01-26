import { LayoutProps } from "./types";
import { Topbar } from "../components";
import { twMerge } from "tailwind-merge";

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div
      className={twMerge("w-screen h-screen grid")}
      style={{
        gridTemplateAreas: `'topbar'
        'content'`,
        gridTemplateRows: `65px 1fr`,
        gridTemplateColumns: "1fr",
      }}
    >
      <Topbar />

      <main
        className="overflow-x-hidden overflow-y-auto bg-gray-100 block w-full transition duration-200 text-gray-700"
        style={{
          gridArea: "content",
        }}
      >
        {children}
      </main>
    </div>
  );
};
