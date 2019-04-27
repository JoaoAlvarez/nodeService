module.exports = function(app){
    app.get('/noticias',function(resquet,response){
        response.render("noticias/noticias.ejs");
    }); 
};
