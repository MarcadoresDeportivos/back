// GET
const categoriaListar = ()=>{
    listado = {
        "1":"Equipo 1",
        "2":"Equipo 2",
        "3":"Equipo 3",
        "4":"Equipo 4",
        "5":"Equipo 5",
        "6":"Equipo 6"
    }
    return listado
}
// http://localhost:3000/api/categoria/

// POST
const categoriaGuardar = async (req,res) => {
    console.log(req.body)
    const nombre = req.body.nombre
    let mensaje = {}
    console.log("Nombre es "+nombre)
    if(nombre == ''){
        mensaje = {"msj":"Nombre de Categoria No valido"}
        res.status(400).json(mensaje)
    }else{
        mensaje = {
        "msj":"Categoria Almacenada con exito"
    }
    res.status(200).json(mensaje)
    }    
}
/*
{
	"nombre":"Equipo 7"
}
*/

// GET BY ID
const categoriaObtener = async (req,res) => {
    const id = req.params.id
    console.log("ID solicitada: "+id)
    //Proceso DB
    let categoria
    if(id == 1){
        categoria = {"1":"Equipo 1"}
    }
    if(id == 2){
        categoria = {"2":"Equipo 2"}
    }
    if(id == 3){
        categoria = {"3":"Equipo 3"}
    }
    if(id == 4){
        categoria = {"4":"Equipo 4"}
    }
    if(id == 5){
        categoria = {"5":"Equipo 5"}
    }
    if(id == 6){
        categoria = {"6":"Equipo 6"}
    }
    res.status(200).json(categoria)
}
// http://localhost:3000/api/categoria/1

// PUT
const categoriaActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {id,nombre} = req.body
    try{
        console.log("El ID"+id)
        if(id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }
        if(nombre != ''){
            res.status(200).json({"msj":"Categoria Actualizada con Éxito"})
        }else{
            res.status(400).json({"msj":"Categoria NO valida"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}
/*
{
    "id":"3",
	"nombre":"Equipo 3"    
}
*/

// DELETE
const categoriaEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }
        res.status(200).json({"msg":"Categoría Eliminada con Éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error Eliminando Categoría"})
    }
}
// http://localhost:3000/api/categoria/1

module.exports = {
    categoriaListar,
    categoriaGuardar,
    categoriaObtener,
    categoriaActualizar,
    categoriaEliminar
}
