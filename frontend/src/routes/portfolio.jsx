import ProfileChart from "./../components/ProfileChart.jsx"

export default function Portfolio() {
    return (
        <main className="flex flex-col min-h-screen" style={{marginLeft: '8vw', marginRight: '8vw'}}>
        
        <div className="portfolio" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '4vw', marginTop: '5vh', marginBottom: '5vh'}}>
            <ProfileChart/>
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                gap: '2vh', 
                fontSize:'1.2em', 
                boxShadow:'5px 5px 10px grey', 
                borderRadius: '10px', 
                textAlign: 'center', 
                height: '100%', 
                paddingTop: '2vh', 
                paddingBottom: '2vh',
                paddingLeft: '2vw',
                paddingRight: '2vw'
                }}>
                <h2 className="insights"><strong>Insights</strong></h2>
                <div id="Total Asset Value">
                    <p><strong>Total Asset Value: </strong>$5,000.00 <span style={{color:'MediumSeaGreen'}}>(+1,000.00/+25.00%)</span><br></br></p>
                    
                </div>
                <div id="Total Cash">
                    <p><strong>Total Cash: </strong>0<br></br></p>
                </div>
                <div id="Day Change">
                    <p><strong>Day Change: </strong><span style={{color:'MediumSeaGreen'}}>+25.00$/+$$.$$%</span><br></br></p>
                </div>
            </div>
        </div>
        <div id = "Account Summary" className="summary">
            <h1 style={{fontSize:'2em'}}><strong>Account Summary: </strong></h1>
            <table style={{borderWidth: '5px' }}>
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Zen Score</th>
                    <th>Number</th>
                    <th>Amount Change <span style={{fontSize:'0.7em'}}>(day change)</span></th>
                    <th>Total Holdings</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AAPL <span style={{fontSize:'0.9em'}}>(Apple Inc)</span></td>
                    <td>9.0</td>
                    <td>2</td>
                    <td style={{color:'MediumSeaGreen'}}><span>+</span>$40.00/<span style={{color:'MediumSeaGreen'}}>+</span>10.00% <span style={{fontSize:'0.7em'}}>(+$10.00/+2.50%)</span></td>
                    <td>$400.00</td>
                </tr>
                <tr>
                    <td>Data 6</td>
                    <td>Data 7</td>
                    <td>Data 8</td>
                    <td>Data 9</td>
                    <td>Data 10</td>
                </tr>
            </tbody>
        </table>
        </div>
        </main>
    )
}