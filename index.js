const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//const session = require('express-session');


//template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware para analisar dados JSON
app.use(bodyParser.json());
// Middleware para analisar dados de formulário (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));



// Rotas para a página de login
app.get('/', (req, res) => {
  res.render('login');
});

// Rota para a página inicial (acessar apenas após realizar login)
app.get('/paginainicial', (req, res) => {
  res.render('pagina_inicial');
});

// Rota para cadastrar novo usuário (página de login)
app.post('/add', function (req, res) {
  Post.create({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    email: req.body.email,
    senha: req.body.senha,
    cidade: req.body.cidade,
    telefone: req.body.telefone
  })
});

// Rota para cadastrar animais (página inicial)
app.post('/addAnimal', function (req, res) {
  Post.create({
    nome: req.body.nome,
    especie: req.body.especie,
    raca: req.body.raca,
    sexo: req.body.sexo,
    idade: req.body.idade
  })
});

app.get('/getRacas', async (req, res) => {
  try {
    const [result] = await sequelize.query('SELECT * FROM Racas');
    res.json(result);
  } catch (error) {
    console.error('Erro ao obter raças do banco de dados:', error);
    res.status(500).json({ error: 'Erro ao obter raças do banco de dados' });
  }
});





// Porta para acessar o página utilizando um servidor local
app.listen(2000, function () {
  console.log("Servidor rodando http://localhost:2000 ");
});