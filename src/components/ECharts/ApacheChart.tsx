import React from 'react';
import ReactECharts from 'echarts-for-react';

const ApacheChart: React.FC = () => {
  const option = {
    legend: {
      bottom: '0', // Move the legend closer to the bottom
      left: 'center', // Center the legend horizontally
      itemWidth: 15, // Adjust the size of the legend symbols
      itemHeight: 10, // Adjust the height of the legend symbols
      textStyle: {
        fontSize: 9, // Adjust the font size of the legend text
      },
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: 'Apache Chart',
        type: 'pie',
        radius: ['20%', '60%'],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 9,
        },
        label: {
          fontSize: 9,
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
        ],
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '300px', margin: '0 auto' }}> {/* Set a fixed height */}
      <ReactECharts option={option} style={{ width: '100%', height: '100%' }} /> {/* Ensure chart fits the div */}
    </div>
  );
};

export default ApacheChart;
