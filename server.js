
const express = require("express");
const path = require("path")
const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname,"public")));

//1. Definiendo en donde se ubicará el directorio views
app.set('views', path.join(__dirname, 'views')); 
//2. Definiendo el motor que usaremos
app.set('view engine', 'ejs');


// == MIDDLEWARE == //
app.get("/" ,( req, res ) => {
   res.render("pages/home",{title: "inicio"});
});

app.listen( PORT, () => {
   console.log(`puerto ${PORT}`);
});