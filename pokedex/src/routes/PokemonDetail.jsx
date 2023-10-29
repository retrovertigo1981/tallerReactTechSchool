import { useLoaderData } from "react-router-dom";
import { getPokemon } from "../services/getPokemon";
import { LazyLoadImage } from "react-lazy-load-image-component";

export async function loader({ params }) {
  const pokemon = await getPokemon(params.pokemonId);
  console.log(pokemon);
  return { pokemon };
}

const PokemonDetail = () => {
  const { pokemon } = useLoaderData();
  return (
    <>
      <h1>{pokemon.name}</h1>
      <LazyLoadImage
        alt={pokemon.name}
        src={pokemon.sprites.other.dream_world.front_default}
        width='200px'
      />
      <p>Habilidad: {pokemon.abilities[0].ability.name}</p>
    </>
  );
};

export default PokemonDetail;
