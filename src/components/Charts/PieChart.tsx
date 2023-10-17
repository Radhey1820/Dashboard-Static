import React from 'react';
import ReactEcharts from 'echarts-for-react';

export function PieChart() {
  const options = {
    title: {
      text: '65%',
      text2: 'Total new customers',
      left: 'center',
      top: 'center',
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
          },
          {
            value: 234,
          },
          {
            value: 1548,
          },
        ],
        radius: ['40%', '70%'],
      },
    ],
  };

  return <ReactEcharts option={options} />;
}
