import React from 'react'
import LoadingTwo from '../components/LoadingTwo'

export default function Formulario({ isLoadingTwo, guardar, handlechange, pacient }) {
    
    return (
        <>
            <form onSubmit={guardar}>
                <div className='border w-8/12 mx-auto p-5 border-slate-400  flex-inline'>
                    {/* NOMBRE */}
                    <p>NOMBRE DEL PACIENTE</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='nombre' defaultValue={pacient.nombre} />
                    {/* GENERO */}
                    <p>GENERO</p>
                    {/* <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='sexo' defaultValue={pacient.sexo} /> */}
                    <select defaultValue={pacient.sexo} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="sexo" >
                        <option value="">Seleccione un sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                    {/* EDAD */}
                    <p>EDAD</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='number' name='edad' defaultValue={pacient.edad} />
                    {/* CEDULA */}
                    <p>CEDULA</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='cedula' defaultValue={pacient.cedula} />
                    {/* TELEFONO */}
                    <p>TELEFONO</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='telefono' defaultValue={pacient.telefono} />
                    {/* FECHA DE NACIMIENTO */}
                    <p>FECHA NACIMIENTO</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='date' name='fechaNacimiento' defaultValue={pacient.fechaNacimiento} />
                     {/* OCUPACION */}
                     <p>OCUPACION</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='ocupacion' defaultValue={pacient.ocupacion} />
                    {/* DIRECCION */}
                    <p>DIRECCION</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='direccion' defaultValue={pacient.direccion} />
                    {/* VIVIENDA */}
                    <p>VIVIENDA</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='vivienda' defaultValue={pacient.vivienda} />
                    {/* NIVEL */}
                    <p>NIVEL</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='nivel' defaultValue={pacient.nivel} />
                    {/* RUTA DE ACCESO */}
                    <p>RUTA DE ACCESO</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='ruta' defaultValue={pacient.ruta} />
                    {/* ANTECEDENTES */}
                    <p>ANTECEDENTES</p><br/>
                    <input onChange={handlechange} type="checkbox" name="diabetes" value="DIABETES" checked={pacient.diabetes}/>
                    <label htmlFor="diabetes">DIABETES</label><br/>
                    <input onChange={handlechange} type="checkbox" name="hipertencion" value="HIPERTENSION" checked={pacient.hipertencion}/>
                    <label htmlFor="hipertencion"> HIPERTENSION</label><br/>
                    <input onChange={handlechange} type="checkbox" name="artritis" value="ARTRITIS" checked={pacient.artritis}/>
                    <label htmlFor="artritis"> ARTRITIS</label><br/>
                    <input type="checkbox" name="PSORIASIS" value="PSORIASIS"/>
                    <label htmlFor="PSORIASIS">PSORIASIS</label><br/>
                    <input type="checkbox" name="LUPUS" value="LUPUS"/>
                    <label htmlFor="LUPUS">LUPUS</label><br/>
                    <input type="checkbox" name="ANEMIA DREPANOCITICA" value="ANEMIA DREPANOCITICA"/>
                    <label htmlFor="ANEMIA DREPANOCITICA">ANEMIA DREPANOCITICA</label><br/>
                    <input type="checkbox" name="PERTHER" value="PERTHER"/>
                    <label htmlFor="PERTHER">PERTHER</label><br/><br/>
                    {/* ENFERMEDAD ACTUAL */}
                    <p>ENFERMEDAD ACTUAL</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    {/* DIAGNOSTICO PRE-OPERATORIO */}
                    <p>DIAGNOSTICO PRE-OPERATORIO</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='diagnostico' defaultValue={pacient.diagnostico}></textarea>
                    {/* PLAN */}
                    <p>PLAN</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='plan' defaultValue={pacient.plan}></textarea>
                    {/* PENDIENTE */}
                    <p>PENDIENTE</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='pendiente' defaultValue={pacient.pendiente}></textarea>
                     {/* TIPO DE ABORDAJE */}
                     <p>TIPO DE ABORDAJE</p>
                    <select defaultValue={pacient.abordaje} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="abordaje" >
                        <option value="">Seleccione tipo de abordaje</option>
                        <option value="Anterior">Anterior</option>
                        <option value="Lateral">Lateral</option>
                        <option value="Posterior">Posterior</option>
                        <option value="otras">otras</option>
                    </select>
                     {/* DONDE FUE EVALUADO */}
                     <p>DONDE FUE EVALUADO</p>
                    <select defaultValue={pacient.evaluado} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="evaluado" >
                        <option value="">Seleccione el lugar</option>
                        <option value="IVSS Hospital Domingo Luciani">IVSS Hospital Domingo Luciani</option>
                        <option value="IVSS Dr Jose Maria Vargas">IVSS Dr Jose Maria Vargas</option>
                    </select>
                    {/* FECHA DE POSIBLE CIRUGIA */}
                    <p>FECHA DE POSIBLE CIRUGIA</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='date' name='fechaCirugia' defaultValue={pacient.fechaCirugia} />
                      {/* LUGAR DE OPERACION */}
                      <p>LUGAR DE OPERACION</p>
                    <select defaultValue={pacient.operacion} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="operacion" >
                        <option value="">Seleccione el lugar</option>
                        <option value="IVSS Hospital Domingo Luciani">IVSS Hospital Domingo Luciani</option>
                        <option value="IVSS Dr Jose Maria Vargas">IVSS Dr Jose Maria Vargas</option>
                    </select>
                    {/* FECHA DE OPERACION */}
                    <p>FECHA DE OPERACION</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='date' name='fechaOperacion' defaultValue={pacient.fechaOperacion} />
                      {/* PROCEDENCIA DE PROTESIS */}
                      <p>PROCEDENCIA DE PROTESIS</p>
                    <select defaultValue={pacient.protesis} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="protesis" >
                        <option value="">Seleccione Procedencia</option>
                        <option value="PROTESIS MEHECO">PROTESIS MEHECO</option>
                        <option value="PROTESIS CASA COMERCIAL">PROTESIS CASA COMERCIAL</option>
                    </select>
                    <div className='flex items-center'>
                        <button className='bg-green-700 py-3 px-5 mr-5 rounded-lg text-slate-50'>Guardar</button>
                        {isLoadingTwo ? <LoadingTwo/>:null}
                    </div>
                </div>
            </form>
        </>
    )
}
