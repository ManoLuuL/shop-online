import { CardProduct, ModalProducts, ProductsDTO } from "../../components";

import { ALL_PRODUCTS } from "./const";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<ProductsDTO>();

  const ProductsCard = ALL_PRODUCTS.map((items, index) => {
    return (
      <CardProduct
        {...items}
        key={`${items.title}-${index}`}
        onClickViewMore={() => {
          setIsOpen(true);
          setProduct(items);
        }}
      />
    );
  });

  return (
    <>
      <div className={twMerge("grid grid-cols-4 gap-4 mx-20 my-10")}>
        {ProductsCard}
      </div>

      {isOpen && (
        <ModalProducts
          item={product ?? ({} as ProductsDTO)}
          onClose={() => setIsOpen(false)}
          title={product?.title ?? ""}
        />
      )}
    </>
  );
};
