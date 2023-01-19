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

  return (
    <>
      <Layout>
        <div>
          <div className='w-8/12 mx-auto mb-10 mt-20'>
            <h1 className='w-28 p-2 text-xl flex-inline border border-slate-200 rounded'>DETALLES</h1>
          </div>
          {/* NOMBRE */}
          <div className='w-8/12 mx-auto border rounded border-slate-400'>
            <div className='p-5 border-b border-slate-400'>
              <h3 className=' text-4xl'>{respuest.nombre}</h3>
            </div>
            {/* PATOLOGIA */}
            <div className='p-5 border-b border-slate-400'>
              <p className='text-xl font-semibold mb-4'>Patologia</p>
              <p className=''>{respuest.patologia}</p>
            </div>

           
          </div>

        </div>
      </Layout>
    </>

  )
}
