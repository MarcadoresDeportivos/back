const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/marcadores';

module.exports = () =>{

    const conn = () =>{

        mongoose.connect(

            DB_URI,{
                keepAlive : true,
                useNewUrlParser : true,
                useUnifiedTopology : true
            },
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

}