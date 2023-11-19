import {useState, useEffect} from 'react';
import SelectTicker from './../components/SelectTicker.jsx'
import StockChart from './../components/StockChart.jsx'
import Recommendations from './../components/Recommendations.jsx'
import { Button, Typography } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { Stack } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    lightteal: createColor('#14b8a6'),
  },
});

export async function getData(ticker) {
  const url = `https://ftl.fasttrack.net/v1/data/${ticker}/range?olhv=1`;
  const options = {
    method: 'GET',
    headers: {
      appid: '4bc45cb0-0946-4cc0-b2d1-bc30efee1c84',
      token: '33AC781E-3D90-40B7-BF51-E1B7F3CD7AFA',
      Accept: 'application/json'
    }
  };
  let data = null
  try {
    const response = await fetch(url, options);
    data = await response.json();
    console.log(data)
  } catch (error) {
    console.error(error);
  }
  return data;
}

export async function getTradeData(ticker) {
  const urls = [
  `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-11-12/2023-11-19?adjusted=true&sort=asc&limit=100&apiKey=IubNrVoa_fXYCrvs229uvhyP2DdIBBXD`,
  `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-10-19/2023-11-19?adjusted=true&sort=asc&limit=100&apiKey=IubNrVoa_fXYCrvs229uvhyP2DdIBBXD`,
  `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-05-19/2023-11-19?adjusted=true&sort=asc&limit=100&apiKey=IubNrVoa_fXYCrvs229uvhyP2DdIBBXD`,
  ]
  const res = []
  try {
    for (let i = 0; i < urls.length; i++) {
      const response = await fetch(urls[i]);
      const data = await response.json();
      // transform data to fit graph
      const transformedData = {
        prices: data.results.map(item => item.c),
        dates: data.results.map(item => {
          const date = new Date(item.t);
          const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
          const formattedDate = date.toLocaleDateString('en-US', options);
          return formattedDate.split(', ')[1]; // Extracting day, month, and year
        })
      };
      res.push(transformedData)
    }
  } catch (error) {
    console.error(error);
  }

  return res;
}

export default function Investing() {
  const [ticker, setTicker] = useState('AAPL');
  const [tickerData, setTickerData] = useState(null);
  const [tradeData, setTradeData] = useState([]);
  const [timeframe, setTimeframe] = useState(1);

  const getTicker = async () => {
    console.log(ticker)
    try {
      const response = await getData(ticker);
      const response2 = await getTradeData(ticker, timeframe);
      setTickerData(response);
      setTradeData(response2);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    
  }, [timeframe])

  return (
    <main className="flex min-h-screen flex-col items-center py-6 px-10">
      <SelectTicker ticker={ticker} setTicker={setTicker} getTicker={getTicker}/>
      <div className="m-2">
        <div className="m-4">
        <ThemeProvider theme={theme}>
          <Stack direction="row" gap={1}>
            <Button color="lightteal" variant="contained" sx={{color: "white"}} onClick={() => setTimeframe(0)}>
              Week
            </Button>
            <Button color="lightteal" variant="contained" sx={{color: "white"}} onClick={() => setTimeframe(1)}>
              Month
            </Button>
            <Button color="lightteal" variant="contained" sx={{color: "white"}} onClick={() => setTimeframe(2)}>
              6 Months
            </Button>
          </Stack>
        </ThemeProvider>
        </div>
        <Stack direction="row" gap={4}>
          <StockChart data={tickerData} tradeData={tradeData[timeframe]}/>
          <Stack direction="column" gap={2}>
            <div>
            <h1 className="text-2xl"><strong>Stock News Insight</strong></h1>
            <h3 className="text-md">33 Article Mentions</h3>
            </div>
            <Typography>
              {`Apple is changing how messages look on iPhones by adopting a new standard called Rich Communication Services (RCS), 
              which might do away with the distinctive green and blue bubbles. Starting in 2024, 
              this move makes it easier for iPhones and Android phones to exchange messages. 
              It's a shift for Apple, known for its closed system. The change could be a response 
              to pressure, especially from Google, urging interoperability. Overall, it reflects Apple's move toward making iPhone 
              messages work better with other phones.`}
            </Typography>
          </Stack>
        </Stack>
      </div>
      <Recommendations />
    </main>
  )
}