import React from "react"
import bg from "../../assets/homepage/bg-testimonials.svg"
import TestimonialCard from "./TestimonialCard.jsx"
const Testimonials = () => {
  return (
    <>
      <div className="py-5 md:my-6" style={{ backgroundImage: `url(${bg})` }}   >
        <p className='text-[#FFFFFF] text-[25px] font-semibold text-center'>Lets see what our customers say</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='p-8'>
            <TestimonialCard title="Mr Don Dey" subtitle="Café & Pub owner" content="I highly recommend EzyBill India's restaurant management software with a customized cloud menu. It has significantly improved our productivity, allowing us to streamline operations and create unique menu items effortlessly. The efficient management tools have been a game-changer for our café. 
"/>
          </div>
          <div className='p-8'>
            <TestimonialCard title="Mr Kush Chaudhury" subtitle="Hotel Owner" content="As a hotel owner, I am thrilled with EzyBill India's hotel management software. The day-start-pause feature is excellent, allowing me to efficiently manage operations. It's a game-changer for our hotel at a very reasonable price! Highly recommended.
"/>
          </div>
          <div className='p-8'>
            <TestimonialCard title="Mr Biswajit Bhattacharjee" subtitle="Hotel Owner" content="I highly recommend EzyBill India's hotel management software for its exceptional inventory management capabilities. It has helped streamline our operations, ensuring efficient management of our hotel's inventory. The software has been a great help for us, enhancing productivity and ensuring smooth day-to-day operations."/>
          </div>
        </div>
 
      </div>
    </>
  )
}

export default Testimonials