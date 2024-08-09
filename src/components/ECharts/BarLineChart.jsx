import React from 'react';
import ReactECharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

const BarLineChart = ({ barData, lineData }) => {
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
const App = () => {
    const barData = [120, 200, 150, 80, 70, 110, 130];
    const lineData = [10, 15, 8, 12, 10, 18];

    return (
        <div>
            <h1>Bar and Line Chart Example</h1>
            <BarLineChart barData={barData} lineData={lineData} />
        </div>
    );
};

export default App;