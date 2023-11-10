import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { loader } from "../services/loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, CardContent, Container, Typography, Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import capitalFirstLetter from "../services/capitalFirstLetter";
import getPokemonColor from "../services/getPokemonColor";
import getPokemonDescription from "../services/getPokemonDescription";
import { ArrowBack } from "@mui/icons-material";
import pokeballSvg from "../assets/pokeball.svg";
import weighticon from "../assets/weighticon.svg";
import heighticon from "../assets/heighticon.svg";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400.css";

const PokemonDetail = () => {
  const { pokemon } = useLoaderData(loader);
  const [pokemonDescription, setPokemonDescription] = useState(null);
  let originalDescription =
    pokemonDescription?.flavor_text_entries[7].flavor_text;
  let cleanDescription = originalDescription?.replace(/[^\x20-\x7E]+/g, "");

  useEffect(() => {
    if (pokemon) {
      getPokemonDescription(pokemon.name)
        .then((data) => {
          setPokemonDescription(data);
        })
        .catch((error) => {
          console.error("Error fetching Pokemon data:", error);
        });
    }
  }, [pokemon]);

  return (
    <>
      <Container
        maxWidth='sm'
        style={{ marginBlockStart: "15px", marginBlockEnd: "10px" }}
      >
        <Grid item xs={12} style={{ position: "relative" }}>
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
                <Typography
                  variant='h1'
                  style={{
                    fontFamily: "'Poppins'",
                    fontWeight: "800",
                    paddingLeft: "20px",
                    fontSize: "28px",
                  }}
                >
                  {capitalFirstLetter(pokemon.name)}
                </Typography>
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
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
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
                top: "-50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    marginTop: "45px",
                    backgroundColor: getPokemonColor(pokemon.name),
                    padding: "2px 8px",
                    borderRadius: "15px",
                    textAlign: "center",
                    fontFamily: "'Poppins'",
                    fontSize: "10px",
                    fontWeight: "700",
                    color: "#FFFF",
                    // verticalAlign: "center",
                  }}
                >
                  {capitalFirstLetter(pokemon.types[0].type.name)}
                </p>
              </div>
              <Typography
                variant='h2'
                style={{
                  fontFamily: "'poppins'",
                  fontSize: "14px",
                  textAlign: "center",
                  fontWeight: "700",
                  lineHeight: "16px",
                  color: getPokemonColor(pokemon.name),
                }}
              >
                About
              </Typography>
              <Container
                style={{
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingInlineStart: "5px",
                  paddingInlineEnd: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                <div
                  style={{
                    borderInlineEnd: "Solid 1px #E0E0E0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "97px",
                  }}
                >
                  <p style={{ display: "flex", alignItems: "flex-end" }}>
                    <img
                      src={weighticon}
                      alt='weighticon'
                      style={{ width: "16px", height: "16px" }}
                    />
                    {(pokemon.weight * 0.1).toFixed(1)} Kg
                  </p>
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#666666",
                    }}
                  >
                    Weight
                  </p>
                </div>
                <div
                  style={{
                    borderInlineEnd: "Solid 1px #E0E0E0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "97px",
                  }}
                >
                  <p style={{ display: "flex", alignItems: "flex-end" }}>
                    <img src={heighticon} alt='heighticon' />
                    {(pokemon.height * 0.1).toFixed(1)} m
                  </p>
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#666666",
                    }}
                  >
                    Height
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "97px",
                  }}
                >
                  <p style={{ marginBlockStart: "10px", marginBlockEnd: "0" }}>
                    {pokemon.moves[0].move.name}
                  </p>
                  <p style={{ marginBlockStart: "0", marginBlockEnd: "0" }}>
                    {pokemon.moves[1].move.name}
                  </p>
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#666666",
                    }}
                  >
                    Moves
                  </p>
                </div>
              </Container>
              <Container>
                <Typography
                  variant='body1'
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    textAlign: "center",
                    paddingTop: "10px",
                    color: "#1D1D1D",
                    marginTop: "5px",
                  }}
                >
                  {cleanDescription}
                </Typography>
              </Container>

              <Typography
                variant='h6'
                component='div'
                align='center'
                margin='10px'
                fontFamily='Poppins'
                fontWeight='700'
                fontSize='16px'
                style={{ color: getPokemonColor(pokemon.name) }}
              >
                Base Stats
              </Typography>
              <Container
                style={{
                  display: "flex",
                }}
              >
                <Container
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    width: "120px",
                    gap: "8.9px",
                    paddingBlockStart: "5px",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: getPokemonColor(pokemon.name),
                    }}
                  >
                    HP {pokemon.stats[0].base_stat}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: getPokemonColor(pokemon.name),
                    }}
                  >
                    ATK {pokemon.stats[1].base_stat}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: getPokemonColor(pokemon.name),
                    }}
                  >
                    DEF {pokemon.stats[2].base_stat}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: getPokemonColor(pokemon.name),
                    }}
                  >
                    SATK {pokemon.stats[3].base_stat}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: getPokemonColor(pokemon.name),
                    }}
                  >
                    SDEF {pokemon.stats[4].base_stat}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: getPokemonColor(pokemon.name),
                    }}
                  >
                    SPD {pokemon.stats[5].base_stat}
                  </Typography>
                </Container>
                <Container
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15.5px",
                    paddingBlockStart: "6px",
                  }}
                >
                  <LinearProgress
                    variant='determinate'
                    value={(pokemon.stats[0].base_stat / 200) * 100}
                    style={{ height: "9px", borderRadius: "4px" }}
                  />
                  <LinearProgress
                    variant='determinate'
                    value={(pokemon.stats[1].base_stat / 200) * 100}
                    style={{ height: "9px", borderRadius: "4px" }}
                  />
                  <LinearProgress
                    variant='determinate'
                    value={(pokemon.stats[2].base_stat / 200) * 100}
                    style={{ height: "9px", borderRadius: "4px" }}
                  />
                  <LinearProgress
                    variant='determinate'
                    value={(pokemon.stats[3].base_stat / 200) * 100}
                    style={{ height: "9px", borderRadius: "4px" }}
                  />
                  <LinearProgress
                    variant='determinate'
                    value={(pokemon.stats[4].base_stat / 200) * 100}
                    style={{ height: "9px", borderRadius: "4px" }}
                  />
                  <LinearProgress
                    variant='determinate'
                    value={(pokemon.stats[5].base_stat / 200) * 100}
                    style={{
                      height: "9px",
                      borderRadius: "4px",
                    }}
                  />
                </Container>
              </Container>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export default PokemonDetail;
