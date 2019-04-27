var app = require("./config/server");
let DOOR = 3000

require('./app/routes/noticias')(app);
require('./app/routes/home')(app);
require('./app/routes/formulario-add-noticia')(app);

app.listen(DOOR, function(){
    console.log("Servidor Already in door",DOOR);
    console.log(require('./app/models/mod_')())
});