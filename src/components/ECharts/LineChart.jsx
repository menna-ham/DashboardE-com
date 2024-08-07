import React from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import ReactECharts from 'echarts-for-react';
import { color } from 'echarts';


const LineChart = ({color,bgColor}) => {
    let eChartsOption = {
        backgroundColor: 'transparent', // Set background to transparent
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            show: false // Hide y-axis line
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
            data: [10, 15, 8, 12, 10, 18],
            type: 'line',
            smooth: true,
            color: color,
            showSymbol: false ,
            style:{ width: "100%", height: "100%" },
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
            <div className='w-full h-full  bg-pink-700'>
                <ReactECharts 

                style={{width:'100%', height:'100%'}} 
                option={eChartsOption} />
            </div>
            
    )
}

export default LineChart
