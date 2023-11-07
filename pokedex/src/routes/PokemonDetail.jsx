import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { loader } from "../services/loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, CardContent, Container, Typography, Grid } from "@mui/material";
import capitalFirstLetter from "../services/capitalFirstLetter";
import getPokemonColor from "../services/getPokemonColor";
import { ArrowBack } from "@mui/icons-material";
import pokeballSvg from "../assets/pokeball.svg";
import "@fontsource/poppins/800.css";

const PokemonDetail = () => {
  const { pokemon } = useLoaderData(loader);
  return (
    <>
      <Container maxWidth='lg' style={{ marginTop: "50px" }}>
        <Grid sx={12} style={{ position: "relative" }}>
          <Card
            style={{
              backgroundColor: getPokemonColor(pokemon.name),
              padding: "10px",
              position: "relative",
            }}
          >
            <Typography
              component='div'
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#FFFF",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "10px",
                }}
              >
                <Link to={"/"} style={{ display: "flex", color: "#FFFF" }}>
                  <ArrowBack />
                </Link>
                <h1
                  style={{
                    fontFamily: "'Poppins'",
                    fontWeight: "800",
                    paddingLeft: "20px",
                  }}
                >
                  {capitalFirstLetter(pokemon.name)}
                </h1>
              </div>
              <p
                style={{
                  paddingRight: "10px",
                  fontFamily: "'Poppins'",
                  fontWeight: "800",
                }}
              >
                #{pokemon.id}
              </p>
            </Typography>
            <img
              src={pokeballSvg}
              alt='pokeball'
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                zIndex: "1",
                right: "10px",
                top: "10px",
                opacity: "0.1",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",

                zIndex: "2",
              }}
            >
              <LazyLoadImage
                alt={pokemon.name}
                src={pokemon.sprites.other["official-artwork"].front_default}
                width='200px'
                height='200px'
                style={{ zIndex: "1" }}
              />
            </div>

            <CardContent
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                position: "relative",
                top: "-60px",
              }}
            >
              <p>Habilidad: {pokemon.abilities[0].ability.name}</p>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export default PokemonDetail;
