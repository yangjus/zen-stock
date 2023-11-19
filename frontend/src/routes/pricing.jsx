export default function Pricing() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 px-5 py-5">
      <div className="w-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold p-10">Pricing</h1>
          <h3 className="text-xl font-medium mb-10"><b>Invest in Your Financial Future:</b> Choose the best plan for your investment goals</h3>
        </div>
        <div className="max-w-4xl mx-auto md:flex">
          {/* Pricing Options */}
          {[
            { title: "PERSONAL", price: "$0/mo", features: ["‣ Access to most current market data", "‣ Personalized investment recommendations", "‣ Basic investment portfolio", "‣ Summarized reports of current financial news"] },
            { title: "TEAM", price: "$15/mo", features: ["← Everything included in Personal, plus...", "‣ Goal-based investing guidance", "‣ Basic portfolio optimization features", "‣ Access to curated educational resources"] },
            { title: "PRO", price: "$35/mo", features: ["← Everything included in Team, plus...", "‣ Social trading features to follow successful investors", "‣ Enhanced portfolio management", "‣ Dedicated financial advisor support"] },
          ].map((option, index) => (
            <div key={index} className={`w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:${index === 1 ? "-mx-3 md:mb-0" : "my-6"} rounded-md shadow-lg shadow-gray-600 md:${index === 1 ? "relative z-50" : "flex flex-col"}`}>
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-4">{option.title}</h2>
                <h3 className="text-center font-bold text-4xl mb-5">{option.price}</h3>
                <ul className="text-sm px-5 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
