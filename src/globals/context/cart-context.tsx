import { CartContextProps, CartContextProvider, CartItem } from "./types";
import { createContext, useState } from "react";

import { useToast } from "../hooks";

const CartContext = createContext({} as CartContextProps);

export const CartProvider = (props: CartContextProvider) => {
  const { children } = props;

  const { showSuccess } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
    showSuccess("Adicionado com sucesso!");
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, totalItems, totalPrice, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
