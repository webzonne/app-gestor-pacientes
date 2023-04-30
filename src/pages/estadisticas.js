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
    //console.log(pacientes)
    // Anterior
    const caso1 = pacientes.filter((e) => e.abordaje === 'Anterior')
    const contadorCaso1 = caso1.length
    //console.log('Anterior ' + contadorCaso1)

    // Lateral
    const caso2 = pacientes.filter((e) => e.abordaje === 'Lateral')
    const contadorCaso2 = caso2.length
    //console.log('Lateral ' + contadorCaso2)

    // Posterior
    const caso3 = pacientes.filter((e) => e.abordaje === 'Posterior')
    const contadorCaso3 = caso3.length
    //console.log('Posterior ' + contadorCaso3)

    // otras
    const caso4 = pacientes.filter((e) => e.abordaje === 'otras')
    const contadorCaso4 = caso4.length
    //console.log('otras ' + contadorCaso4)

    // CHART JS
    // DATA
    const data = {
      labels: ['ANTERIOR', 'LATERAL', 'POSTERIOR', 'OTRAS'],
      datasets: [
          {
              label: 'ABORDAJE',
              data: [contadorCaso1, contadorCaso2, contadorCaso3, contadorCaso4],
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
                    {/* CHART JS  */}
                    <Bar options={options} data={data} />;
                </div>
            </Layout>
        </div>
    )
}