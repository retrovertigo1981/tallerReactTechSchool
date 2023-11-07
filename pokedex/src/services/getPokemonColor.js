import pokemonData from "../services/pokemonData";

const getPokemonColor = (pokemonName) => {
  const pokeName = pokemonData.find(
    (p) => p.name.toLowerCase() === pokemonName
  );
  console.log(pokeName);
  const color = pokeName ? pokeName.color : "#A9A9A9";
  return color;
};

export default getPokemonColor;
