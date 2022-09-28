const express = require('express')
const app = express()
const puerto = 3000
// Para la conexión a la DB
const db = require('./config/db');

//Rutas
app.use(express.json());
app.use('/api/categoria',require('./routes/categoriasRoute'));
app.use('/api/equipo',require('./routes/equiposRoute'));
app.use('/api/usuario',require('./routes/usuariosRoute'));
app.use('/api/evento',require('./routes/eventosRoute'));

app.listen(puerto, ()=>{
    console.log("Servidor activo, puerto: "+puerto)
})

// Conexión a la DB
db()
