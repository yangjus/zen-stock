import {useState} from 'react';
import { Stack, Button } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    lightteal: createColor('#14b8a6'),
  },
});

const data = {
    invest: [
        {
            label: "AAPL",
            price: 200,
            dollarChange: 20,
            percentChange: 10,
            zenScore: 0.95
        },
        {
            label: "META",
            price: 180,
            dollarChange: 12,
            percentChange: 6,
            zenScore: 0.75
        },
        {
            label: "MFST",
            price: 178,
            dollarChange: -2,
            percentChange: -5,
            zenScore: -0.45
        },
        {
            label: "GOOG",
            price: 215,
            dollarChange: 15,
            percentChange: 8,
            zenScore: 0.9
        },
        {
            label: "NFLX",
            price: 190,
            dollarChange: 8,
            percentChange: 5,
            zenScore: 0.8
        }
    ], 
    notInvest: [
        {
            label: "META",
            price: 180,
            dollarChange: 12,
            percentChange: 6,
            zenScore: 0.75
        },
        {
            label: "AAPL",
            price: 200,
            dollarChange: 20,
            percentChange: 10,
            zenScore: 0.95
        },
        {
            label: "GOOG",
            price: 215,
            dollarChange: 15,
            percentChange: 8,
            zenScore: 0.9
        },
        {
            label: "NFLX",
            price: 190,
            dollarChange: 8,
            percentChange: 5,
            zenScore: 0.8
        },
        {
            label: "MFST",
            price: 178,
            dollarChange: -2,
            percentChange: -5,
            zenScore: -0.45
        }
    ]
}
 
export default function Recommendations(){
 
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1 className="text-2xl pb-4"><strong>Recommended Stock Picks</strong></h1>
            <Stack direction="row" gap={4}>
              {data["invest"].map((rec)=>(
                  <div className="recommendation p-10 flex-col justify-center align-center">
                      <h2 className="text-xl"><strong>{rec.label}</strong></h2>
                      <p><b>Price:</b><br></br> {rec.price}</p>
                      <p><b>Day Change:</b><br></br> 
                          <span style={{color: rec.dollarChange > 0 ? "MediumSeaGreen" : "Red"}}>
                          {rec.dollarChange > 0 ? <span>+</span> : <span>-</span>}
                          {rec.dollarChange} / {rec.dollarChange > 0 ? <span>+</span> : <span>-</span>}{rec.percentChange}%</span>
                      </p>
                      <p><b>Zen Score:</b> {rec.zenScore}</p>
                      <p className="text-sm">{`(Based on news sentiment score)`}</p>
                  </div>
              ))}
            </Stack>
            <div className="flex m-6 align-center justify-center">
              <Button variant="contained" color="lightteal" sx={{color: 'white'}}>Invest in All</Button>
              </div>
        </div>
        </ThemeProvider>
    )
}