import React, { useState, useEffect } from "react";

export const Characters = () => {
  const [characters, setCharacters] = useState<any>();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      {characters?.map((character) => (
        <h2 key={character.id}>{character.name}</h2>
      ))}
    </div>
  );
};
