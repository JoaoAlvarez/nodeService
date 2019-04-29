var mysql = require('mysql');

var connectToDataBase = function(){
    // os parametro sao pasasdos via json
    console.log("Estabelecida conexão com a base de dados")
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias',
        port : '3306'
    });
}
module.exports = function(){
    console.log("Carregado o modulo de conexão com o banco.")
    return connectToDataBase
}