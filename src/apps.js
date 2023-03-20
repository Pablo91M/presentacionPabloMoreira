const express = require ('express'); //trae la libreria 
const app = express();// ejecuta funcion del codigo
const PORT = 3001; //puerto
app.get("/api", (req,res) => {res.json({mensaje: 'hola mundo'}).status(200)});
app.listen(PORT,() => {console.log('estoy escuchando en el puerto:' + PORT)});