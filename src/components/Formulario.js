import React from 'react'

export default function Formulario({ guardar, handlechange, pacient }) {
    return (
        <>
            <form onSubmit={guardar}>
                <div className='border w-8/12 mx-auto p-5 border-slate-400  flex-inline'>
                    {/* NOMBRE */}
                    <p>NOMBRE DEL PACIENTE</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='nombre' defaultValue={pacient.nombre} />

                    {/* EDAD */}
                    <p>EDAD</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='number' name='edad' defaultValue={pacient.edad} />

                    {/* SEXO */}
                    <p>SEXO</p>
                    {/* <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='sexo' defaultValue={pacient.sexo} /> */}
                    <select defaultValue={pacient.sexo} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="sexo" >
                        <option value="">Seleccione un sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>

                    {/* CASO CLINICO */}
                    <p>CASO CLINICO</p>
                    <select defaultValue={pacient.caso} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="caso" >
                        <option value="">Seleccione un caso</option>
                        <option value="Desgaste Articular">Desgaste Articular</option>
                        <option value="Abordaje anterior de cadera">Abordaje anterior de cadera</option>
                        <option value="Gonartrosis">Gonartrosis</option>
                        <option value="Artroplastia total de cadera">Artroplastia total de cadera</option>
                        <option value="Necrosis Avascular">Necrosis Avascular</option>
                    </select>

                    {/* PATOLOGIA */}
                    <p>PATOLOGIA</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='6' type='text' name='patologia' defaultValue={pacient.patologia}></textarea>
                    <div>
                        <button className='bg-green-700 py-3 px-5 mr-5 rounded-lg text-slate-50'>Guardar</button>
                    </div>
                </div>
            </form>
        </>
    )
}
