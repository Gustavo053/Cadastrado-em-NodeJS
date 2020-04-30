const db = require('./db');

//defining table
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },

    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//created table
// Post.sync();

module.exports = Post;