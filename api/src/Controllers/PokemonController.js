const axios = require("axios").default;
const URL = "https://pokeapi.co/api/v2/pokemon";
const { Pokemon, Type } = require("../db");

// funcion para traerme y tratar los pokemones de la api
const getPokemonApi = async () => {
  const listPokemon = [];

  try {
    const pokeApi = await axios.get(URL);
    pokeApi.data.results.forEach((data) => listPokemon.push(data.url));
    const url2 = pokeApi.data.next;
    const pokeApi2 = await axios.get(url2);
    pokeApi2.data.results.forEach((data) => listPokemon.push(data.url));
    // finaliza el for
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
    const pokeApi = await axios.get(`${URL}/${id}`).catch(() => undefined);

    if (pokeApi == undefined) {
      const pokeDb = await getPokemonDb();
      const data = pokeDb.filter(
        (data) => data.id.toLowerCase() == id.toLowerCase()
      );
      if (data.length > 0) {
        return data[0];
      } else {
        return undefined;
      }
    } else {
      return {
        id: pokeApi.data.id,
        name: pokeApi.data.name,
        weight: pokeApi.data.weight,
        height: pokeApi.data.height,
        img: pokeApi.data.sprites.other.dream_world.front_default,
        hp: pokeApi.data.stats[0].base_stat,
        atk: pokeApi.data.stats[1].base_stat,
        def: pokeApi.data.stats[2].base_stat,
        vel: pokeApi.data.stats[5].base_stat,
        types: pokeApi.data.types.map((data) => data.type.name),
      };
    }
  } catch (e) {
    console.log("fallo");
  }
};

const getPokemonName = async (name) => {
  try {
    const pokeApi = await axios.get(`${URL}/${name}`).catch(() => undefined);

    if (pokeApi == undefined) {
      const pokeDb = await getPokemonDb();
      const data = pokeDb.filter(
        (data) => data.name.toLowerCase() === name.toLowerCase()
      );
      if (data.length > 0) {
        return data[0];
      } else {
        return undefined;
      }
    }
    {
      return {
        id: pokeApi.data.id,
        name: pokeApi.data.name,
        weight: pokeApi.data.weight,
        height: pokeApi.data.height,
        img: pokeApi.data.sprites.other.dream_world.front_default,
        hp: pokeApi.data.stats[0].base_stat,
        atk: pokeApi.data.stats[1].base_stat,
        def: pokeApi.data.stats[2].base_stat,
        vel: pokeApi.data.stats[5].base_stat,
        types: pokeApi.data.types.map((data) => data.type.name),
      };
    }
  } catch (e) {
    console.log("fallo");
  }
};

//getPokemonTotal()
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

module.exports = {
  getPokemonTotal,
  getPokemonId,
  getPokemonName,
};
