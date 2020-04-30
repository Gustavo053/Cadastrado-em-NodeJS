const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', 'gugu', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};