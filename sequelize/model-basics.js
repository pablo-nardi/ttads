const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://pablo:@localhost:5432/ttads')

const User = sequelize.define('User',{
    firstName:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    }
},{
    //other model option goes here
}
);

console.log(User === sequelize.models.User); 


//Sincroniza y crea la tabla relacionada al modelo si esta no existe.
User.sync();