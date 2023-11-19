import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import {getData, getTradeData} from './../routes/investing.jsx';

const stock_data = {
  dates: [
    "Oct 19", "Oct 20", "Oct 23", "Oct 24", "Oct 25",
    "Oct 26", "Oct 27", "Oct 30", "Oct 31", "Nov 1",
    "Nov 2", "Nov 3", "Nov 6", "Nov 7", "Nov 8",
    "Nov 9", "Nov 10", "Nov 13", "Nov 14", "Nov 15",
    "Nov 16", "Nov 17"
  ],
  prices: [
    175.46, 172.88, 173, 173.44, 171.1, 166.89, 168.22, 170.29, 170.77, 173.97,
    177.57, 176.65, 179.23, 181.82, 182.89, 182.41, 186.4, 184.8, 187.44, 188.01,
    189.71, 189.69
  ]
}

const formatPriceChangeText = (openPrice, closePrice) => {
  const priceChange = (closePrice - openPrice).toFixed(2);
  const percentageChange = (((closePrice - openPrice) / openPrice) * 100).toFixed(4);

  return `Open: $${openPrice} | Close: $${closePrice} | Change: $${priceChange} (${percentageChange}%)`;
};

const getTradeData2 = async () => {
    const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-10-19/2023-11-19?adjusted=true&sort=asc&limit=100&apiKey=IubNrVoa_fXYCrvs229uvhyP2DdIBBXD`;
    let transformedData = null
    try {
      const response = await fetch(url);
      const data = await response.json();
      // transform data to fit graph
      transformedData = {
        prices: data.results.map(item => item.c),
        dates: data.results.map(item => {
          const date = new Date(item.t);
          const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
          const formattedDate = date.toLocaleDateString('en-US', options);
          return formattedDate.split(', ')[1]; // Extracting day, month, and year
        })
      };
    } catch (error) {
      console.error(error);
    }
    return transformedData;
}

const StockChart = ({data, tradeData}) => {
  // Sample data for the area chart
  const [tickerInfo, setTickerInfo] = useState(data);
  const [tradeInfo, setTradeInfo] = useState(tradeData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData("AAPL");
        const response2 = await getTradeData2();
        setTickerInfo(response);
        setTradeInfo(response2);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    setTickerInfo(data);
    setTradeInfo(tradeData);
  }, [data, tradeData])
  
  // Usage
  const changeText = formatPriceChangeText(
    tickerInfo?.datarange[0]["open"],
    tickerInfo?.datarange[0]["price"]
  );

  const chartData = {
    series: [{
      name: tickerInfo?.ticker,
      data: tradeInfo?.prices || stock_data.prices
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
        text: `${tickerInfo?.ticker} (${tickerInfo?.name})`,
        align: 'left',
        style: {
          fontSize: 20,
        },
      },
      subtitle: {
        text: changeText,
        align: 'left',
        style: {
          fontSize: 15,
        },
      },
      labels: tradeInfo?.dates || stock_data.dates,
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