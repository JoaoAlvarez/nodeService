module.exports = function(app){
    app.get('/formulario-add-noticia',function(resquet,response){
        response.render("admin/form_add_noticia.ejs");
    });
}
