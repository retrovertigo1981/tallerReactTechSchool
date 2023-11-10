function getPokemonDescription(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    .then((data) => data.json())
    .then((data) => data);
}

export default getPokemonDescription;
