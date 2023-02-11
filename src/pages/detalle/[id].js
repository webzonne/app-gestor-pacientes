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
  

            {/* EDAD */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>EDAD</p>
              <p className=''>{respuest.edad}</p>
            </div>

            {/* SEXO */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>SEXO</p>
              <p className=''>{respuest.sexo}</p>
            </div>

             {/* SEXO */}
             <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>CASO CLINICO</p>
              <p className=''>{respuest.caso}</p>
            </div>
        
            {/* PATOLOGIA */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>PATOLOGIA</p>
              <p className=''>{respuest.patologia}</p>
            </div>


          </div>

        </div>
      </Layout>
    </>

  )
}
