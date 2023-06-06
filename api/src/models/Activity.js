const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
      allowNull: false
    },
    difficulty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        min: 1,
        max: 5,
        }
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    season:{
        type: DataTypes.ENUM("Summer","Autumn","Winter","Spring"),
        allowNull: false
    }
  },{
    timestamps: false
  });
};
