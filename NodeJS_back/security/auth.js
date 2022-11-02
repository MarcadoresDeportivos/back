const jwt = require('jsonwebtoken')
module.exports = async(req,res,next)=>{

    const token = req.header('x-auth-token')

    //Revisión si no hay token
    if(!token){
        return res.status(400).json({msj:"Token no encontrado, permiso denegado"})
    }

    try{
        const cifrado = jwt.verify(token,"palabra secreta")
        req.usuario = cifrado.usuario
        console.log("token confirmado")
        next()
    }catch(error){
        res.status(400).json({msj:"Token no valido, error autenticación: "+error})
    }

}