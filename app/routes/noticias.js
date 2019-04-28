module.exports = function(app){

    app.get('/noticias',function(resquet,response){
                
        //essa função esperra 1º a consulta e 2º o que vai apos a consulta (função de callback), esse callback recebe um erro, se ouver, e o resultado da consulta
        connection.query('select * from noticias',function(erro, result){
            // console.log("erro:",erro)
            console.log('result:',result)
            // response.send(result);
            response.render("noticias/noticias",{noticias : result});
        });
        
        
    }); 
};
