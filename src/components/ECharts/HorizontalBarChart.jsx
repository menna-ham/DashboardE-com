import React from 'react'
import ReactECharts from 'echarts-for-react';

const HorizontalBarChart = () => {
    let option = {
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            // [68.1, 79146, 'Tea'],
            // [19.6, 91852, 'Orange Juice'],
            // [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
          ]
        },
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            // color: ['#65B581', '#FFCE34', '#FD665F']
            color: ['#F89273', '#E1D9D8', '#544EAB']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            },
            itemStyle:{
                color:'#5b6ae5',
                barBorderRadius: 7,
                shadowColor: 'transparent',
                shadowBlur: 3
            }
          }
        ]
      };
  return (
    <div>
       <ReactECharts
               style={{ height: '400px', width: '100%' }}
                option={option} />
    </div>
  )
}

export default HorizontalBarChart
