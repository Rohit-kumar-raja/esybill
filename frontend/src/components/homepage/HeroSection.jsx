import React from "react"
import background from "../../assets/homepage/test.svg"
import bgimg from "../../assets/homepage/bgimg.svg"
import scanner from "../../assets/homepage/scanner.svg"
import Sticky from "react-sticky-el";
import { Link, useNavigate } from "react-router-dom";
import { BiRupee } from "react-icons/bi";

const HeroSection = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col"> 
        <div className="hidden md:flex md:row-span-3 "> 

          <div className='flex flex-col  items-start gap-1 px-20 justify-center'>
            <button className='
    bg-rgba font-normal text-[12px] text-white rounded-xl px-4 py-1 my-4 font-poppins'>Your bill is on us!!</button>
            <p className='text-[#333333] font-bold  text-[25px] font-raleway'>Hotel and Restaurant  </p>
            <p className='text-[#333333] font-bold  text-[25px] font-raleway'>Management Software</p> 
            <p className='text-[#920592] font-bold  text-[25px]'>EzyBill India</p> 
            <p className='text-[#333333] font-light text-[15px] mt-3 font-poppins'>Empowering Hospitality Excellence, Embrace the Finest</p>
            <p className='text-[#333333] font-light text-[15px] font-poppins'>Hotel Management Software & Restaurant POS in India.</p>
            <div className='flex gap-3 py-3 my-3' >
              <button className='
    bg-rgba font-normal text-[15px] text-white rounded-md px-8 py-2'>
                <Link to="/about">Learn More</Link></button>
              <button className='
    border-2 border-[#7E007E]  font-normal text-[15px] text-[#7E007E] rounded-md px-8 py-2' 
              onClick={() => {
                props.setScrollProp(true)
                navigate("/contact-us") 
              }}
              >
                Get a Free Demo</button>
            </div>
          </div>


        </div>
        <div className=" row-span-3  col-span-2">
          <img src={background} className='object-cover h-full md:h-[70vh] w-screen' alt='bg-img'/>
 
          {/* <div className='flex  gap-2 flex-col '> */}
          <div className='absolute left-[-8%] md:left-4  md:flex md:flex-col md:absolute md:right-0  
     md:items-end top-[15%] md:top-[25%]'>
            <button className='rotate-90 md:-rotate-90 absolute   md:right-[-1.7rem] font-raleway
    bg-rgba font-normal text-[15px] text-white rounded-t-2xl px-8 py-2 max-w-max'>
              <Link to="/login">Login</Link> 
            </button>

            {/* <button className='rotate-90 md:-rotate-90  mt-[7rem]  mr-[-2.4rem] left-4 
    border-2 border-[#7E007E] max-w-max bg-white font-normal text-[15px] text-[#7E007E]
     rounded-t-2xl px-8 py-2'>Register</button> */}

            <button className='rotate-90 font-raleway md:-rotate-90 mt-[7rem] ml-[-0.4rem] md:ml-[0rem] md:mr-[-2.4rem] 
    border-2 border-[#7E007E] max-w-max bg-white font-normal text-[15px] text-[#7E007E]
     rounded-t-2xl px-8 py-2'>
              <Link to="/signup">Register</Link> 
            </button>

          </div>
        </div>
 
      </div>
      <div className="row-span-3 md:hidden">

        <div className='flex flex-col items-center md:items-start gap-1 px-5 md:px-20 '>
          <button className='
    bg-rgba font-normal text-[12px] text-white rounded-xl px-4 py-1 my-4 font-poppins'>Your bill is on us!!</button>
          <p className='text-[#333333] font-semibold  text-[25px] font-raleway'>Hotel and Restaurant </p>
          <p className='text-[#333333] font-semibold  text-[25px] font-raleway'>Management Software</p> 
          <p className='text-[#920592] font-medium  text-[25px] font-raleway'>EzyBill India</p> 
          <p className='text-[#333333] font-extralight text-[15px] mt-3 font-poppins'>Empowering Hospitality Excellence, Embrace the Finest</p>
          <p className='text-[#333333] font-extralight text-[15px] font-poppins'>Hotel Management Software & Restaurant POS in India.</p>
          <div className='flex gap-3 py-3 my-3' >
            <button className='
    bg-rgba font-normal text-[15px] text-white rounded-md px-8 py-2 font-raleway'>
              <Link to="/about"> Learn More</Link></button>
            <button className='
    border-2 border-[#7E007E]  font-normal text-[15px] text-[#7E007E] rounded-md px-8 py-2 
    font-raleway'  onClick={() => {
              props.setScrollProp(true)
              navigate("/contact-us") 
            }}>
          Get a Free Demo</button>
          </div>
        </div>
 
      </div>
      <Sticky className="z-[99] relative top-0">
        <div className="grid grid-cols-1 md:grid-cols-3 z-[99] relative 
          py-6 md:py-3 font-raleway bg-no-repeat bg-cover " 
        style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
          <div className='col-span-1 md:col-span-2'>
            <div className='col-span-1 md:flex md:items-center md:justify-center md:col-span-2'>
              <img src={scanner} alt="" className='w-24 h-24 
             md:w-24 md:h-24 mx-auto md:mx-5 py-4 
            back ' /> 
              <div className="flex flex-col text-[#333333] px-4 md:px-0">
                <p className='text-[14px] flex flex-wrap justify-start 
                 '>Scan this QR to access a sample <span className='text-[#7E007E] font-bold mx-2'> Cloud Menu </span>& Upgrade your paper menu to <span className='text-[#7E007E] font-bold mx-2'>Cloud Menu </span> for your Restaurant, Hotel or Café. </p>
                <p className='text-xs text-[#7E007E] flex flex-col md:flex-row 
                justify-start 
                  flex-wrap font-bold px-0'>
                  Launching Offer- FREE for 3 months. After that only <BiRupee/> 69/-  per month !</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center py-3 md:py-0'>
            <button className='bg-rgba font-medium text-[15px] text-white rounded-lg px-8 py-2'>
              <Link to="/cm">Try free Cloud Menu for 3 Months</Link> </button>
          </div>
        </div>
      </Sticky>
     

    </>
  )
}

export default HeroSection