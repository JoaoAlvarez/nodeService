module.exports = function(application){

    //apenas carrega a pagina inicialmente
    application.get('/formulario/noticia',function(resquet,response){
        application.app.controllers.adminController.formulario_noticia(application, resquet, response);
    });

    //rota para salvar a noticia
    application.post('/formulario/noticia/salvar',function(request,response){
        application.app.controllers.adminController.formulario_noticia_salvar(application, request, response);
    });
}
