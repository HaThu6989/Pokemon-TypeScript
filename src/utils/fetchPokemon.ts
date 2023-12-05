import Pokedex from "pokedex-promise-v2";

const pokedex = new Pokedex();

const fetchPokemon = async (number: number | string | any ) => {
  try {
    const getPokemon = await pokedex.getResource(["/api/v2/pokemon?limit=100"]);

    const pokemon = await pokedex.getResource([
      getPokemon[0]?.results[number]?.url,
    ]);
    return pokemon;
  } catch (error) {
    throw error;
  }
};

export default fetchPokemon;
