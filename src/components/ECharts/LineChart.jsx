import React from 'react'
import ReactECharts from 'echarts-for-react';


const LineChart = ({color,bgColor}) => {
    let eChartsOption = {
        backgroundColor: 'transparent', // Set background to transparent
        // backgroundColor: 'green', // Set background to transparent
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','oct','nov'],
          axisLine: {
            show: false // Hide x-axis line
          },
          axisTick: {
            show: false // Hide x-axis ticks
          },
          axisLabel: {
            show: false // Hide x-axis labels
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            // show: false // Hide y-axis line
          },
          axisTick: {
            show: false // Hide y-axis ticks
          },
          axisLabel: {
            show: false 
          },
          splitLine: {
            show: false 
          }
        },
        series: [
          {
            data: [30, 45, 28, 40, 35, 50, 45, 55, 60,55,70],
            type: 'line',
            smooth: true,
            color: color,
            showSymbol: false ,
            lineStyle: {
              width: 4, // Set the line width to 4 pixels
          },
            style:{ width: "100%", height: "100%" , },
            areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: color }, // Color at the top
                    { offset: 1, color: bgColor } // Color at the bottom
                  ],
                  global: false // False by default
                }
            }
          }
        ]
      };
    
    return (
            <div className='w-full h-full' >
                <ReactECharts 

                style={{width:'100%', height:'100%'}} 
                option={eChartsOption} />
            </div>
            
    )
}

export default LineChart
