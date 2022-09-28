<<<<<<< HEAD
const mongoose = require('mongoose')

const categoriaScheme = mongoose.Schema(
    {
        nombre : {
            type : String,
=======
const mongoose = require('mongoose');

const categoriaSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
>>>>>>> 0bdd7b669da55def15ad9dcf2c8523bd8c021898
            required : true,
            trim : true
        },
        creado : {
<<<<<<< HEAD
            type : Date,
=======
            type: Date,
>>>>>>> 0bdd7b669da55def15ad9dcf2c8523bd8c021898
            default : Date.now()
        }
    }
)

<<<<<<< HEAD
module.exports = mongoose.model("categoria", categoriaScheme)
=======
module.exports = mongoose.model("categoria", categoriaSchema);
>>>>>>> 0bdd7b669da55def15ad9dcf2c8523bd8c021898
