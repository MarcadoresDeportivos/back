<<<<<<< HEAD
// Libreria para usar Mongo DB
const mongoose = require("mongoose")
// Dirección de la DB
const URIDB = 'mongodb://localhost:27017/marcadores'

module.exports = ()=>{
    const conn = () => {
        mongoose.connect(
            URIDB,
            {
=======
const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/marcadores';

module.exports = () =>{

    const conn = () =>{

        mongoose.connect(

            DB_URI,{
>>>>>>> 0bdd7b669da55def15ad9dcf2c8523bd8c021898
                keepAlive : true,
                useNewUrlParser : true,
                useUnifiedTopology : true
            },
<<<<<<< HEAD
            (err) => {
                if(err){
                    console.log("Error Conec: "+err)
                }else{
                    console.log("Conexión Satisfactoria")
                }                
            }
        )
    }
    conn()
=======
            (err) =>{
                if(err){
                    console.log("error DB: "+err);
                }else{
                    console.log("Conexion Satisfactoria");
                }

            }

        )

    }
    conn();

>>>>>>> 0bdd7b669da55def15ad9dcf2c8523bd8c021898
}