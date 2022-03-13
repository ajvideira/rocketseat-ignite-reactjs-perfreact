import { useMemo } from 'react';
import { Product } from '../models';
import { ProductItem } from './ProductItem';

type SearchResultsProps = {
  results: Product[];
  onAddToWishList: (id: number) => void;
  totalPrice: number;
};

export function SearchResults({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultsProps) {
  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>
      {results.map((result) => (
        <ProductItem
          key={result.id}
          product={result}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
}
