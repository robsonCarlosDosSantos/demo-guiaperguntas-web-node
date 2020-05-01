const Sequelize = require("sequelize");
const connection = require("./datebase");

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;