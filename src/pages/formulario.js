import {React, useState} from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Formulario from '../components/Formulario';


export default function formulario() {
    // VARIABLES
    const [isLoadingTwo, setIsLoadingTwo] = useState(false)
    const {push} = useRouter()
    const now = new Date()
    const formato = now.toLocaleString()
   
    const initialize = {
        nombre:'',
        cedula:'',
        sexo:'',
        edad:'',
        ocupacion:'',
        direccion:'',
        vivienda:'',
        nivel:'',
        ruta:'',
        telefono:'',
        enfermedad:'',
        diagnostico:'',
        plan:'',
        pendiente:'',
        abordaje:'',
        evaluado:'',
        operacion:'',
        fechaNacimiento:'',
        fechaCirugia:'',
        fechaOperacion:'',
        protesis:'',
        antecedentes:{
            diabetes:'',
            hipertencion:'',
            artritis:'',
            },
        fecha:formato
    }
    const [paciente, setpaciente] = useState(initialize)
    console.log(paciente.antecedentes.diabetes)
    // FUNCIONES
    const guardar = (e) => {
        e.preventDefault()
        setIsLoadingTwo(true) 
        setpaciente({...paciente})
        console.log(paciente)
        postData(paciente)  
    }
    
    const postData = async (paciente) => {
        try {
            const res = await fetch("/api/server", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(paciente),
            })
           
           setTimeout( async()=>{
            push("/Lista")
           },5000)
            
        } catch (error) {
           console.log(error)
        }
    }
    // captando lo que colocamos en el formulario
    const handlechange = (e)=>{
        const { name, value, type, checked } = e.target;

        // Si el campo modificado es un checkbox
        if (type === "checkbox") {
          // Copiamos el objeto paciente
          const pacienteCopy = { ...paciente };
          // Actualizamos el valor del checkbox correspondiente en antecedentes
          pacienteCopy.antecedentes[name] = checked ? value : "";
          // Actualizamos el estado del componente
          setpaciente(pacienteCopy);
        } else {
          // Si no es un checkbox, actualizamos el valor del campo correspondiente
          setpaciente({ ...paciente, [name]: value });
        }
        
    }
    // CONSOLE
    return (
        <div>
            <Layout>
                <div className='w-8/12 mx-auto mb-10 mt-20'>
                    <h1 className='text-center p-2 text-xl border border-slate-200 rounded'>REGISTRO DE HISTORIA</h1>
                </div>
                <Formulario
                guardar={guardar}
                handlechange={handlechange}
                pacient={paciente}
                isLoadingTwo={isLoadingTwo}
                />
            </Layout>
        </div>
    )
}
