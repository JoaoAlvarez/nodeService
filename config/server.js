var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

var app = express();
app.set('view engine', 'ejs'); //utilizado para poder manipular os objetos pelo html (arquivos .ejs)
app.set('views', './app/views'); //

//.use deve ser usado quanse se desejar tonar algum função global, sendo acessado atravez do app.
app.use(bodyParser.urlencoded({extended : true})); //permite que seja implementado atravez do json as url codificadas, ajudando na tratativas de objs
app.use(expressValidator());//serve para validar os dados que estão vindo do front
app.use(express.static('./app/public'))// torna todos as arquivos da pasta passada visivel no projeto(assim podendo ser visto pelos arquivos .ejs)
//o Consign ja identifica  toads as rotas,model e a conexão e inclui na variavel 'app', assim podendo ser identificado por ele sem precisar declarar cada rota no arquivo app
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;