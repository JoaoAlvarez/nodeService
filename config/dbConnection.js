var mysql = require('mysql');
        
module.exports = function(){
    // os parametro sao pasasdos via json
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias',
        port : '3306'
    });
}