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
    await sequelize.sync();

    /* SELECT * FROM ..
    const users = await User.findAll();
    console.log("ALl users: ", JSON.stringify(users,null,2));*/

    // SELECT ID NAME AGE FROM ...
    const users = await User.findAll({
        attributes:['id', 'name', 'age']
    });
    console.log("ALL users: ", JSON.stringify(users,null,2));
    

     

})();
