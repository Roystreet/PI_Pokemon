const { Router } = require("express");
const { getPokemon, getId } = require("../Controllers/PokemonController");
const { Pokemon, Type } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemon", async (req, res) => {
  try {
    //const pokemones = await Pokemon.findAll({ include: Type });
    const pokemones = await getPokemon();
    res.status(200).json(pokemones);
  } catch (err) {
    console.log(err);
  }
});
router.get("/pokemon/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getId(id);
    console.log(data);
    console.log(id);

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/pokemon", async (req, res) => {
  const { name, img, hp, atk, def, vel, height, weight, types } = req.body;
  try {
    const newPokemon = await Pokemon.create({
      name: name,
      img: img ? img : undefined,
      hp: hp,
      atk: atk,
      def: def,
      vel: vel,
      height: height,
      weight: weight,
    });

    await newPokemon.setTypes(types);
    res.status(200).json(newPokemon);
  } catch (e) {
    console.log(e);
  }
});
router.get("/types", async (req, res) => {
  try {
    const types = await Type.findAll();
    res.status(200).json(types);
  } catch (e) {
    res.status(400).json({ msg: "error no encontrado" });
  }
});
router.get("pokemons?name", async (req, res) => {});

module.exports = router;
