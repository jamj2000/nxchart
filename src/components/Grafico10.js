'use client'

import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}

const data = {
    labels: ['Partido Rojo', 'Partido  Azul', 'Partido Verde'],
    datasets: [{
        label: '# de VOTOS',
        data: [12, 19, 3],
        borderWidth: 1
    }]
}

export default function grafico() {
    return (
        <div className='w-full p-4 rounded-lg shadow-lg border border-slate-200'>
            <Bar options={options} data={data} />
        </div>
    )
}
