import React from 'react'
import {Chart as ChartJS, CategoryScale, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const LineChart = ({data,chartTitle}) => {
    const options = {
        responsive: true,
        
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: chartTitle,
          },
        },
      };

  return (
    <Line  className='bg-white' options={options} data={data}/>
  )
}

export default LineChart
