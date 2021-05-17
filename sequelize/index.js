const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://pablo:@localhost:5432/ttads')

try{
    sequelize.authenticate();
    console.log('Connection has been established successfully');
}catch(error){
    console.log('Unable to connect: ', error);
}

sequelize.close();