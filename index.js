const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Dizendo para o express usar o ejs como view engine
//express he configurado para buscar o html na pasta views
app.set('view engine', 'ejs');

//setando para o express saber qual pasta ira conter os
//arquivos staticos ex: css, imagens e etc
app.use(express.static('public'));

//setando o body-parser ao express
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarPergunta", (req, res) => {
    var titulo = req.body.titulo;
    var pergunta = req.body.pergunta;

    res.send("Titulo: "+titulo+"</br>Pergunta: "+pergunta);
});

//Start server
app.listen("8080", () => {
    console.log("Servidor rodando!");
});