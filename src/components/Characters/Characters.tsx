import { useState, useEffect, useReducer } from "react";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export const Characters = () => {
  const [characters, setCharacters] = useState<any>();
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  console.log(favorites)

  return (
    <div>
      <div>
        <h1>Favorites</h1>
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </div>

      {characters?.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            Add favorite
          </button>
        </div>
      ))}
    </div>
  );
};
