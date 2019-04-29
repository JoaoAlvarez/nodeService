module.exports.index = function(application, resquet, response){
    var connectionToDataBase = application.config.dbConnection();
    var noticiasDao = new application.app.models.NoticiasDAO(connectionToDataBase);

    noticiasDao.getUltimasNoticias(5,function(error, result){
        response.render("home/index.ejs",{noticias : result});    
    });
}