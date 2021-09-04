import React from 'react'
import { Line } from 'react-chartjs-2'

const state1 = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Earning',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'blue',
      borderWidth: 3,
      data: [
        0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
        40000,
      ],
    },
  ],
}

function Charts() {
  return (
    <div>
      <Line
        data={state1}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
          legend: {
            display: false,
            position: 'right',
          },
        }}
      />
    </div>
  )
}

export default Charts
