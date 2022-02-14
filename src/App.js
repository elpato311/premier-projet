import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className=" bg-auto no-repeat bg-cover bg-breaking-bg ">
      <Header />
      <Search query={query} setQuery= {setQuery}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
