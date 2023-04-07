import mongoose from "mongoose";

const pacienteShema = new mongoose.Schema({
    nombre:{
        type:String,
        //required:[true, "por favor ingresar nombre"]
    },
    cedula:{
        type:String,
        //required:[true, "por favor ingresar nombre"]
    },
    ocupacion:{
        type:String,
        //required:[true, "por favor ingresar nombre"]
    },
    direccion:{
        type:String,
        //required:[true, "por favor ingresar nombre"]
    },
    vivienda:{
        type:String,
        //required:[true, "por favor ingresar nombre"]
    },
    nivel:{
        type:String,
        //required:[true, "por favor ingresar nombre"]
    },
    ruta:{
        type:String,
       // required:[true, "por favor ingresar nombre"]
    },
    telefono:{
        type:String,
        //required:[true, "por favor ingresar nombre"]
    },
    enfermedad:{
        type:String,
       // required:[true, "por favor ingresar nombre"]
    },
    diagnostico:{
        type:String,
       // required:[true, "por favor ingresar nombre"]
    },
    diagnosticoPost:{
        type:String,
        //required:[true, "por favor ingresar nombre"]
    },
    plan:{
        type:String,
        // required:[true, "por favor ingresar nombre"]
    },
    pendiente:{
        type:String,
        // required:[true, "por favor ingresar nombre"]
    },
    abordaje:{
        type:String,
        // required:[true, "por favor ingresar nombre"]
    },
    evaluado:{
        type:String,
        // required:[true, "por favor ingresar nombre"]
    },
    operacion:{
        type:String,
        // required:[true, "por favor ingresar nombre"]
    },
    protesis:{
        type:String,
        // required:[true, "por favor ingresar nombre"]
    },
    fechaNacimiento:{
        type:String,
        // required:[true, "por favor ingresar sexo"]
    },
    fechaCirugia:{
        type:String,
        // required:[true, "por favor ingresar sexo"]
    },
    fechaOperacion:{
        type:String,
        // required:[true, "por favor ingresar sexo"]
    },
    antecedentes:{
        type:Object,
        // required:[true, "por favor ingresar sexo"]
    },
    sexo:{
        type:String,
        // required:[true, "por favor ingresar sexo"]
    },
    edad:{
        type:Number,
        // required:[true, "por favor ingresar edad"]
    },
    preOperatorioRadio:{
        type:String,
        // required:[true, "por favor ingresar edad"]
    },
    postOperatorioRadio:{
        type:String, 
    },
    quinceDias:{
        type:String,  
    },
    UnMes:{
        type:String,
    },
    DosMeses:{
        type:String,
    },
    TresMeses:{
        type:String,
    },
    CuatroMeses:{
        type:String,
    },
    CincoMeses:{
        type:String,
    },
    SeisMeses:{
        type:String,
    },
    rayosx:{
        type:String,
    },
    examen:{
        type:String,
    },
    fecha:{
        type:String  
    }

})

export default mongoose.models.pacientes || mongoose.model('pacientes', pacienteShema)