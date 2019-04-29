module.exports = function(application){

    application.get('/listarnoticias',function(resquet,response){
        application.app.controllers.noticiaController.listar_noticias(application, resquet, response);
    }); 

    application.get('/noticia',function(resquet,response){
        application.app.controllers.noticiaController.noticia(application, resquet, response);        
    }); 
};
