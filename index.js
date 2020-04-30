const express = require("express");
const app = express();

//Dizendo para o express usar o ejs como view engine
//express he configurado para buscar o html na pasta views
app.set('view engine', 'ejs');

//setando para o express saber qual pasta ira conter os
//arquivos staticos ex: css, imagens e etc
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen("8080", () => {
    console.log("Servidor rodando!");
});