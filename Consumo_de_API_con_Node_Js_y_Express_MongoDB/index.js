const express = require('express')
const app = express()
const puerto = 3000
<<<<<<< HEAD
// Para la conexión a la DB
const db = require('./config/db');
=======
const db = require('./config/db')
>>>>>>> 0bdd7b669da55def15ad9dcf2c8523bd8c021898

//Rutas
app.use(express.json());
app.use('/api/categoria',require('./routes/categoriasRoute'));
app.use('/api/equipo',require('./routes/equiposRoute'));
app.use('/api/usuario',require('./routes/usuariosRoute'));
app.use('/api/evento',require('./routes/eventosRoute'));

app.listen(puerto, ()=>{
    console.log("Servidor activo, puerto: "+puerto)
})

<<<<<<< HEAD
// Conexión a la DB
db()
=======
db();
>>>>>>> 0bdd7b669da55def15ad9dcf2c8523bd8c021898
