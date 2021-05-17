const { response } = require('express');
const { Pool } = require('pg');
const{Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:gn0s1da@localhost:5432/dvdrental')
/*
const pool = new Pool ({
  host:'localhost',
  user:'postgres',
  password:'gn0s1da',
  database:'dvdrental'  
})*/

//Definir el modelo
const Actor = sequelize.define("actor",{
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT
});

const getRaiz = (req,res) =>{
    res.send("Api de Pablo");
};

const getUsers = async (req,res)=>{
    await sequelize.sync();
    const response = await Actor.findAll();
    res.json(response.rows);
};
/*
const getUsers = async (req,res)=>{

    const response = await pool.query('SELECT * FROM actor')
    res.json(response.rows);
};

const addUser = async(req,res)=>{
    const { firstName, lastName } = req.body;
    const response = await pool.query('INSERT INTO actor (first_name, last_name) VALUES ($1,$2)', [firstName, lastName]);
    console.log(response);
    res.send("Usuario creado"+firstName+" " + lastName);
}

const getUserById = async (req, res) =>{
    console.log("espacio para user id: "+ req.params.id);
    
    const response = await pool.query('SELECT * FROM actor WHERE actor_id = $1',[req.params.id]);
    
    res.json(response.rows);
}

const deleteUser = async (req,res)=>{

    const response = await pool.query('DELETE FROM actor WHERE actor_id = $1',[req.params.id]);

    //res.send("Entranste por delete!! al usuario "+req.params.id);
    res.json(response.rows);
}

const updateUser = async (req,res)=>{

    const {firstName, lastName} = req.body;

    const response = await pool.query('UPDATE actor SET first_name = $1, last_name = $2 WHERE actor_id = $3',[firstName,lastName, req.params.id]);

    res.send("Entranste por update!! "+firstName+" "+lastName+" "+req.params.id);
}

module.exports = {
    getUsers,
    addUser,
    getUserById,
    deleteUser,
    updateUser,
    getRaiz
} */

module.exports = {
    getUsers,
    getRaiz
}