import { useMemo } from 'react';
import { Product } from '../models';
import { ProductItem } from './ProductItem';

import { AutoSizer, List } from 'react-virtualized';

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
    <div style={{ flex: '1 1 auto' }}>
      <h2>Total Price: {totalPrice}</h2>

      <List
        width={900}
        height={900}
        rowHeight={30}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={({ index, key, style }) => (
          <div key={key} style={style}>
            <ProductItem
              product={results[index]}
              onAddToWishList={onAddToWishList}
            />
          </div>
        )}
      />
    </div>
  );
}
