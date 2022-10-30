// Para la Mongo DB
const { mapReduce } = require('../models/usuarioScheme')
const usuarioModel = require('../models/usuarioScheme')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
            usuario.password = await bcryptjs.hash(usuario.password,10)
            // Para que guarde en la DB
            await usuario.save()

            // Mensaje de éxito
            res.status(200).json({"msj":"usuario Guardado"})

        }catch(error){
            console.log("Error usuario Guardar: "+error)
        }
        //
    }    
}

const usuarioLogin = async(req,res)=>{
    console.log("Intento de Login")
    console.log(req.body)
    try{
        const {email, password} = req.body
        let usuario = await usuarioModel.findOne({"email":email}) //Búsqueda en MongoDB
        if(!usuario){
            res.status(401).json({msj:"El usuario no existe"})
        }

        //password = await bcryptjs.hash(password,10)
        //const correcto = await bcryptjs.compare(usuario.password, password)              

        let correcto = false
        if(usuario.password == password){
            correcto = true
        }

        if(!correcto){
            res.status(400).json({msj:"Datos de acceso incorrectos"})
        }else{
            const payload = {
                usuario : {id:usuario.id}
            }
            jwt.sign(
                payload,
                "palabra secreta",
                {
                    expiresIn:3600
                },
                (error,token)=>{
                    if(error)throw error 
                    res.status(200).json({token:token, msj:"Acceso concedido"})
                }
            )
        }
    }catch(ex){
        res.status(400).json({msj:"Error de acceso: "+ex})
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
    usuarioGuardar,
    usuarioLogin
}
