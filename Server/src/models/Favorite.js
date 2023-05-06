const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
          type : DataTypes.INTEGER,   // el dato va a ser un entero
          primaryKey : true,        //y el id va a ser una PK
          allowNull: false,              //el campo name no puede quedar nulo 
      },
name:{
    type : DataTypes.STRING,         //el dato es un STRING
    allowNull: false,              //el campo name no puede quedar nulo 
},
status:{
    type: DataTypes.ENUM ('Alive', 'Dead', 'Unknown'),//el dato puede ser Alive-Dead-Unknown
    allowNull: false,      //el campo no puede ser nulo
},
species:{
    type: DataTypes.STRING,
    allowNull: false,
},
gender:{
    type : DataTypes.ENUM ('Female' , 'Male', 'Genderless', 'Unknown'),
    allowNull: false,
},
origin:{
   type: DataTypes.STRING,
   allowNull: false
},
image:{
   type: DataTypes.STRING,
   allowNull: false,
},
   }, { timestamps: false });
};
