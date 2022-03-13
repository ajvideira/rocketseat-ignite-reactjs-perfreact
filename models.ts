export type Product = {
  id: number;
  price: number;
  title: string;
  formattedPrice: string;
};

export type Result = {
  totalPrice: number;
  products: Product[];
};
