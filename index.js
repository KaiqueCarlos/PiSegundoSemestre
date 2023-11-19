

const express = require("express");
const app = express();
const Sequelize = require('sequelize');
const handlebars = require('express-handlebars');

//config 
    //template Engine
    app.engine ('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    //conexão com o banco de dados SQLServer

    app.get('/', function(req, res){
    res.render('login');
});



//app.get("/css/style.css", function(req, res){
  //  res.sendFile(__dirname + "/css/style.css");
//})

//app.post("/add", function(req, res){
    //res.send(console.log("login"))







app.listen(2000, function(){
    console.log("Servidor rodando http://localhost:2000 ");
});





//const path = require("path");
//app.use(express.static(path.join(__dirname, 'public')))