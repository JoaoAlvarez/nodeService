module.exports.listar_noticias = function(application, resquest, response){
    var connectToDataBase = application.config.dbConnection();
    var noticiasDao = new application.app.models.NoticiasDAO(connectToDataBase);

    noticiasDao.getAllNoticias(function(erro, result){
        if(erro){console.log("erro:",erro)}
        // console.log('result:',result)
        response.render("noticias/listar-noticias.ejs",{noticias : result});
    });
}

module.exports.noticia = function(application, resquest, response){
  
    var connectToDataBase = application.config.dbConnection();
    var noticiasDao = new application.app.models.NoticiasDAO(connectToDataBase);

    var idNoticia = resquest.query.id

    noticiasDao.getNoticia(idNoticia, function(erro, result){
        if( erro != null){
            console.log("erro:",erro)
        }
        // console.log('result:',result)
        response.render("noticias/noticia",{noticia : result});
    });
}