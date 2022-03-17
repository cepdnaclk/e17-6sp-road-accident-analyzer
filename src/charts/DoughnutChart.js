import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart () {
  const data = {
    labels: ['Left', 'Right'],
    datasets: [
      {
        label: 'Accident Occurence by Side of Road',
        data: [221502, 1294562],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Accident Occurence by Side of Road',
      fontSize: 25
    }
  }

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart
