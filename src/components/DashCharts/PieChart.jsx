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

import React, { useRef, useState } from 'react'
import ReactECharts from 'echarts-for-react'; 
import { Box, Stack, Typography } from '@mui/material';

function PieChart() {
    const seriesData = [
        { value: 6840, name: 'Direct' },
        { value: 3960, name: 'Organic' },
        { value: 2160, name: 'Paid' },
        { value: 5040, name: 'Social' },
      ];

    const chartRef = useRef(null);
    let [visitorType,setVisitorType] = useState({type:'',name:''})
    
  const onChartLegendSelectChanged = (name) => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();
      instance.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      });
    }
  };

  const toggleClicked = (name) => {
    setVisitorType((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };


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
    <></>
    // <>d</>
    // <div className='bg-white '>

    //     <ReactECharts  option={option}/>

    //     {Array.isArray(seriesData) &&
    //         seriesData.map((dataItem, index) => (
    //           <button
    //             key={dataItem.name}
    //             variant="text"
    //             fullWidth
    //             onClick={() => {
    //               toggleClicked(dataItem.name );
    //               onChartLegendSelectChanged(dataItem.name );
    //             }}
    //             sx={{
    //               justifyContent: 'flex-start',
    //               p: 0,
    //               borderRadius: 1,
    //               opacity: visitorType[`${dataItem.name}`] ? 0.5 : 1,
    //             }}
    //             disableRipple
    //           >
    //             <Stack direction="row" alignItems="center" gap={1} width={1}>
    //               <Box
    //                 // sx={{
    //                 //   width: 10,
    //                 //   height: 10,
    //                 //   bgcolor: visitorType[`${dataItem.name}`]
    //                 //     ? 'action.disabled'
    //                 //     : pieChartColors[index],
    //                 //   borderRadius: 400,
    //                 // }}
    //               ></Box>
    //               <Typography variant="body1" color="text.secondary" flex={1} textAlign={'left'}>
    //                 {dataItem.name}
    //               </Typography>
    //               {/* <Typography variant="body1" color="text.primary">
    //                 {((parseInt(`${dataItem.value}`) / totalVisitors) * 100).toFixed(0)}%
    //               </Typography> */}
    //             </Stack>
    //           </button>
    //         ))}
    // </div>
  )
}

export default PieChart

