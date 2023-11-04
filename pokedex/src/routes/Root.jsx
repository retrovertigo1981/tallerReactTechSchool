import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

function Root() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    try {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setPokemons(data.results);
        });
    } catch (error) {
      console.error("Error al cargar Pokemones:", error);
    }
  }, []);

  return (
    <>
      <Header />
      <Container
        maxWidth='lg'
        style={{
          marginTop: "50px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={4}>
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
                    backgroundColor: "#EFEFEF",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      textAlign: "right",
                      paddingRight: "20px",
                      color: "grey",
                    }}
                  >
                    <Typography variant='h6' component='p'>
                      #{index + 1}
                    </Typography>
                  </div>

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
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h3'
                      component='p'
                      style={{
                        fontSize: "14px",
                        textAlign: "center",
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
    </>
  );
}

export default Root;
