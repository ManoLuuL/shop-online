import { IconArrow, StarIcon } from "../../globals";

import { CardProductProps } from "./types";
import { twMerge } from "tailwind-merge";
import { useCart } from "../../globals/hooks/use-cart-context";

export const CardProduct = (props: CardProductProps) => {
  const { description, price, src, title, onClickViewMore } = props;

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      name: title,
      price,
      quantity: 1,
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-slate-50">
      <div
        className="flex items-end justify-end h-56 w-full bg-cover"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <button
          className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          onClick={onClickViewMore}
        >
          {IconArrow}
        </button>
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{title}</h3>
        <div className="flex items-center gap-0.5 mt-2 mb-2">
          <StarIcon className="w-5 h-5 fill-black" />
          <StarIcon className="w-5 h-5 fill-black" />
          <StarIcon className="w-5 h-5 fill-black" />
          <StarIcon className="w-5 h-5 fill-black" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          <span className="text-gray-500 ml-2">34 reviews</span>
        </div>
        <p className="text-gray-700">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-500 mr-4 font-semibold text-xl">
            $ {price}
          </span>
          <button
            className={twMerge(
              "px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            )}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
