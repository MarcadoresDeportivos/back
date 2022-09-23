const express = require('express')
const app = express()
const puerto = 3000

//Rutas
app.use(express.json());
app.use('/api/categoria',require('./routes/categoriasRoute'));
app.use('/api/equipo',require('./routes/equiposRoute'));

app.listen(puerto, ()=>{
    console.log("Servidor activo, puerto: "+puerto)
})
