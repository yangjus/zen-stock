import React, { useState } from 'react';
import Chart from 'react-apexcharts'

const stock_data = {
  dates: [
    "Mon Nov 13 2017", "Tue Nov 14 2017", "Wed Nov 15 2017", "Thu Nov 16 2017", "Fri Nov 17 2017",
    "Mon Nov 20 2017", "Tue Nov 21 2017", "Wed Nov 22 2017", "Thu Nov 23 2017", "Fri Nov 24 2017",
    "Mon Nov 27 2017", "Tue Nov 28 2017", "Wed Nov 29 2017", "Thu Nov 30 2017", "Fri Dec 01 2017",
    "Mon Dec 04 2017", "Tue Dec 05 2017", "Wed Dec 06 2017", "Thu Dec 07 2017", "Fri Dec 08 2017"
  ],
  prices: [
    3536.85, 3556, 3551.9, 3594.5, 3769.7, 3852.7, 3852.5, 3943.3, 3910.85, 3916.7,
    3935.9, 4055.2, 4097.95, 4031.3, 4036.55, 3941.9, 3924.25, 4029.65, 4310.1, 4769.85
  ]
}

const StockChart = () => {
  // Sample data for the area chart

  const chartData = {
    series: [{
      name: "User's Stocks",
      data: stock_data.prices
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      colors: ['#14b8a6'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      
      title: {
        text: "User Portfolio",
        align: 'left',
        style: {
          fontSize: 30,
        },
      },
      subtitle: {
        text: "Investing",
        align: 'left',
        style: {
          fontSize: 20,
        },
      },
      labels: stock_data.dates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      }
    },
  };

  return (
    <Chart options={chartData.options} series={chartData.series} type="area" height={400} width={600}/>
  );
};

export default StockChart;