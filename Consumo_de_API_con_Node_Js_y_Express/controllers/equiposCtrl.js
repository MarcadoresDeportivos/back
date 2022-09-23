// GET
const equipoListar = ()=>{
    listado = {
        "1":"Equipo A",
        "2":"Equipo B",
        "3":"Equipo C"
    }
    return listado
}
// http://localhost:3000/api/equipo/

// POST
const equipoGuardar = async (req,res) => {
    console.log(req.body)
    const nombre = req.body.nombre
    let mensaje = {}
    console.log("Nombre es "+nombre)
    if(nombre == ''){
        mensaje = {"msj":"Nombre de equipo No valido"}
        res.status(400).json(mensaje)
    }else{
        mensaje = {
        "msj":"equipo almacenado con exito"
    }
    res.status(200).json(mensaje)
    }    
}
/*
{
	"nombre":"Equipo D"
}
*/

// PUT
const equipoActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {id,nombre} = req.body
    try{
        console.log("El ID"+id)
        if(id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }
        if(nombre != ''){
            res.status(200).json({"msj":"equipo actualizado con Éxito"})
        }else{
            res.status(400).json({"msj":"equipo NO valida"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}
/*
{
    "id":"2",
	"nombre":"Equipo Bb"    
}
*/

// DELETE
const equipoEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }
        res.status(200).json({"msg":"Equipo eliminado con éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error eliminando equipo"})
    }
}
// http://localhost:3000/api/equipo/1

// GET BY ID
const equipoObtener = async (req,res) => {
    const id = req.params.id
    console.log("ID solicitada: "+id)
    //Proceso DB
    let equipo
    if(id == 1){
        equipo = {"1":"Equipo A"}
    }
    if(id == 2){
        equipo = {"2":"Equipo B"}
    }
    if(id == 3){
        equipo = {"3":"Equipo C"}
    }
    res.status(200).json(equipo)
}
// http://localhost:3000/api/equipo/1

module.exports = {
    equipoListar,
    equipoGuardar,
    equipoObtener,
    equipoActualizar,
    equipoEliminar
}
