import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import PokemonDetail, {
  loader as pokemonDetailLoader,
} from "./routes/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "pokemons/:pokemonId",
    element: <PokemonDetail />,
    loader: pokemonDetailLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
