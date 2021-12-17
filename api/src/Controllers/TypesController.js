const URL = "https://pokeapi.co/api/v2/type";
const axios = require("axios").default;
const { Type } = require("../db");
const getTypes = async () => {
  try {
    const types = await axios.get(URL);
    const mapTypes = await types.data.results.map((data) => {
      return { name: data.name };
    });
    return mapTypes;
  } catch (err) {
    console.error;
  }
};

/*getTypes()
  .then((data) => console.log(data))
  .catch((err) => console.error);*/

const chargeType = async () => {
  try {
    const types = await getTypes();

    await Type.bulkCreate(types, { validate: true });
  } catch (err) {
    console.log(err);
  }
};
//chargeType().then((data) => console.log(data));

module.exports = {
  Types: chargeType,
};
