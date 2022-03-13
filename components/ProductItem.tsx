import { memo } from 'react';
import { Product } from '../models';

type ProductItemProps = {
  product: Product;
  onAddToWishList: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>
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
