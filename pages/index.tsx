import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useCallback, useState } from 'react';
import { SearchResults } from '../components/SearchResults';
import { Product, Result } from '../models';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState<Result>({ products: [], totalPrice: 0 });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const products = data.map((product: Product) => {
      return {
        ...product,
        formattedPrice: formatter.format(product.price),
      };
    });

    const totalPrice = products.reduce(
      (total: number, product: Product) => total + product.price,
      0
    );
    setResult({ products, totalPrice });
  }

  const handleAddToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {result && (
        <SearchResults
          results={result.products}
          onAddToWishList={handleAddToWishList}
          totalPrice={result.totalPrice}
        />
      )}
    </div>
  );
};

export default Home;
