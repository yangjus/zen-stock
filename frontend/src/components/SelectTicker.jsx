import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
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

export default function SelectTicker({ticker, setTicker, getTicker}) {
  return (
    <div className="flex items-center justify-center">
      <Autocomplete
        disablePortal
        options={top30stocks}
        getOptionLabel={(option) => option.label} // Specify the label property
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search Ticker" />}
        value={top30stocks.find((option) => option.label === ticker) || null} // Find the selected option
        onChange={(e, newValue) => setTicker(newValue?.label || '')} // Update the selected value
      />
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="lightteal" sx={{marginLeft: 2, color: "white"}} onClick={getTicker}>
          Search
        </Button>
      </ThemeProvider>
    </div>
  );
}

const top30stocks = [
  { label: "SPAB" },
  { label: "SPBO" },
  { label: "SPDW" },
  { label: "SPEM" },
  { label: "SPEU" },
  { label: "SPGM" },
  { label: "SPHY" },
  { label: "SPIB" },
  { label: "SPIP" },
  { label: "SPLB" },
  { label: "SPLG" },
  { label: "SPMB" },
  { label: "SPMD" },
  { label: "SPSB" },
  { label: "SPSM" },
  { label: "SPTI" },
  { label: "SPTL" },
  { label: "SPTM" },
  { label: "SPTS" },
  { label: "SPYD" },
  { label: "SPYG" },
  { label: "SPYV" },
  { label: "AAPL" },
  { label: "MSFT" },
  { label: "GOOG" },
  { label: "AMZN" },
  { label: "TSLA" },
  { label: "BRKA" },
  { label: "BRKB" },
  { label: "META" },
  { label: "JNJ" },
  { label: "UNH" },
  { label: "TSM" },
  { label: "NVDA" },
  { label: "WMT" },
];
