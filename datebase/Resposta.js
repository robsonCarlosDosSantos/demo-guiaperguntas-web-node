const Sequelize = require("sequelize");
const connection = require("./datebase");

const Resposta = connection.define("resposta",{
    corpo : {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force : false}).then(() => {});

module.exports = Resposta;