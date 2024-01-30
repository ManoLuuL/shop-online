export type ProductsDTO = {
  id: string;
  code: string;
  description: string;
  title: string;
  src: string;
  price: number;
  descriptionCompleted: string;
};
export type CardProductProps = ProductsDTO & {
  onClickViewMore(): void;
  isAnimated?: boolean;
};
