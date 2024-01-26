import { ALL_PRODUCTS } from "./const";
import { CardProduct } from "../../components";
import { twMerge } from "tailwind-merge";

export const Products = () => {
  const ProductsCard = ALL_PRODUCTS.map((items, index) => {
    return <CardProduct {...items} key={`${items.title}-${index}`} />;
  });

  return (
    <div className={twMerge("grid grid-cols-6 gap-4 mx-20 my-10")}>
      {ProductsCard}
    </div>
  );
};
