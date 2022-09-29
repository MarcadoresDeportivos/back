// Para la Mongo DB
const { mapReduce } = require('../models/usuarioScheme')
const usuarioModel = require('../models/usuarioScheme')

// POST
const usuarioGuardar = async (req,res) => {
    console.log(req.body)
    const nombre = req.body.nombre
    console.log("Nombre es "+nombre)
    const email = req.body.email
    console.log("Email es "+email)
    const surname = req.body.surname
    console.log("Surname es "+surname)
    const password = req.body.password
    console.log("Password es "+password)

    let mensaje = {}

    if(nombre == ''){
        mensaje = {"msj":"Nombre de usuario No valido"}
        res.status(400).json(mensaje)
    }else if(email == ''){
        mensaje = {"msj":"Email de usuario No valido"}
        res.status(400).json(mensaje)
    }else if (surname == ''){
        mensaje = {"msj":"Surname de usuario No valido"}
        res.status(400).json(mensaje)
    }else if (password == ''){
        mensaje = {"msj":"Password de usuario No valido"}
        res.status(400).json(mensaje)
    }else{
        // Para la MongoDB
        try{
            // Objeto correspondiente al modelo, datos puerto
            const usuario = new usuarioModel(req.body)
            // Para que guarde en la DB
            usuario.save()

            // Mensaje de éxito
            res.status(200).json({"msj":"usuario Guardado"})

        }catch(error){
            console.log("Error usuario Guardar: "+error)
        }
        //
    }    
}
/*
{
	"nombre":"Nombre Usuario 1",
    "email":"correo@gmail.com",
    "surname":"user1",
    "password":"pasusu1"
}
*/

module.exports = {
    usuarioGuardar
}
