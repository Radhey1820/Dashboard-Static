import React from 'react';
import ReactEcharts from 'echarts-for-react';
export function BarChart() {
  const options = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28, 25],
      },
    ],
  };
  return <ReactEcharts option={options} />;
}
