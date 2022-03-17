import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart2() {
    const data = {
        labels: ['Fair', 'Mostly Cloudy', 'Clear',
            'Cloudy', 'Partly Cloudy', 'Overcast',
            'Light Rain', 'Scattered Clouds', 'Light Snow',
            'Fog'],
        datasets: [
            {
                label: 'Number of cases',
                data: [465252, 193595, 180223, 161291, 133102, 87853, 72511, 47061, 22113, 19777],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(12, 238, 127, 0.8)',
                    'rgba(197, 12, 238, 0.8)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(12, 238, 127, 0.8)',
                    'rgba(197, 12, 238, 0.8)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(153, 102, 255, 1)',
                ]
            },
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Top Weather Conditions for accidents',
            fontSize: 25
        },
    }


    return <Bar data={data} options={options} />
}

export default BarChart2
