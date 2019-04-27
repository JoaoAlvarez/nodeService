var http = require('http')

var server = http.createServer( function(request, response){

    response.end("Responsa do servidor");



});

server.listen(3000);