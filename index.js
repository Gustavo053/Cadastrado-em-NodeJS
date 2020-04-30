const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const Post = require('./models/Post');

const app = express();

//config handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        res.render('home', { posts: posts });
    }).catch((erro) => {
        console.log('ERRO: ' + erro);
    });
});

app.get('/cad', (req, res) => {
    res.render('form');
});

app.post('/send', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        console.log('ERRO: ' + erro)
    });
});

app.get('/delete/:id', (req, res) => {
    Post.destroy({ where: { 'id': req.params.id } }).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        console.log('ERRO: ' + erro);
    });
});

app.listen(3333);