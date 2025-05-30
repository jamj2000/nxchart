'use client'

import { Chart } from 'chart.js/auto'
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// Chart.register(ArcElement, Tooltip, Legend);

import { Doughnut } from 'react-chartjs-2';

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Gráfico de donut',
        },
    },
};

const data = {
    labels: ['Partido Rojo', 'Partido Azul', 'Partido Amarillo', 'Partido Verde', 'Partido Morado', 'Partido Naranja'],
    datasets: [
        {
            label: '# VOTOS',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function grafico() {
    return (
        <div className='w-full aspect-square p-4 rounded-lg shadow-lg border border-slate-200'>
            <Doughnut options={options} data={data} />
        </div >
    )
}
