import {React, useState, useEffect} from 'react'
import Formulario from '../../components/Formulario'
import Layout from '../../components/Layout'
import conectarDB from '../../lib/dbConnect'
import modelo from '../../models/modelo'
import { useRouter } from 'next/router'



// SERVER
export async function getServerSideProps({ params }) {
  try {
    await conectarDB()
    const respuest = await modelo.findById(params.id).lean()
    respuest._id = respuest._id.toString()
    return { props: { respuest } }
  } catch (err) {
    console.log(err)
  }
}
// CLOSE SERVER




export default function editar({respuest}) {
  // VARIABLES
  const {query,push} = useRouter()
  const [isLoadingTwo, setIsLoadingTwo] = useState(false)
  const [checked, setChecked] = useState(false);
  

  const [pacient,setpacient] = useState({
    nombre:respuest.nombre,
    cedula:respuest.cedula,
    ocupacion:respuest.ocupacion,
    direccion:respuest.direccion,
    vivienda:respuest.vivienda,
    nivel:respuest.vivienda,
    ruta:respuest.ruta,
    telefono:respuest.telefono,
    enfermedad:respuest.enfermedad,
    diagnostico:respuest.diagnostico,
    diagnosticoPost:respuest.diagnosticoPost,
    plan:respuest.plan,
    pendiente:respuest.pendiente,
    abordaje:respuest.abordaje,
    evaluado:respuest.evaluado,
    operacion:respuest.operacion,
    protesis:respuest.protesis,
    fechaNacimiento:respuest.fechaNacimiento,
    fechaCirugia:respuest.fechaCirugia,
    fechaOperacion:respuest.fechaOperacion,
    antecedentes:{
      diabetes:respuest.antecedentes.diabetes,
      hipertencion:respuest.antecedentes.hipertencion,
      artritis:respuest.antecedentes.artritis,
      psoriasis:respuest.antecedentes.psoriasis,
      lupus:respuest.antecedentes.lupus,
      anemiaDrepanocitica:respuest.antecedentes.anemiaDrepanocitica,
      perther:respuest.antecedentes.perther,
      },
    sexo:respuest.sexo,
    edad:respuest.edad,
    preOperatorioRadio:respuest.preOperatorioRadio,
    postOperatorioRadio:respuest.postOperatorioRadio,
    quinceDias:respuest.quinceDias,
    UnMes:respuest.UnMes,
    DosMeses:respuest.DosMeses,
    TresMeses:respuest.TresMeses,
    CuatroMeses:respuest.CuatroMeses,
    CincoMeses:respuest.CincoMeses,
    SeisMeses:respuest.SeisMeses
  })
  // console.log(respuest.antecedentes)
  const guardar = (e)=>{
    e.preventDefault()
    setIsLoadingTwo(true)
    updatePaciente(pacient)
  }

  const updatePaciente = async(pacient)=>{
      try {
        await fetch(`/api/update/${query.id}`,{
          method:"PUT",
          headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(pacient),
        })
        setTimeout( async()=>{
          push("/Lista")
         },5000)
      } catch (error) {
        console.log(error)
      }
  }

  const handleClick = (e)=>{
 
  }


  const handlechange = (e)=>{
    // const {name,value} = e.target
    // setpacient({...pacient, [name]:value})
    const { name, value, type, checked } = e.target;
     // Si el campo modificado es un checkbox
     if (type === "checkbox") {
      console.log(e.target.checked)
    // Copiamos el objeto paciente
    const pacienteCopy = { ...pacient };
    // Actualizamos el valor del checkbox correspondiente en antecedentes
    pacienteCopy.antecedentes[name] = checked ? value : "";
    // Actualizamos el estado del componente
    setpacient(pacienteCopy);
  } else {
    // Si no es un checkbox, actualizamos el valor del campo correspondiente
    setpacient({ ...pacient, [name]: value });
  }
   
  }
 
// CONSOLE

  return (
    <>
      <Layout>
        <div className='w-8/12 mx-auto'>
          <h1 className='text-xl mb-10 mt-20'>EDICIÓN</h1>
        </div>
          <Formulario
          guardar={guardar}
          handlechange={handlechange}
          handleClick={handleClick}
          checked={checked}
          pacient={pacient}
          isLoadingTwo={isLoadingTwo}
          />
      </Layout>
    </>
  )
}
