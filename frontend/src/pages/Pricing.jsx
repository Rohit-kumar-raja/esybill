import React, { useEffect, useState } from "react"
import Navbar from "../components/homepage/Navbar.jsx"
import pricingbg from "../assets/pricing/pricingbg.svg"
import PricingBanners from "../components/pricing/PricingBanners.jsx"
import Footer from "../components/homepage/Footer.jsx"
import PricingCards from "../components/pricing/PricingCards.jsx"
import RmsCards from "../components/pricing/RmsCards.jsx"
const Pricing = () => {
  const [selectedValue,setSelectedValue] = useState([]); 
  function handleSelectChange(event) {
    setSelectedValue(event.target.value);
  }

  useEffect(()=>{
    console.log("selectedValue",selectedValue)
  },[selectedValue])
  return (
    <>
      <Navbar/>
      <div className="flex justify-center items-center flex-col gap-2 py-2 px-1"  style={{ backgroundImage: `url(${pricingbg})` }}>
        <p className="text-[#B0138D] text-md md:text-[20px] font-semibold">Bigger Offer </p>
        <p className="text-[#6C3C67] text-xs md:text-[16px] font-medium">Up to 10 rooms(Stand-Alone Version) – 699 including GST + Cloud Menu Absolutely Free</p>
        <p className="text-[#FF7474] text-md md:text-[15px] font-medium">10% OFF On Annual Billing </p>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <p className="text-[#7E007E] flex flex-col justify-center items-center gap-4
          text-xl md:text-[33px] font-semibold px-6 font-raleway">
          <span className="pt-4">Reasonable Pricing Plan For Cost</span>  
          <span> Effective Business</span>
        </p>
        <p className="text-[#1B152B] text-sm flex flex-col px-2 md:px-0 py-5 items-center justify-center">
          <span>Find the perfect plan for your needs with our straightforward pricing options. Discover competitive rates and unlock the</span>
          <span>exceptional value we offer for our top-notch services.</span>
        </p>
        <div className="flex justify-center items-center px-2 md:px-0">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium w-[250px] mr-5
            text-#170F49 ">Choose your service</label>
          <select id="countries" className="bg-gray-50 border 
           border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
          value={selectedValue} onChange={handleSelectChange}
          >
            <option  selected>Choose an option</option>
            <option value="HMS">HMS</option>
            <option value="RMS">RMS</option>
            <option value="CMS">CMS</option>
          
          </select>

        </div>
      </div>
      {
        selectedValue === "HMS" ? 
          <>
            <PricingBanners title="Hotel Management Software"/>
            <PricingCards/>
          </> : 
          selectedValue === "RMS" ? 
            <>
              <PricingBanners title="Resturant Management Software"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4  px-4 md:px-20 my-8 mx-6">
                <RmsCards title="Standard" subtitle="(Stand-Alone Version)" amount="₹599"/>
                <RmsCards title="Premium" subtitle="(Online Version)" amount="₹899"/>
              </div>
            </> :
            selectedValue === "CMS" ? 
              <>
                <PricingBanners title="Cloud Menu"/>
                <div className="grid grid-cols-1  gap-4  md:px-80 my-8 mx-6">
                  <RmsCards title="Free" subtitle="for 3 months, and then" amount="₹69"/>
                </div>
              </>
              : null
      }
     


    
     
     
      <Footer/>
    </>
  )
}

export default Pricing