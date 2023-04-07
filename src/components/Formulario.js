import React from 'react'
import LoadingTwo from '../components/LoadingTwo'
import FileBase from 'react-file-base64';

export default function Formulario({ isLoadingTwo, guardar, handlechange, handleFileChangeRayosX, handleFileChangeExamen, handleClick, checked, pacient }) {

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
                    <p>ANTECEDENTES</p><br />
                    <input onChange={handlechange} onClick={handleClick} type="checkbox" name="diabetes" value="DIABETES" checked={pacient.antecedentes.diabetes} />
                    <label htmlFor="diabetes">DIABETES</label><br />
                    <input onChange={handlechange} type="checkbox" name="hipertencion" value="HIPERTENSION" checked={pacient.antecedentes.hipertencion} />
                    <label htmlFor="hipertencion"> HIPERTENSION</label><br />
                    <input onChange={handlechange} type="checkbox" name="artritis" value="ARTRITIS" checked={pacient.antecedentes.artritis} />
                    <label htmlFor="artritis"> ARTRITIS</label><br />

                    <input onChange={handlechange} type="checkbox" name="psoriasis" value="PSORIASIS" checked={pacient.antecedentes.psoriasis} />
                    <label htmlFor="PSORIASIS">PSORIASIS</label><br />

                    <input onChange={handlechange} type="checkbox" name="lupus" value="LUPUS" checked={pacient.antecedentes.lupus} />
                    <label htmlFor="LUPUS">LUPUS</label><br />

                    <input onChange={handlechange} type="checkbox" name="anemiaDrepanocitica" value="ANEMIA DREPANOCITICA" checked={pacient.antecedentes.anemiaDrepanocitica} />
                    <label htmlFor="ANEMIA DREPANOCITICA">ANEMIA DREPANOCITICA</label><br />

                    <input onChange={handlechange} type="checkbox" name="perther" value="PERTHER" checked={pacient.antecedentes.perther} />
                    <label htmlFor="PERTHER">PERTHER</label><br /><br />

                    {/* ENFERMEDAD ACTUAL */}
                    <p>ENFERMEDAD ACTUAL</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    {/* DIAGNOSTICO PRE-OPERATORIO */}
                    <p>DIAGNOSTICO PRE-OPERATORIO</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='diagnostico' defaultValue={pacient.diagnostico}></textarea>
                    {/* DIAGNOSTICO POST-OPERATORIO */}
                    <p>DIAGNOSTICO POST-OPERATORIO</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='diagnosticoPost' defaultValue={pacient.diagnosticoPost}></textarea>
                    {/* FUERZA MUSCULAR */}
                    <p>FUERZA MUSCULAR</p>
                    <table className='w-full my-7 table'>
                        <thead>
                            <tr>
                                <th>CASO</th>
                                <th>1-5</th>
                                <th>2-5</th>
                                <th>3-5</th>
                                <th>4-5</th>
                                <th>5-5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* PRE OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>PRE-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="1-5" checked={pacient.preOperatorioRadio === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="2-5" checked={pacient.preOperatorioRadio === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="3-5" checked={pacient.preOperatorioRadio === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="4-5" checked={pacient.preOperatorioRadio === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="5-5" checked={pacient.preOperatorioRadio === "5-5"} /></td>
                            </tr>
                            {/* POST OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="1-5" checked={pacient.postOperatorioRadio === '1-5'} /></td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="2-5" checked={pacient.postOperatorioRadio === '2-5'} /></td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="3-5" checked={pacient.postOperatorioRadio === '3-5'} /></td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="4-5" checked={pacient.postOperatorioRadio === '4-5'} /></td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="5-5" checked={pacient.postOperatorioRadio === '5-5'} /></td>
                            </tr>
                            {/* 15 DIAS POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>15 DIAS POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="1-5" checked={pacient.quinceDias === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="2-5" checked={pacient.quinceDias === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="3-5" checked={pacient.quinceDias === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="4-5" checked={pacient.quinceDias === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="5-5" checked={pacient.quinceDias === "5-5"} /></td>
                            </tr>
                            {/* 1 MES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>1 MES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="1-5" checked={pacient.UnMes === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="2-5" checked={pacient.UnMes === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="3-5" checked={pacient.UnMes === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="4-5" checked={pacient.UnMes === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="5-5" checked={pacient.UnMes === "5-5"} /></td>
                            </tr>
                            {/* 2 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>2 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="1-5" checked={pacient.DosMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="2-5" checked={pacient.DosMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="3-5" checked={pacient.DosMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="4-5" checked={pacient.DosMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="5-5" checked={pacient.DosMeses === "5-5"} /></td>
                            </tr>
                            {/* 3 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>3 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="1-5" checked={pacient.TresMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="2-5" checked={pacient.TresMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="3-5" checked={pacient.TresMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="4-5" checked={pacient.TresMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="5-5" checked={pacient.TresMeses === "5-5"} /></td>

                            </tr>
                            {/* 4 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>4 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="1-5" checked={pacient.CuatroMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="2-5" checked={pacient.CuatroMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="3-5" checked={pacient.CuatroMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="4-5" checked={pacient.CuatroMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="5-5" checked={pacient.CuatroMeses === "5-5"} /></td>

                            </tr>
                            {/* 5 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>5 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="1-5" checked={pacient.CincoMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="2-5" checked={pacient.CincoMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="3-5" checked={pacient.CincoMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="4-5" checked={pacient.CincoMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="5-5" checked={pacient.CincoMeses === "5-5"} /></td>

                            </tr>
                            {/* 6 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>6 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="1-5" checked={pacient.SeisMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="2-5" checked={pacient.SeisMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="3-5" checked={pacient.SeisMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="4-5" checked={pacient.SeisMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="5-5" checked={pacient.SeisMeses === "5-5"} /></td>

                            </tr>
                        </tbody>
                    </table>

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
                    {/* RAYOS X */}
                    <p>SUBIR IMAGEN RAYOS X</p>
                    <div className='my-7'>
                        <FileBase type='file' multiple={false} onDone={handleFileChangeRayosX} />
                    </div>
                     {/* EXAMEN */}
                     <p>SUBIT EXAMEN</p>
                    <div className='my-7'>
                        <FileBase type='file' multiple={false} onDone={handleFileChangeExamen} />
                    </div>
                    <div className='flex items-center'>
                        <button className='bg-green-700 py-3 px-5 mr-5 rounded-lg text-slate-50'>Guardar</button>
                        {isLoadingTwo ? <LoadingTwo /> : null}
                    </div>
                </div>
            </form>
        </>
    )
}
