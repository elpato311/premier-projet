import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1 className="text-white-700 text-base ">Loading...</h1>
  ) : (
    <section className=" text-white flex flex-wrap ">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
