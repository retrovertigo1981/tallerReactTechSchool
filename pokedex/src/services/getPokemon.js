export const getPokemon = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((data) => data.json())
    .then((data) => data);
};
