import React from 'react';
import ReactECharts from 'echarts-for-react';

// Define the types for props if using TypeScript
interface LineChartProps {
  color: string; // Expecting a string for color (hex, rgba, etc.)
  bgColor: string; // Expecting a string for background color (hex, rgba, etc.)
}

const LineChart: React.FC<LineChartProps> = ({ color = '#FF0000', bgColor = '#FFFFFF' }) => {
  const eChartsOption = {
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: {},
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    series: [
      {
        data: [30, 45, 28, 40, 35, 50, 45, 55, 60, 55, 70],
        type: 'line',
        smooth: true,
        color: color,
        showSymbol: false,
        lineStyle: { width: 4 },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: color },
              { offset: 1, color: bgColor },
            ],
            global: false,
          },
        },
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <ReactECharts style={{ width: '100%', height: '100%' }} option={eChartsOption} />
    </div>
  );
};

export default LineChart;
