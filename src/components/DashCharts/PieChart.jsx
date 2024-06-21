// import React from 'react'
// import {Chart as ChartJS, CategoryScale, Legend, LineElement, LinearScale, PointElement, Title, Tooltip, ArcElement } from 'chart.js';
// import { Doughnut, Pie } from 'react-chartjs-2'

// ChartJS.register(
//     Tooltip,
//     Legend,
//     ArcElement
//   );

// const PieChart = ({data,chartTitle}) => {
//     //     const options = {
//     //     responsive: true,
        
//     //     plugins: {
//     //       legend: {
//     //         position: 'top' ,
//     //       },
//     //       title: {
//     //         display: true,
//     //         text: chartTitle,
//     //       },
//     //     },
//     //   };

//   return (
//     <Doughnut className='bg-white' width={'5rem'} data={data}/>
//   )
// }

// export default PieChart

import React from 'react'
import ReactECharts from 'echarts-for-react'; 

function PieChart() {
    let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 50,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 25,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 38, name: 'Direct' },
              { value: 22, name: 'Paid' },
              { value: 12, name: 'organic' },
              { value: 28, name: 'Social' }
            ]
          }
        ]
      };

  return (
    <ReactECharts className='bg-white' option={option}/>
  )
}

export default PieChart

