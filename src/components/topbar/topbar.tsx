import { IconCart, useCart } from "../../globals";

import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const Topbar = () => {
  const { totalItems } = useCart();

  return (
    <section
      style={{
        gridArea: "topbar",
      }}
      className={twMerge(
        "grid grid-cols-12 gap-4 items-center  overflow-hidden w-full h-full overflow-x-auto overflow-y-auto z-[1]",
        "border-b-2  border-solid px-3 transition duration-200",
        "border-gray-100 bg-gray-700"
      )}
    >
      <div className={twMerge("col-span-2")}>
        <p className={twMerge("text-gray-50 text-xl font-bold")}>Shop</p>
      </div>
      <div className={twMerge("col-span-8 flex justify-center")}>
        <Link
          to={"/"}
          className={twMerge(
            "mx-2 transition-colors duration-300 ease-in-out hover:text-gray-400 active:text-gray-400 no-underline"
          )}
        >
          Home
        </Link>
        <Link
          to={"/products"}
          className={twMerge(
            "mx-2 transition-colors duration-300 ease-in-out hover:text-gray-400 active:text-gray-400 no-underline"
          )}
        >
          Products
        </Link>
        <Link
          to={"/"}
          className={twMerge(
            "mx-2 transition-colors duration-300 ease-in-out hover:text-gray-400 active:text-gray-400 no-underline"
          )}
        >
          Contact
        </Link>
      </div>
      <div className={twMerge("col-span-2 justify-end relative flex")}>
        {IconCart}
        {totalItems > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full max-h-4 text-[10px] w-4 flex items-center justify-center">
            <span>{totalItems}</span>
          </div>
        )}
      </div>
    </section>
  );
};
