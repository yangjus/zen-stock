import '../index.css'

export default function About() {
  return (
    <main className="about flex min-h-screen flex-col">
        <div className="zen" style={{textAlign: 'center'}}>
            <h1><strong>ZenStocks</strong></h1>
            <p>Welcome to Zen Stocks, where the art of investing meets the science of serenity. We've redefined your approach to financial markets by seamlessly blending advanced artificial intelligence with stress-free investing.</p>
        </div>
        <div id="overview">
            <h1><strong>Overview</strong></h1>
            <p>Our mission is to simplify the investment process, allowing you to navigate the complexities of the stock market with ease. 
            At the heart of our platform is a cutting-edge Natural Language Processing (NLP) engine that aggregates daily news sources and extracts valuable insights using sentiment analysis. 
            Our platform synthesizes the latest market intelligence, giving you automated, real-time recommendations and a comprehensive view of the factors influencing your investments. 
            We understand navigating financial markets can be stressful, and that's why we've created a platform that fosters a sense of calm and confidence in your investment journey.</p>
            <p><br></br></p>
        </div>
        <div id="features">
            <h1><strong>Features</strong></h1>
            <ol>
                <li><strong>(1) Automated Decision-Making:</strong> Our NLP algorithms process vast amounts of data to make informed investment decisions on your behalf.</li>
                <li><strong>(2) User-Friendly Interface:</strong> Enjoy a seamless and intuitive platform designed to empower users of all experience levels.</li>
                <li><strong>(3) Personalized Insights:</strong> Receive tailored recommendations based on your financial goals, risk tolerance, and investment preferences.</li>
                <li><strong>(4) Real-time Updates:</strong> Stay informed with instant updates on market trends and breaking news impacting your portfolio.</li>
                <li><strong>(5) Risk Management:</strong> ZenStocks helps you manage risk by providing insights into potential market shifts and suggesting portfolio adjustments.</li>
                <p><br></br></p>
            </ol>
        </div>
        <div id="getting-started">
            <h1><strong>Getting Started</strong></h1>
            <div className="features">
                <div><strong>Sign Up</strong><br></br>Create an account on our website <a href="https://zenstocks.tech">here</a>.</div>
                <div><strong>Connect Your Portfolio</strong><br></br> Link your investment accounts to enable automated decision-making.</div>
                <div><strong>Enjoy Stress-Free Investing</strong><br></br> Sit back, relax, and let ZenStocks guide your investment journey.</div>
            </div>
            <p><br></br></p>
        </div>
        <div id="contributing">
            <h1><strong>Contributing</strong></h1>
            <p>We welcome contributions from the community. If you find a bug or have a feature request, please open an issue <a href="https://github.com/yangjus/zen-stock/issues">here</a>. Pull requests are also encouraged.</p>
            <p><br></br></p>
            <p><br></br></p>
        </div>
        <p style={{textAlign:'center', color: 'white', paddingTop: '1vh', paddingBottom: '2vh', backgroundColor: 'teal'}}><strong>ZenStocks</strong> - Investing Simplified | <a href="https://github.com/yangjus/zen-stock">GitHub</a></p>
    </main>
  )
}
