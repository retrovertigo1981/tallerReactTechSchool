import pokeballSvg from "../assets/pokeball.svg";
import gameboysvg from "../assets/gameboysvg.svg";
import "@fontsource/press-start-2p";
const Header = () => {
  return (
    <nav
      style={{
        // backgroundColor: "#f67e92",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px",
      }}
    >
      <img src={pokeballSvg} alt='Pokeball logo' />
      <h1
        style={{
          fontFamily: "'Press Start 2P'",
          marginLeft: "20px",
          color: "#FFFFFF",
        }}
      >
        Pokedex
      </h1>
      <img src={gameboysvg} alt='game boy logo' style={{ height: "40px" }} />
    </nav>
  );
};

export default Header;
