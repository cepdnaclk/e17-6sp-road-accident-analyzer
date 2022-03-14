import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart () {
  const data = {
    labels: ['Thursday', 'Wednesday', 'Friday', 'Tuesday', 'Monday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label : 'Number of cases',
        data: [258036, 255775, 254127, 250900, 235831, 137620, 123775],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(12, 238, 127, 0.8)',
          'rgba(197, 12, 238, 0.8)'
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(12, 238, 127, 0.8)',
          'rgba(197, 12, 238, 0.8)'
        ]
      },
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Accident cases for different days of a week',
      fontSize : 25
    },
  }


  return <Bar data={data} options={options} />
}

export default BarChart
