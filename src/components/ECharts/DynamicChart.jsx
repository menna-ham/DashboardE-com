import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const DynamicChart = () => {
  const [categories, setCategories] = useState([]);
  const [categories2, setCategories2] = useState([]);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [count, setCount] = useState(11);
  const chartRef = useRef(null);

  useEffect(() => {
    const initializeData = () => {
      let now = new Date();
      let cat = [];
      let cat2 = [];
      let d = [];
      let d2 = [];
      let len = 10;

      while (len--) {
        cat.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(+now - 2000);
      }

      len = 10;
      while (len--) {
        cat2.push(10 - len - 1);
      }

      len = 10;
      while (len--) {
        d.push(Math.round(Math.random() * 1000));
        d2.push(+(Math.random() * 10 + 5).toFixed(1));
      }

      setCategories(cat);
      setCategories2(cat2);
      setData(d);
      setData2(d2);
    };

    initializeData();

    const intervalId = setInterval(() => {
      const axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
      setData((prevData) => [...prevData.slice(1), Math.round(Math.random() * 1000)]);
      setData2((prevData2) => [...prevData2.slice(1), +(Math.random() * 10 + 5).toFixed(1)]);
      setCategories((prevCategories) => [...prevCategories.slice(1), axisData]);
      setCategories2((prevCategories2) => [...prevCategories2.slice(1), count]);
      setCount(count + 1);
    }, 2100);

    return () => clearInterval(intervalId);
  }, [count]);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const option = {
    title: {
      text: 'Dynamic Data',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56',
        },
      },
    },
    legend: {},
    dataZoom: {
      show: false,
      start: 0,
      end: 100,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: categories,
      },
      {
        type: 'category',
        boundaryGap: true,
        data: categories2,
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Price',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2],
      },
      {
        type: 'value',
        scale: true,
        name: 'Order',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2],
      },
    ],
    series: [
      {
        name: 'Dynamic Bar',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data,
        itemStyle:{
            color:'#5b6ae5',
            barBorderRadius: 8,
            shadowColor: '#5470c6',
            shadowBlur: 3
        }
      },
      {
        name: 'Dynamic Line',
        type: 'line',
        data: data2,
        smooth:true,
        lineStyle: {
            normal: {
                color:'#F89273',
                width: 2,
            }
          },
        itemStyle:{
            color:'#F89273',
            shadowColor: '#5470c6',
        }
      },
    ],
  };

  return     <div
  style={{
    width: '100%',
    height: '100%',
    maxWidth: '1200px', // Maximum width for large screens
    margin: '0 auto', // Center the chart horizontally
  }}
>
  <ReactECharts
    ref={chartRef}
    option={option}
    style={{
      height: '400px', // Default height
      width: '100%',
    }}
    notMerge={true}
    lazyUpdate={true}
  />
</div>;
};

export default DynamicChart;
