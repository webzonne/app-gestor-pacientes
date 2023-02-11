import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    usuario:{
        type:String,
        required:[true, "por favor ingresar usuario"]
    },
    password:{
        type:String,
        required:[true, "por favor ingresar contrasena"]
    }
})

export default mongoose.models.users || mongoose.model('users', userShema)