import conectarDB from '../../lib/dbConnect'
import modelo from '../../models/modelo'
import React from 'react'
import Layout from '../../components/Layout'
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
export default function Index({ respuest }) {
  let fecha = new Date(respuest.fecha)
  let options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  let fechaNew = fecha.toLocaleString('es-ES', options);
  const antecedentesArray = Object.entries(respuest.antecedentes)
  console.log(antecedentesArray)
  return (
    <>
      <Layout>
        <div>
          <div className='w-8/12 mx-auto mb-10 mt-20'>
            <h1 className='w-auto p-2 text-xl inline border border-slate-200 rounded'>FICHA CLINICA</h1>
          </div>

          <div className='w-8/12 mx-auto border rounded border-slate-400'>

            <div className=' flex flex-col-reverse items-start sm:flex-row sm:justify-between sm:items-center p-5 border-b border-slate-400'>
              {/* NOMBRE */}
              <h3 className='font-semibold sm:font-normal text-base sm:text-4xl'>{respuest.nombre.toUpperCase()}</h3>
              {/* FECHA */}
              <p className='text-base'>fecha de ingreso: {fechaNew.toUpperCase()}</p>
            </div>

            {/* SEXO */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>SEXO</p>
              <p className=''>{respuest.sexo}</p>
            </div>

            {/* EDAD */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>EDAD</p>
              <p className=''>{respuest.edad}</p>
            </div>

            {/* FECHA DE NACIMIENTO */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>FECHA DE NACIMIENTO</p>
              <p className=''>{respuest.fechaNacimiento}</p>
            </div>

            {/* CEDULA */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>CEDULA</p>
              <p className=''>{respuest.cedula}</p>
            </div>

            {/* TELEFONO */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>TELEFONO</p>
              <p className=''>{respuest.telefono}</p>
            </div>

            {/* OCUPACION */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>OCUPACION</p>
              <p className=''>{respuest.ocupacion}</p>
            </div>

            {/* DIRECCION */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>DIRECCION</p>
              <p className=''>{respuest.direccion}</p>
            </div>

            {/* NIVEL */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>NIVEL</p>
              <p className=''>{respuest.nivel}</p>
            </div>

            {/* RUTA DE ACCESO */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>RUTA DE ACCESO</p>
              <p className=''>{respuest.ruta}</p>
            </div>
             {/*ANTECEDENTES*/}
             <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>ANTECEDENTES</p>
              {antecedentesArray && antecedentesArray.map((e)=>{return(
                <div key={e}><p>{e[1]}</p></div>)
                  })}
             
             </div>

            {/* ENFERMEDAD ACTUAL */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>ENFERMEDAD ACTUAL</p>
              <p className=''>{respuest.enfermedad}</p>
            </div>

            {/* DIAGNOSTICO PRE-OPERATORIO */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>DIAGNOSTICO PRE-OPERATORIO</p>
              <p className=''>{respuest.diagnostico}</p>
            </div>

            {/* PLAN */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>PLAN</p>
              <p className=''>{respuest.plan}</p>
            </div>

            {/* PENDIENTE */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>PENDIENTE</p>
              <p className=''>{respuest.pendiente}</p>
            </div>

            {/* TIPO DE ABORDAJE */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>TIPO DE ABORDAJE</p>
              <p className=''>{respuest.abordaje}</p>
            </div>

            {/* DONDE FUE EVALUADO */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>DONDE FUE EVALUADO</p>
              <p className=''>{respuest.evaluado}</p>
            </div>

            {/* FECHA DE POSIBLE CIRUGIA */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>FECHA DE POSIBLE CIRUGIA</p>
              <p className=''>{respuest.fechaCirugia}</p>
            </div>

            {/* LUGAR DE OPERACION */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>LUGAR DE OPERACION</p>
              <p className=''>{respuest.operacion}</p>
            </div>

            {/* FECHA DE OPERACION */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>FECHA DE OPERACION</p>
              <p className=''>{respuest.fechaOperacion}</p>
            </div>

            {/* PROCEDENCIA DE PROTESIS */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>PROCEDENCIA DE PROTESIS</p>
              <p className=''>{respuest.protesis}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>

  )
}
