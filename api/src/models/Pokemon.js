const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://www.spielzeugwelten.de/media/image/59/ca/e2/pokemonEWdsDZvBekk6t_800x800@2x.jpg",
    },
    hp: { type: DataTypes.INTEGER, allowNull: false },
    atk: { type: DataTypes.INTEGER, allowNull: false },
    def: { type: DataTypes.INTEGER, allowNull: false },
    vel: { type: DataTypes.INTEGER, allowNull: false },
    height: { type: DataTypes.INTEGER, allowNull: false },
    weight: { type: DataTypes.INTEGER, allowNull: false },
  }),
    {
      timestamp: false,
    };
};
