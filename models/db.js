const Sequelize = require('sequelize');

//connection database
const sequelize = new Sequelize('postapp', 'root', 'gugu', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};