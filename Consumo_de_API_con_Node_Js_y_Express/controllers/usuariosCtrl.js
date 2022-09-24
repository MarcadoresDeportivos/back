// GET
/*
const usuarioListar = ()=>{
    listado = {
        "1":"usuario A",
        "2":"usuario B",
        "3":"usuario C"
    }
    return listado
}
*/
// http://localhost:3000/api/usuario/

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
        mensaje = {
        "msj":"usuario almacenado con exito"
    }
    res.status(200).json(mensaje)
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

/*
// PUT
const usuarioActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {id,nombre} = req.body
    try{
        console.log("El ID"+id)
        if(id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }
        if(nombre != ''){
            res.status(200).json({"msj":"usuario actualizado con Éxito"})
        }else{
            res.status(400).json({"msj":"usuario NO valida"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}

//{
//    "id":"2",
//	"nombre":"usuario Bb"    
//}

// DELETE
const usuarioEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }
        res.status(200).json({"msg":"usuario eliminado con éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error eliminando usuario"})
    }
}
// http://localhost:3000/api/usuario/1

// GET BY ID
const usuarioObtener = async (req,res) => {
    const id = req.params.id
    console.log("ID solicitada: "+id)
    //Proceso DB
    let usuario
    if(id == 1){
        usuario = {"1":"usuario A"}
    }
    if(id == 2){
        usuario = {"2":"usuario B"}
    }
    if(id == 3){
        usuario = {"3":"usuario C"}
    }
    res.status(200).json(usuario)
}
// http://localhost:3000/api/usuario/1
*/

module.exports = {
    //usuarioListar,
    usuarioGuardar//,
    //usuarioObtener,
    //usuarioActualizar,
    //usuarioEliminar
}
