import { ReactNode } from "react";

export type CartContextProvider = {
  children: ReactNode;
};

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export type CartContextProps = {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart(item: CartItem): void;
};
