import React, { useRef } from "react"
import aboutimg from "../assets/aboutus/aboutimg.svg"
import aboutbg from "../assets/aboutus/aboutbg.svg"
import abtimg from "../assets/aboutus/abtimg.svg"
import Navbar from "../components/homepage/Navbar.jsx"
import aboutimage from "../assets/aboutus/aboutimage.svg"
import Footer from "../components/homepage/Footer.jsx"
import { Link } from "react-router-dom"

const AboutUs = () => {
  const divRef = useRef(null);
  return (
    <>
      <Navbar/>
      <div className="grid grid-rows-3 grid-flow-col p-2 md:p-4" 
        style={{ backgroundImage: `url(${abtimg})`,
          backgroundRepeat:"no-repeat", 
          backgroundSize:"cover"
        }}
      > 
        <div className="hidden md:flex md:row-span-3 ">
          <div className='flex flex-col  items-start gap-1 px-20 justify-center'>
            <p className='text-[#920592] font-bold  text-[25px] uppercase'>ABOUT US</p> 
            <p className='text-[#333333] font-light text-[15px] mt-3 font-poppins leading-8'>
            We are committed to providing <br/>
            a user-friendly design concept <br/>
            and modern business <br/> approach at
              <span className="text-[#7E007EE5] font-semibold px-2">EzyBill India</span> 
            </p>
            <div className='flex gap-3 py-3 md:py-6 my-3' >
              <button className='
    bg-rgba font-normal text-[15px] text-white rounded-md px-8 py-2' 
              onClick={()=>{
                divRef.current.scrollTo({ top: 0, behavior: "smooth" }) 
                console.log("clicked")
              }} >Learn More</button>
              <button className='
    border-2 border-[#7E007E]  font-normal text-[15px] text-[#7E007E] rounded-md px-8 py-2'>
                <Link to='/contact-us'>Get a Demo</Link> 
              </button>
            </div>
          </div>
        </div>
        <div className=" row-span-3  col-span-2">
          <img src={aboutimg} className='object-cover h-full w-screen my-4' alt='bg-img'/>
        </div>
      </div>

      <div className="row-span-3 md:hidden">
        <div className='flex flex-col  items-center gap-1 px-5 md:px-20 justify-center'>
          <p className='text-[#920592] font-bold  text-[25px] uppercase'>ABOUT US</p> 
          <p className='text-[#333333] font-light text-[15px] mt-3 font-poppins leading-8'>
            We are committed to providing <br/>
            a user-friendly design concept <br/>
            and modern business <br/> approach at
            <span className="text-[#7E007EE5] font-semibold px-2">EzyBill India</span> 
          </p> 
          <div className='flex gap-3 py-3 my-3' >
            <button className='
    bg-rgba font-normal text-[15px] text-white rounded-sm px-8 py-2 font-raleway' 
            onClick={()=>divRef.current.scrollTo({ top: 0, behavior: "smooth" })}>Learn More</button>
            <button className='
    border-2 border-[#7E007E]  font-normal text-[15px] text-[#7E007E] rounded-sm px-8 py-2 font-raleway'>
              <Link to='/contact-us'>Get a Free Demo</Link></button>
          </div>
        </div>
      </div>


      <div className="flex flex-col py-10 md:py-20 my-4 font-raleway items-center justify-center"
        ref={divRef}
        style={{ backgroundImage: `url(${aboutbg})`, backgroundRepeat : "no-repeat", backgroundSize :"cover" }}>
        <h3 className="uppercase text-[#7E007E] font-poppins font-bold text-2xl">How IT ALL STARTED</h3>
        <p className="font-raleway text-xs py-4 px-8 md:px-40 leading-6">EzyBill India, a full stack software was founded by Mr Lahiri and Dr Aich. Both are longtime friends who believed that by creating a product that would lower the cost of doing business in the nation, they might contribute to the development of digital India. EzyBill India was the idea they came up with after considerable deliberation and market research. They didnt realise how challenging it would be to turn their concept into reality when they started their firm, but thats what made it so thrilling! Since they wanted to give their valued customers the greatest service possible, they never compromised on quality.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 my-2 md:my-8 md:px-20 gap-4 items-center justify-center">
        <img src={aboutimage} alt="" />
        <p className="text-[#333333] text-sm font-raleway my-4 md:my-0 leading-8 md:leading-10">EzyBill India{"'"}s user-friendly design concept and cutting-edge business strategy are its best features. We recognise how crucial it is to give everyone access to technology. Our software is not only simple to use, but we also offer the most unique features available in the hotel and restaurant management software domain. You wont ever have to sacrifice quality or customer service while working with us since were committed to giving you the finest possible experience!</p>
      </div>
      <Footer/>
    </>
  )
}

export default AboutUs