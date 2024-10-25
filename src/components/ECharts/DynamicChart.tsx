import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([BarChart, LineChart, TooltipComponent, LegendComponent, CanvasRenderer]);

interface BarLineChartProps {
    barData: number[];
    lineData: number[];
}

const BarLineChart: React.FC<BarLineChartProps> = ({ barData, lineData }) => {
    const eChartsOption = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Bar', 'Line'],
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: [
            {
                type: 'value',
                name: 'Bar',
            },
            {
                type: 'value',
                name: 'Line',
            },
        ],
        series: [
            {
                name: 'Bar',
                type: 'bar',
                data: barData,
            },
            {
                name: 'Line',
                type: 'line',
                yAxisIndex: 1,
                data: lineData,
            },
        ],
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ReactECharts option={eChartsOption} style={{ width: '100%', height: '100%' }} echarts={echarts} />
        </div>
    );
};

// Example usage of BarLineChart component
const App: React.FC = () => {
    const barData: number[] = [120, 200, 150, 80, 70, 110, 130];
    const lineData: number[] = [10, 15, 8, 12, 10, 18];

    return (
        <div>
            <h1>Bar and Line Chart Example</h1>
            <BarLineChart barData={barData} lineData={lineData} />
        </div>
    );
};

export default BarLineChart

