const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = new Sequelize('postgres://pablo:@localhost:5432/ttads');

//DEFINO MODELOS
const User = sequelize.define("user",{
    name: DataTypes.TEXT,
    favouriteColor: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
});

(async()=>{
    //Sincronizo todos los modelos creados y 
    //con FORCE:TRUE creates the table, dropping it first if it already existed
    await sequelize.sync({force:true});

    //La palabra create reemplaza a build y save
    const pablo = await User.create({name:"Pablo"});
    const jesus = await User.create({name:"Jesus"});
    const damian = await User.create({name:"Damian"});
})();


