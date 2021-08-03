const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Activity',{
        Id:{
            type:DataTypes.UUID,
            primaryKey: true
        },
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
