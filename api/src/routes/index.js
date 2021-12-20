const { Router } = require("express");
const {
  getPokemonTotal,
  getPokemonId,
  getPokemonName,
} = require("../Controllers/PokemonController");
const { Pokemon, Type } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemon", async (req, res) => {
  try {
    //const pokemones = await Pokemon.findAll({ include: Type });
    const { name } = req.query;
    if (name) {
      const data = await getPokemonName(name);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ msg: "Pokemon not found" });
      }
    } else {
      const pokemones = await getPokemonTotal();
      res.status(200).json(pokemones);
    }
  } catch (err) {
    console.log(err);
  }
});
router.get("/pokemon/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getPokemonId(id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ msg: "Pokemon not found" });
    }
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

module.exports = router;
