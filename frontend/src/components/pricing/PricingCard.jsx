import React from "react"
import tick from "../../assets/pricing/tick.svg"
const PricingCard = ({content, span, subcontent}) => {
  return (
    <>
      <div className="flex gap-2">
        <img src={tick} alt="" className="w-6 h-6" />
        <div className="flex text-sm text-[#1B152B] flex-col items-center justify-center font-poppins">
          <p> {content}
            <span className="font-medium px-1">{span}</span> 
            {subcontent}</p>
        </div>
      </div>
    </>
  )
}

export default PricingCard