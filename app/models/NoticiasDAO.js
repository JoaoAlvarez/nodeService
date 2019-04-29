function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getNoticia = function(idNoticia, callback){
    //essa função esperra 1º a consulta e 2º o que vai apos a consulta (função de callback), esse callback recebe um erro, se ouver, e o resultado da consulta
    this._connection.query('select * from noticias where id = '+idNoticia ,callback)
} 

NoticiasDAO.prototype.getAllNoticias = function(callback){
    //essa função esperra 1º a consulta e 2º o que vai apos a consulta (função de callback), esse callback recebe um erro, se ouver, e o resultado da consulta
    this._connection.query('select * from noticias order by data_criacao desc',callback)
}

NoticiasDAO.prototype.getUltimasNoticias = function(quantidade, callback){
    //essa função esperra 1º a consulta e 2º o que vai apos a consulta (função de callback), esse callback recebe um erro, se ouver, e o resultado da consulta
    this._connection.query('select * from noticias order by data_criacao desc limit '+quantidade,callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    console.log("Noticia que chegou no DAO para salvar:",noticia)
    
    //essa função esperra 1º a consulta e 2º o que vai apos a consulta (função de callback), esse callback recebe um erro, se ouver, e o resultado da consulta
    this._connection.query('insert into noticias set ?',noticia,callback)
}
module.exports = function(){
    return NoticiasDAO
};