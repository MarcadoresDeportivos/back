const express = require('express')
const app = express()
const puerto = 3000

//Rutas
app.use(express.json());
app.use('/api/categoria',require('./routes/categoriasRoute'));

app.listen(puerto, ()=>{
    console.log("Servidor activo, puerto: "+puerto)
})
