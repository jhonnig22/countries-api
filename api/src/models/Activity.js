const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Activity',{
       
        Name:{
            type:DataTypes.STRING,

        },
        Difficulty:{
            type:DataTypes.INTEGER
        },
        Duration:{
            type:DataTypes.STRING
        },
        Season:{
            type:DataTypes.STRING
        }

    },{timestamps: false})
}
