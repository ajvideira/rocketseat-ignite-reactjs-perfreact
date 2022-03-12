import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

type SearchResultsProps = {
  results: Array<{ id: number; price: number; title: string }>;
};

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(
    () => results.reduce((total, product) => total + product.price, 0),
    [results]
  );

  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>
      {results.map((result) => (
        <ProductItem product={result} />
      ))}
    </div>
  );
}
