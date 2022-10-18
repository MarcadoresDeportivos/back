const jwt = require('jsonwebtoken')
module.exports = async(req,res)=>{

    const token = req.header('x-auth-token')

    if(!token){
        res.status(401).json({msj:"Token no encontrado"})
    }

    try{
        const cifrado = jwt.verify(token,"palabra secreta")
        req.usuario = cifrado.usuario
        //next()
    }catch(error){
        res.status(500).json({msj:"error autenticación: "+error})
    }

}