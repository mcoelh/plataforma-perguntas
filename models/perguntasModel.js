const Sequelize = require("sequelize");
const connection = require("../config/database/database");

//criação do model, criando os campos dessa tabela, seus tipos e sincroniza com o DB para que seja
//criado

const pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING, //textos curtos
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//sincroniza pergunta com o banco de dados.
pergunta.sync({ force: false }).then(() => {
}) // não força criação da tabela se a tabela já existir

module.exports = pergunta;