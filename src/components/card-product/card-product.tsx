import { CardProps } from "./types";
import { IconAddCart } from "../../globals";
import { twMerge } from "tailwind-merge";
import { useCart } from "../../globals/hooks/use-cart-context";
import { useNavigate } from "react-router-dom";

export const CardProduct = (props: CardProps) => {
  const { description, price, src, title } = props;

  const { addToCart } = useCart();
  const navigate = useNavigate();

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
            "rounded-lg mb-1 object-contain mt-1 w-1/2 aspect-square"
          )}
          src={src}
        />
      </div>
      <div
        className={twMerge(
          "flex flex-col items-center w-full",
          "cursor-pointer",
          "hover:scale-110"
        )}
        onClick={() => navigate("/")}
      >
        <h2 className={twMerge("font-semibold text-xl")}>{title}</h2>
        <p className={twMerge("flex w-3/4 justify-center")}>{description}</p>
      </div>

      <div className={twMerge("flex justify-around w-full p-3")}>
        <p className={twMerge("font-semibold text-2xl")}>Price: ${price}</p>

        <button
          onClick={handleAddToCart}
          className={twMerge("hover:scale-110")}
        >
          {IconAddCart(30)}
        </button>
      </div>
    </div>
  );
};
