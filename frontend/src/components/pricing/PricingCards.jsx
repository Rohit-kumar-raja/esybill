import React from "react"
import PricingCard from "./PricingCard.jsx"

const PricingCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 my-8 mx-6">
        <div className="border-2 rounded-md border-[#F6CFFC] py-4 px-4 md:px-24">
          <div className="flex flex-col items-center font-medium text-2xl font-poppins justify-center">
            <p>Standard </p>
            <p>(Stand-Alone Version)</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-[#7A7D9C] text-base py-4">Plans</p>
            <PricingCard content ="Up to" span="10 rooms – ₹699" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="20 rooms – ₹2499" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="30 rooms – ₹3499" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="40 rooms – ₹4999" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="50 rooms – ₹5999" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="65 rooms – ₹6499" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="80 rooms – ₹7999" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <button className='text-[#7E007E] border-2 border-[#7E007E] bg-white rounded-full
    hover:bg-rgba font-medium text-[15px] hover:text-white self-center px-8 py-2 font-raleway'>Get Started</button>
          </div>
        </div>
        <div className="border-2 rounded-md border-[#F6CFFC] py-4 px-4 md:px-24">
          <div className="flex flex-col items-center font-medium text-2xl font-poppins justify-center">
            <p>Premium</p>
            <p>(Online Version) </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-[#7A7D9C] text-base py-4">Plans</p>
            <PricingCard content ="Up to" span="10 rooms – ₹1899" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="20 rooms – ₹3499" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="30 rooms – ₹4999" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="40 rooms – ₹5999" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="50 rooms – ₹7999" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="65 rooms – ₹8999" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <PricingCard content ="Up to" span="80 rooms – ₹10999" subcontent="per month including GST + Cloud Menu Absolutely Free"/>
            <button className='text-[#7E007E] border-2 border-[#7E007E] bg-white rounded-full
    hover:bg-rgba font-medium text-[15px] hover:text-white self-center px-8 py-2 font-raleway'>Get Started</button>
          </div>
        </div>
      </div>

 
     
    </>
  )
}

export default PricingCards