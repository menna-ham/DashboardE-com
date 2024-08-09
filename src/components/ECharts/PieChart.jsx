import React from 'react'
import ReactECharts from 'echarts-for-react';


const PieChart = () => {
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '-2%',  // Move the legend to 20% above the bottom of the container
            left: 'center',
            icon: 'circle',
            type: 'scroll',
            orient: 'horizontal',  // Keep the legends in a row
        },
        grid: {
            top: '50%',    // Adjust the top padding to fit the chart
            bottom: '30%', // Adjust the bottom padding to accommodate the legend
        },
        series: [
            {
                type: 'pie',
                radius: ['60%', '50%'],  // Adjust the radius to fit the container
                // avoidLabelOverlap: false,
                padAngle: 7,
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 18,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 40, name: 'Comments', itemStyle: { color: '#F98A6D' } },
                    { value: 30, name: 'Share', itemStyle: { color: '#654CE6' } },
                ]
            }
        ]
    };
    



    return (
        <div className=''>
            <ReactECharts
                style={{ width: '100%'}}
                option={option} />
        </div>

    )
}

export default PieChart
