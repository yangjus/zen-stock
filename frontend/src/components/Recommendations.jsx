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
    function changeContent() {
        const selector = document.getElementById('recSelector');
        const selectedValue = selector.value;
        console.log(selectedValue)

        const contentDivs = document.querySelectorAll('.recommendations');
        contentDivs.forEach(div => {
            div.style.display = 'none';
        });

        const selectedContentDiv = document.getElementById(selectedValue);
        if (selectedContentDiv) {
            selectedContentDiv.style.display = 'block';
        }
    }
    return (
        <div>
            <select id="recSelector" onchange={changeContent()}>
                <option value="Invest" style={{color:'MediumSeaGreen'}}>Positive Invest</option>
                <option value="NotInvest" style={{color:'Red'}}>Negative Invest</option>
            </select>
            <div id="Invest" className="recommendations">
                {data["invest"].map((rec)=>(
                    <div className="recommendation">
                        <p>{rec.label}</p>
                        <p>Price: {rec.price}</p>
                        <p>Day Change: 
                            {rec.dollarChange > 0 ? <span>+</span> : <span>-</span>}{rec.dollarChange} / 
                            {rec.dollarChange > 0 ? <span>+</span> : <span>-</span>}{rec.percentChange}
                        </p>
                        <p>Zen Score: {rec.zenScore}</p>
                    </div>
                ))}
            </div>
            <div id="NotInvest" className="recommendations">
                {data["notInvest"].map((rec)=>(
                    <div className="recommendation">
                        <p>{rec.label}</p>
                        <p>Price: {rec.price}</p>
                        <p>Day Change: 
                            {rec.dollarChange > 0 ? <span>+</span> : <span>-</span>}{rec.dollarChange} / 
                            {rec.dollarChange > 0 ? <span>+</span> : <span>-</span>}{rec.percentChange}
                        </p>
                        <p>Zen Score: {rec.zenScore}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}