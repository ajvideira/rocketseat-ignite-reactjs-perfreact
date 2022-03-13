import { memo, useState } from 'react';
import { Product } from '../models';
import { AddProductToWishlistProps } from './AddProductToWishlist';

import dynamic from 'next/dynamic';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() =>
  import('./AddProductToWishlist').then((mod) => mod.AddProductToWishlist)
);

type ProductItemProps = {
  product: Product;
  onAddToWishList: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Add to wishlist
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddProductToWishlist={() => {
            onAddToWishList(product.id);
            setIsAddingToWishlist(false);
          }}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (previousProps, nextProps) => {
    return Object.is(previousProps.product, nextProps.product);
  }
);
