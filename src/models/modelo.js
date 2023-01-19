import mongoose from "mongoose";

const pacienteShema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true, "por favor ingresar nombre"]
    },
    patologia:{
        type:String,
        required:[true, "por favor ingresar patologia"]
    }
})

export default mongoose.models.pacientes || mongoose.model('pacientes', pacienteShema)