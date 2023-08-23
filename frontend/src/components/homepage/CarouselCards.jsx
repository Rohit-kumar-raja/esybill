import React from "react"

const CarouselCards = ({title,content, img}) => {
  return (
    <>
      <div className="flex flex-col gap-3 bg-white rounded-xl px-4 text-left h-96
    text-[#333333] hover:bg-[#7E007E] hover:text-white border-2 border-[#7E007E]
     my-3 hover:cursor-pointer py-8">
        <img src={img} alt="" className='w-10 h-10'/>
        <p className='font-medium text-[18px] font-poppins'>{title}</p>
        <p className='text-[15px] font-raleway '>{content}</p>
        <p className='font-semibold font-raleway'> Learn More</p>
      </div>
    </>
  )
}

export default CarouselCards 