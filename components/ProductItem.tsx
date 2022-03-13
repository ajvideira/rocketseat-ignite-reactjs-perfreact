import { memo } from 'react';

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishList: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishList(product.id)}>
        Add to wishlist
      </button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (previousProps, nextProps) => {
    return Object.is(previousProps.product, nextProps.product);
  }
);
