import modelo from '../../../models/modelo'
import baseDeDatos from '../../../lib/dbConnect'

//Creamos una funcion para saber que hacer con las peticiones  HTTTP que nos mandan
// la funcion no puede ser de tipo flecha

export default async function server(req,res){
    await baseDeDatos()
    const {method, query: { id }} = req

    switch(method){
        case 'PUT':
            try {
                const dato = await modelo.findByIdAndUpdate(id, req.body,{
                    new:true,
                    runValidators:true,
                });
                if (!dato) {
                    return res.status(404).json({ message:'paciente no encontrado' });
                  }
                    return res.status(200).json({ message:'paciente modificado'});
            } catch (error) {
                return res.status(400).json({error})
            }
            default:
            return res.status(500).json({mensaje:'falla en el servidor'})
    }
}