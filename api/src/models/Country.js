const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    Id:{
      type:DataTypes.STRING,
      primaryKey: true
    },
      Name: {

      type: DataTypes.STRING,
      allowNull: false,
    },
    Img:{
      type: DataTypes.STRING
    },
    Region:{
      type: DataTypes.STRING
    },
    Capital:{
      type:DataTypes.STRING
    },
    Subregion:{
      type:DataTypes.STRING
    },
    Area:{
      type:DataTypes.INTEGER
    },
    Population:{
      type: DataTypes.INTEGER
    }
  },{timestamps: false});
};
