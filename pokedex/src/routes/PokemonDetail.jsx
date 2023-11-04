import { useLoaderData } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { loader } from "../services/loader";

const PokemonDetail = () => {
  const { pokemon } = useLoaderData(loader);
  return (
    <>
      <h1>{pokemon.name}</h1>
      <LazyLoadImage
        alt={pokemon.name}
        src={pokemon.sprites.other["official-artwork"].front_default}
        width='200px'
      />
      <p>Habilidad: {pokemon.abilities[0].ability.name}</p>
    </>
  );
};

export default PokemonDetail;
