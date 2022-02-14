import React from 'react';

const CharacterItem = ({ item }) => {
  console.log(item);
  return (
    <div className="px-10 w-1/4 py-5">
      <div className="border border-gray-500 bg-white rounded-lg ">
        <div className=" ">
          <img className=" h-48 w-full 	" src={item.img} alt="" />
        </div>
        <div className="text-black px-20">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
