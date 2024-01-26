import { ModalProps } from "../modal";
import { ProductsDTO } from "../card-product";

type ModalProductOmit = Omit<ModalProps, "children">;

export type ModalProductsProps = ModalProductOmit & {
  item: ProductsDTO;
};
