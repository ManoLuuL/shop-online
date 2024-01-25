import { CardProps } from "./types";
import { IconAddCart } from "../../globals";
import { twMerge } from "tailwind-merge";
import { useCart } from "../../globals/hooks/use-cart-context";

export const Card = (props: CardProps) => {
  const { description, price, src, title } = props;

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      name: title,
      price,
      quantity: 1,
    });
  };

  return (
    <div
      className={twMerge(
        "flex justify-center flex-col items-center w-full aspect-square",
        "bg-gray-500 rounded-md hover:scale-105"
      )}
    >
      <div className={twMerge("flex justify-center w-full")}>
        <img
          alt={title}
          className={twMerge(
            "rounded-lg mb-4 object-cover mt-4 w-1/2 aspect-square"
          )}
          src={src}
        />
      </div>
      <div className={twMerge("flex flex-col items-center w-full")}>
        <h2 className={twMerge("font-semibold text-xl")}>{title}</h2>
        <p className={twMerge("flex w-3/4 justify-center")}>{description}</p>
      </div>
      <div
        className={twMerge(
          "flex justify-center w-full mt-2 font-semibold text-lg"
        )}
      >
        <p>Price: ${price}</p>
      </div>
      <div className={twMerge("flex justify-around w-full p-3")}>
        <button>Quick View</button>
        <button onClick={handleAddToCart}>{IconAddCart}</button>
      </div>
    </div>
  );
};
