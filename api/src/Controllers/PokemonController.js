const axios = require("axios").default;
const URL = "https://pokeapi.co/api/v2/pokemon";
const { Pokemon, Type } = require("../db");

// funcion para traerme y tratar los pokemones de la api
const getPokemonApi = async () => {
  const listPokemon = [];

  try {
    for (let i = 0; i <= 1; i++) {
      const pokeApi = await axios.get(URL);
      pokeApi.data.results.forEach((data) => listPokemon.push(data.url));

      url = pokeApi.data.next;
    } // finaliza el for
    // separo lo que ya tenia y ejecuto aqui l optimizacion
    let listPromise = [];
    listPokemon.forEach((data) => {
      let promesa = axios.get(data);
      listPromise.push(promesa);
    });
    let resolvePromise = await Promise.all(listPromise);

    const pokepe = resolvePromise.map((pokemon) => {
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        weight: pokemon.data.weight,
        height: pokemon.data.height,
        img: pokemon.data.sprites.other.dream_world.front_default,
        hp: pokemon.data.stats[0].base_stat,
        atk: pokemon.data.stats[1].base_stat,
        def: pokemon.data.stats[2].base_stat,
        vel: pokemon.data.stats[5].base_stat,
        types: pokemon.data.types.map((data) => data.type.name),
      };
    });

    return pokepe;
  } catch (e) {
    console.log(e);
  }
};

const getPokemonDb = async () => {
  try {
    const database = await Pokemon.findAll({ include: Type });
    const data = database.map((data) => {
      return {
        id: data.id,
        name: data.name,
        weight: data.weight,
        height: data.height,
        img: data.img,
        hp: data.hp,
        atk: data.atk,
        def: data.def,
        vel: data.vel,
        types: data.types.map((type) => type.name),
      };
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
const getPokemonTotal = async () => {
  try {
    const pokeApi = await getPokemonApi();
    const pokeDb = await getPokemonDb();
    //  const promiseResolve = await Promise.all([pokeDb, pokeApi]);
    const data = [...pokeDb, ...pokeApi];
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getPokemonId = async (id) => {
  try {
    const pokeApi = await axios.get(`${URL}/${id}`);
    const data = pokeApi.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getPokemonName = async (name) => {};

//getPokemonTotal()
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

module.exports = {
  getPokemon: getPokemonTotal,
  getId: getPokemonId,
};
