const Sequelize = require('sequelize');
const connection = new Sequelize('nomeBD', 'nomeUser', 'senhaUser', {
    host: '',
    dialect: 'mysql'
});

module.exports(connection)