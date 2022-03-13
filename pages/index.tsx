import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useCallback, useState } from 'react';
import { SearchResults } from '../components/SearchResults';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<
    { id: number; price: number; title: string }[]
  >([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const products = await response.json();
    setResults(products);
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

      {results && (
        <SearchResults
          results={results}
          onAddToWishList={handleAddToWishList}
        />
      )}
    </div>
  );
};

export default Home;
