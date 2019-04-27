module.exports = function(app){
    app.get('/',function(resquet,response){
        response.render("home/index.ejs");
    });
};
