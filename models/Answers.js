const Sequelize = require("sequelize");
const connection = require("../config/database/database");

//criação do model, criando os campos dessa tabela, seus tipos e sincroniza com o DB para que seja
//criado

const Answer = connection.define('respostas', {
    corpo: {
        type: Sequelize.STRING, //textos curtos
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

//sincroniza Question com o banco de dados.
Answer.sync({ force: false }).then(() => {
}) // não força criação da tabela se a tabela já existir

module.exports = Answer;