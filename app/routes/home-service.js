module.exports = function(application){
    application.get('/',function(resquet,response){
        application.app.controllers.homeController.index(application, resquet, response);  
    })
};
