//Colocar o mesmo nome da rota torcando as barras por andeline (apenas para padronizar)
module.exports.formulario_noticia = function(application, request, response){
    response.render("admin/form_add_noticia.ejs", {validacao : {}, noticia : {}});
}

module.exports.formulario_noticia_salvar = function(application, request, response){
    var noticia = request.body;

    //Validação dos dados vindos do front
    request.assert('titulo','Titulo é obrigatorio').notEmpty();
    request.assert('resumo','Resumo é obrigatorio').notEmpty();
    request.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    request.assert('autor','Autor é obrigatorio').notEmpty();
    request.assert('data_noticia','Data da Noticia é obrigatorio').notEmpty()
    // request.assert('data_noticia','Data da Noticia é obrigatorio').isDate({format: 'YYYY-MM-DD'});
    request.assert('noticia','Noticia é obrigatorio').notEmpty();

    var erros = request.validationErrors();

    if (erros){
        console.log('Campo nao valido')
        response.render("admin/form_add_noticia.ejs", {validacao : erros, noticia : noticia});
        return;
    }

    var connectToDataBase = application.config.dbConnection();
    var noticiasDao = new application.app.models.NoticiasDAO(connectToDataBase);

    noticiasDao.salvarNoticia(noticia, function(erro, result){
        if(erro){
            console.log("erro:",erro)
        }
        response.redirect('/listarnoticias');
    });

}
