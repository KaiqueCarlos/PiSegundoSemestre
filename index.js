const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const session = require('express-session');

//config 
//template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body-Parser

// Middleware para analisar dados JSON
app.use(bodyParser.json());
// Middleware para analisar dados de formulário (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));


// Rotas cadastro
app.get('/', function (req, res) {
   res.render('login');
});


app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
  
    try{
      const user = await Post.findOne({ where: { email, senha } });
  
      if (user) {
        res.redirect('/redirect_inicial');
      } else {
        res.send('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).send('Erro interno');
    }
  });

  app.get('/redirect_inicial', function(req, res){
    res.render('pagina_inicial');
  })
  


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







app.listen(2000, function () {
    console.log("Servidor rodando http://localhost:2000 ");
});