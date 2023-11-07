import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import capitalFirstLetter from "../services/capitalFirstLetter";
import getPokemonColor from "../services/getPokemonColor";

function Root() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    try {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((data) => data.json())
        .then((data) => {
          setPokemons(data.results);
        });
    } catch (error) {
      console.error("Error al cargar Pokemones:", error);
    }
  }, []);

  return (
    <>
      <LazyLoad>
        <Header />

        <Container
          maxWidth='lg'
          style={{
            marginTop: "30px",
            backgroundColor: "#ece5b8",
            borderRadius: "10px",
          }}
        >
          <Grid container spacing={2}>
            {pokemons.map((pokemon, index) => (
              <Grid item xs={6} sm={6} md={4} lg={2} key={pokemon.name}>
                <Link
                  to={`pokemons/${index + 1}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Card
                    sx={{
                      minWidth: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: getPokemonColor(pokemon.name),
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        textAlign: "right",
                        paddingRight: "20px",
                        color: "#30321c",
                      }}
                    >
                      <Typography variant='h6' component='p'>
                        #{index + 1}
                      </Typography>
                    </div>
                    <LazyLoad>
                      <CardMedia
                        sx={{
                          height: 90,
                          width: 90,
                          objectFit: "cover",
                        }}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                          index + 1
                        }.png`}
                        title='pokemon'
                      />
                    </LazyLoad>

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h3'
                        component='p'
                        style={{
                          fontSize: "14px",
                          textAlign: "center",
                          fontWeight: "800",
                          letterSpacing: "1px",
                          // color: "#30321c",
                          color: "#302C28",
                        }}
                      >
                        {capitalFirstLetter(pokemon.name)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </LazyLoad>
    </>
  );
}

export default Root;
