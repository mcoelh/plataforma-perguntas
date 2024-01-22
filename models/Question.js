const Sequelize = require("sequelize");
const connection = require("../config/database/database");

//criação do model, criando os campos dessa tabela, seus tipos e sincroniza com o DB para que seja
//criado

const Question = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING, //textos curtos
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//sincroniza Question com o banco de dados.
Question.sync({ force: false }).then(() => {
    console.log("Tabela criada :)")
}) // não força criação da tabela se a tabela já existir

module.exports = Question;