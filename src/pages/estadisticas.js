import React from 'react'
import Layout from '../components/Layout'
import conectarDB from '../lib/dbConnect';
import modelPaciente from '../models/modelo';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// SERVER
export async function getServerSideProps() {
    try {
        await conectarDB()

        const res = await modelPaciente.find({})
        const pacientes = res.map((element) => {
            const paciente = element.toObject()
            paciente._id = paciente._id.toString()

            return paciente
        })

        // retorna
        return { props: { pacientes } }
    } catch (err) {
        console.log(err)
        return { props: { pacientes: [] } }
    }
}
// CLOSE SERVER

export default function estadisticas({ pacientes }) {
    // DESGASTE ARTICULAR
    const caso1 = pacientes.filter((e) => e.caso === 'Desgaste Articular')
    const contadorCaso1 = caso1.length
    console.log('Desgaste Articular ' + contadorCaso1)

    // ABORDAJE ANTERIOR DE CADERA
    const caso2 = pacientes.filter((e) => e.caso === 'Abordaje anterior de cadera')
    const contadorCaso2 = caso2.length
    console.log('Abordaje anterior de cadera ' + contadorCaso2)

    // GONARTROSIS
    const caso3 = pacientes.filter((e) => e.caso === 'Gonartrosis')
    const contadorCaso3 = caso3.length
    console.log('Gonartrosis ' + contadorCaso3)

    // ARTROPLASTIA TOTAL DE CADERA
    const caso4 = pacientes.filter((e) => e.caso === 'Artroplastia total de cadera')
    const contadorCaso4 = caso4.length
    console.log('Artroplastia total de cadera ' + contadorCaso4)

    // NECROSIS AVASCULAR
    const caso5 = pacientes.filter((e) => e.caso === 'Necrosis Avascular')
    const contadorCaso5 = caso5.length
    console.log('Necrosis Avascular ' + contadorCaso5)

    // CHART JS
    // DATA
    const data = {
      labels: ['Desgaste Articular', 'Abordaje anterior de cadera', 'Gonartrosis', 'Artroplastia total de cadera', 'Necrosis Avascular'],
      datasets: [
          {
              label: 'Casos',
              data: [contadorCaso1, contadorCaso2, contadorCaso3, contadorCaso4, contadorCaso5],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }
      ]
  };
    
    const options = {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }   

    return (
        <div>
            <Layout>
                <h1 className='text-sm md:text-4xl  text-center py-2 mt-20 mb-10 m-auto w-12/12 md:w-2/12 border border-slate-100 rounded'>ESTADISTICAS</h1>
                <div className='py-12 w-10/12 mx-auto'>
                    {/* DESGASTE ARTICULAR */}
                    {/* <h3>Casos de Desgaste Articular:</h3>
                    <p>{contadorCaso1} pacientes de {pacientes.length}</p> */}

                    {/* ABORDAJE ANTERIOR DE CADERA  */}
                    {/* <h3>Casos de Abordaje anterior de cadera:</h3>
                    <p>{contadorCaso2} pacientes de {pacientes.length}</p> */}

                    {/* GONARTROSIS  */}
                    {/* <h3>Casos de Gonartrosis:</h3>
                    <p>{contadorCaso3} pacientes de {pacientes.length}</p> */}

                    {/* ARTROPLASTIA TOTAL DE CADERA  */}
                    {/* <h3>Casos de Artroplastia total de cadera:</h3>
                    <p>{contadorCaso4} pacientes de {pacientes.length}</p> */}

                    {/* NECROSIS AVASCULAR  */}
                    {/* <h3>Casos de Necrosis Avascular:</h3>
                    <p>{contadorCaso5} pacientes de {pacientes.length}</p> */}


                    {/* CHART JS  */}

                    <Bar options={options} data={data} />;
                </div>
            </Layout>
        </div>
    )
}