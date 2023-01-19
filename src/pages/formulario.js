import {React, useState} from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Formulario from '../components/Formulario'

export default function formulario() {
    // VARIABLES
    const {push} = useRouter()
    const initialize = {
        nombre:'',
        patologia:''
    }
    const [paciente, setpaciente] = useState(initialize)
    // FUNCIONES
    const guardar = (e) => {
        e.preventDefault()
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
           
            push("/aplication")
        } catch (error) {
           console.log(error)
        }
    }
    // captando lo que colocamos en el formulario
    const handlechange = (e)=>{
        const {name,value} = e.target
        setpaciente({...paciente, [name]:value})
       
    }
    // CONSOLE
    return (
        <div>
            <Layout>
                <div className='w-8/12 mx-auto mb-10 mt-20'>
                    <h1 className='w-36 p-2 text-xl flex-inline border border-slate-200 rounded'>FORMULARIO</h1>
                </div>
                <Formulario
                guardar={guardar}
                handlechange={handlechange}
                pacient={paciente}
                />
            </Layout>
        </div>
    )
}
