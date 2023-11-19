import ProfileChart from "./../components/ProfileChart.jsx"
import { Tooltip, Stack, Chip } from "@mui/material"
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
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

export default function Portfolio() {
    return (
        <main className="flex flex-col min-h-screen" style={{marginLeft: '8vw', marginRight: '8vw'}}>
        
        <div className="portfolio" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '4vw', marginTop: '5vh', marginBottom: '5vh'}}>
            <ProfileChart/>
            <div className="flex-col">
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                padding: 2
                }}>
                <h2 className="insights"><strong>Insights</strong></h2>
                <div id="Total Asset Value">
                    <p><strong>Total Asset Value: </strong>$4,769.43 <span style={{color:'MediumSeaGreen'}}>(+$1,486.21/+46.2%)</span><br></br></p>
                    
                </div>
                <div id="Total Cash">
                    <p><strong>Total Cash: </strong>$540<br></br></p>
                </div>
                <div id="Day Change">
                    <p><strong>Day Change: </strong><span style={{color:'MediumSeaGreen'}}>+$54.32/+1.43%</span><br></br></p>
                </div>
            </div>
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                padding: 2,
                marginTop: 40
                }}>
                <h2 className="insights"><strong>Preferences</strong></h2>
                <ThemeProvider theme={theme}>
                  <Stack direction="column" spacing={1}>
                    <Chip label="Medium Risk" variant="outlined" color="lightteal"/>
                    <Chip label="Tech" variant="outlined" color="lightteal" icon={<ImportantDevicesIcon />}/>
                    <Chip label="ETF" variant="outlined" color="lightteal" icon={<AccountBalanceIcon />}/>
                  </Stack>
                </ThemeProvider>
            </div>
            </div>
        </div>
        <div className="mb-20">
        <h1 style={{fontSize:'2em'}}><strong>Account Summary</strong></h1>
            <table style={{borderWidth: '5px' }}>
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>
                      <Tooltip placement="top" title="Calculated with sentiment score from all news articles">
                        Zen Score
                      </Tooltip>
                    </th>
                    <th>Shares</th>
                    <th>Amount Change <span style={{fontSize:'0.7em'}}>(day change)</span></th>
                    <th>Total Holdings</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AAPL <span style={{fontSize:'0.9em'}}>(Apple Inc)</span></td>
                    <td>0.956</td>
                    <td>2</td>
                    <td style={{color:'MediumSeaGreen'}}><span>+$40</span>/<span style={{color:'MediumSeaGreen'}}>+</span>1.17% <span style={{fontSize:'0.7em'}}>(+$1.20/+0.01%%)</span></td>
                    <td>$380.00</td>
                </tr>
                <tr>
                    <td>GOOG <span style={{fontSize:'0.9em'}}>(Google LLC)</span></td>
                    <td>0.876</td>
                    <td>5</td>
                    <td><span style={{color:'MediumSeaGreen'}}>+$76/</span><span style={{color:'MediumSeaGreen'}}>+1.12%</span> <span style={{fontSize:'0.7em', color: 'red'}}>(-$1.76/-1.27%%)</span></td>
                    <td>$726.00</td>
                </tr>
                <tr>
                    <td>AMZN <span style={{fontSize:'0.9em'}}>(Amazon com)</span></td>
                    <td>0.567</td>
                    <td>5</td>
                    <td><span style={{color:'MediumSeaGreen'}}>+$45.2/</span><span style={{color:'MediumSeaGreen'}}>+1.12%</span> <span style={{fontSize:'0.7em', color: 'red'}}>(-$1.76/-1.27%%)</span></td>
                    <td>$1,245.64</td>
                </tr>
            </tbody>
        </table>
        </div>
        </main>
    )
}