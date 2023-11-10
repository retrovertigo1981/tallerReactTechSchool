const pokemonData = [
  {
    name: "Bulbasaur",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Ivysaur",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Venusaur",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Charmander",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Charmeleon",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Charizard",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Squirtle",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Wartortle",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Blastoise",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Caterpie",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Metapod",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Butterfree",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Weedle",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Kakuna",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Beedrill",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Pidgey",
    tipo: "Volador",
    color: "#A98FF3",
  },
  {
    name: "Pidgeotto",
    tipo: "Volador",
    color: "#A98FF3",
  },
  {
    name: "Pidgeot",
    tipo: "Volador",
    color: "#A98FF3",
  },
  {
    name: "Rattata",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Raticate",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Spearow",
    tipo: "Volador",
    color: "#A98FF3",
  },
  {
    name: "Fearow",
    tipo: "Volador",
    color: "#A98FF3",
  },
  {
    name: "Ekans",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Arbok",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Pikachu",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Raichu",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Sandshrew",
    tipo: "Tierra",
    color: "#E2BF65",
  },
  {
    name: "Sandslash",
    tipo: "Tierra",
    color: "#E2BF65",
  },
  {
    name: "Nidoran♀",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Nidorina",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Nidoqueen",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Nidoran♂",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Nidorino",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Nidoking",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Clefairy",
    tipo: "Hada",
    color: "#D685AD",
  },
  {
    name: "Clefable",
    tipo: "Hada",
    color: "#D685AD",
  },
  {
    name: "Vulpix",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Ninetales",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Jigglypuff",
    tipo: "Hada",
    color: "#D685AD",
  },
  {
    name: "Wigglytuff",
    tipo: "Hada",
    color: "#D685AD",
  },
  {
    name: "Zubat",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Golbat",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Oddish",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Gloom",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Vileplume",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Paras",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Parasect",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Venonat",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Venomoth",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Diglett",
    tipo: "Tierra",
    color: "#E2BF65",
  },
  {
    name: "Dugtrio",
    tipo: "Tierra",
    color: "#E2BF65",
  },
  {
    name: "Meowth",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Persian",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Psyduck",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Golduck",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Mankey",
    tipo: "Lucha",
    color: "#C22E28",
  },
  {
    name: "Primeape",
    tipo: "Lucha",
    color: "#C22E28",
  },
  {
    name: "Growlithe",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Arcanine",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Poliwag",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Poliwhirl",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Poliwrath",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Abra",
    tipo: "Psíquico",
    color: "#F95587",
  },
  {
    name: "Kadabra",
    tipo: "Psíquico",
    color: "#F95587",
  },
  {
    name: "Alakazam",
    tipo: "Psíquico",
    color: "#F95587",
  },
  {
    name: "Machop",
    tipo: "Lucha",
    color: "#C22E28",
  },
  {
    name: "Machoke",
    tipo: "Lucha",
    color: "#C22E28",
  },
  {
    name: "Machamp",
    tipo: "Lucha",
    color: "#C22E28",
  },
  {
    name: "Bellsprout",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Weepinbell",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Victreebel",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Tentacool",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Tentacruel",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Geodude",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Graveler",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Golem",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Ponyta",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Rapidash",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Slowpoke",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Slowbro",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Magnemite",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Magneton",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Farfetch'd",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Doduo",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Dodrio",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Seel",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Dewgong",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Grimer",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Muk",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Shellder",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Cloyster",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Gastly",
    tipo: "Fantasma",
    color: "#735797",
  },
  {
    name: "Haunter",
    tipo: "Fantasma",
    color: "#735797",
  },
  {
    name: "Gengar",
    tipo: "Fantasma",
    color: "#735797",
  },
  {
    name: "Onix",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Drowzee",
    tipo: "Psíquico",
    color: "#F95587",
  },
  {
    name: "Hypno",
    tipo: "Psíquico",
    color: "#F95587",
  },
  {
    name: "Krabby",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Kingler",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Voltorb",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Electrode",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Exeggcute",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Exeggutor",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Cubone",
    tipo: "Tierra",
    color: "#E2BF65",
  },
  {
    name: "Marowak",
    tipo: "Tierra",
    color: "#E2BF65",
  },
  {
    name: "Hitmonlee",
    tipo: "Lucha",
    color: "#C22E28",
  },
  {
    name: "Hitmonchan",
    tipo: "Lucha",
    color: "#C22E28",
  },
  {
    name: "Lickitung",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Koffing",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Weezing",
    tipo: "Veneno",
    color: "#A33EA1",
  },
  {
    name: "Rhyhorn",
    tipo: "Tierra",
    color: "#E2BF65",
  },
  {
    name: "Rhydon",
    tipo: "Tierra",
    color: "#E2BF65",
  },
  {
    name: "Chansey",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Tangela",
    tipo: "Planta",
    color: "#7AC74C",
  },
  {
    name: "Kangaskhan",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Horsea",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Seadra",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Goldeen",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Seaking",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Staryu",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Starmie",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "MrMime",
    tipo: "Psíquico",
    color: "#F95587",
  },
  {
    name: "Scyther",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Jynx",
    tipo: "Hada",
    color: "#D685AD",
  },
  {
    name: "Electabuzz",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Magmar",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Pinsir",
    tipo: "Bicho",
    color: "#A6B91A",
  },
  {
    name: "Tauros",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Magikarp",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Gyarados",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Lapras",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Ditto",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Eevee",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Vaporeon",
    tipo: "Agua",
    color: "#6390F0",
  },
  {
    name: "Jolteon",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Flareon",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Porygon",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Omanyte",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Omastar",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Kabuto",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Kabutops",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Aerodactyl",
    tipo: "Roca",
    color: "#B6A136",
  },
  {
    name: "Snorlax",
    tipo: "Normal",
    color: "#A8A77A",
  },
  {
    name: "Articuno",
    tipo: "Hielo",
    color: "#96D9D6",
  },
  {
    name: "Zapdos",
    tipo: "Eléctrico",
    color: "#F7D02C",
  },
  {
    name: "Moltres",
    tipo: "Fuego",
    color: "#EE8130",
  },
  {
    name: "Dratini",
    tipo: "Dragón",
    color: "#6F35FC",
  },
  {
    name: "Dragonair",
    tipo: "Dragón",
    color: "#6F35FC",
  },
  {
    name: "Dragonite",
    tipo: "Dragón",
    color: "#6F35FC",
  },
  {
    name: "Mewtwo",
    tipo: "Psíquico",
    color: "#F95587",
  },

  {
    name: "Mew",
    tipo: "Psíquico",
    color: "#F95587",
  },
];

export default pokemonData;
