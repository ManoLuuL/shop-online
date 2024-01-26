import { Modal } from "../modal";
import { ModalProductsProps } from "./types";
import { useCart } from "../../globals";
import { useState } from "react";

export const ModalProducts = (props: ModalProductsProps) => {
  const { onClose, title, item } = props;
  const [cep, setCep] = useState("");
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      name: title,
      price: item.price,
      quantity: 1,
    });
  };

  return (
    <Modal onClose={onClose} title={title}>
      <div className="flex">
        <img src={item.src} alt={item.title} className="w-1/2" />
        <div className="ml-4">
          <p>{item.descriptionCompleted}</p>
          <p>Preço: R$ {item.price.toFixed(2)}</p>
          <p>Avaliação: estrelas</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 mt-4"
          >
            Adicionar ao Carrinho
          </button>
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className="border border-gray-300 px-2 py-1 mt-4"
          />
        </div>
      </div>
    </Modal>
  );
};
