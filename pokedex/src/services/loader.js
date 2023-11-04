import { getPokemon } from "../services/getPokemon";

export async function loader({ params }) {
  const pokemon = await getPokemon(params.pokemonId);
  console.log(pokemon);
  return { pokemon };
}

export { loader as pokemonDetailLoader };
