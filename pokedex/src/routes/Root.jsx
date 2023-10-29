import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function Root() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((data) => data.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <>
      <h1>Pokedex</h1>

      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.name}>
            <Link to={`pokemons/${index + 1}`}>
              {pokemon.name}

              <LazyLoadImage
                alt={pokemon.name}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                width='96px'
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Root;
