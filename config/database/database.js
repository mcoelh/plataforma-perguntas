const Sequelize = require('sequelize');
const connection = new Sequelize('projeto1', 'root', '240718', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = connection;