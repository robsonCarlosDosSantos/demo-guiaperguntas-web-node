const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./datebase/datebase");
const perguntaModel = require("./datebase/Pergunta");

//Database
connection.authenticate().then(() => {
    console.log("Conexao feita com banco de dados!");
}).catch((erro) => {
    console.log("Erro ao tentar conexao com o banco de dados: "+erro);
});

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
    var descricao = req.body.descricao;

    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });

});

//Start server
app.listen("8080", () => {
    console.log("Servidor rodando!");
});