var app = require("./config/server");
let DOOR = 3000

app.listen(DOOR, function(){
    console.log("Servidor Already in door",DOOR);
    // console.log(require('./app/models/mod_')())
});