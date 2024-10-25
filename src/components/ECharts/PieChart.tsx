import React from 'react';
import ReactECharts from 'echarts-for-react';

const PieChart = () => {
  const option = {
    legend: {
      bottom: '0%',  // Move the legend to the bottom of the container
      left: 'center',
      icon: 'circle',
      orient: 'horizontal',  // Keep the legends in a row
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)', // Show name, value, and percentage
    },
    series: [
      {
        type: 'pie',
        radius: ['60%', '50%'],  // Adjust the radius to fit the container
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: true,
          position: 'outside', // Show labels outside the pie slices
        },
        emphasis: {
          itemStyle: {
            borderWidth: 3,
            borderColor: '#fff',
          },
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: true, // Show label lines for better visibility
        },
        data:[ // Use passed data or default data if none provided
          { value: 40, name: 'Comments', itemStyle: { color: '#F98A6D' } },
          { value: 30, name: 'Share', itemStyle: { color: '#654CE6' } },
        ],
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactECharts
        style={{ width: '100%', height: '100%' }} // Ensure it takes full width and height
        option={option}
      />
    </div>
  );
};

export default PieChart;
