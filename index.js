const express = require("express");
const app = express();

//Dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("Bem vindo ao site!");
});

app.listen("8080", () => {
    console.log("Servidor rodando!");
});