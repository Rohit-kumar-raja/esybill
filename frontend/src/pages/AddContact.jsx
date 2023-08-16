import React, { useEffect, useState } from "react"
import HeroImage from "../assets/contact/hero.png"
import email from "../assets/contact/email.svg"
import phone from "../assets/contact/phone.svg"
import location from "../assets/contact/location.svg"
import Navbar from "../components/homepage/Navbar.jsx"
import Cards from "../components/contactpage/Cards.jsx"
import contactbg from "../assets/contact/contactbg.svg"
import Footer from "../components/homepage/Footer.jsx"

const AddContact = () => {

  const [contactRadio, setcontactRadio] = useState("Consultation")
  const handleChange = e => {
    
    setcontactRadio(e.target.value);
    
  }; 
  useEffect(()=>{
    console.log(contactRadio)
  },[contactRadio])
  return (
    <> 
      <Navbar/>
      <div className="grid grid-cols-1  md:grid-cols-2">
        <div><img src={HeroImage} alt="hero" width={500} className="md:ml-12" /></div>
       
        <div className="flex flex-col items-start justify-center gap-4 md:gap-12">
          <Cards img={location} title="LOCATE US" content="Eastland Microsystems, Malancha Road, P.O. Noapara , Barasat , Kolkata 700125, 
            West Bengal, India" />
          <Cards img={email} title="EMAIL US" content="support@ezybillindia.com" />
          <Cards img={phone} title="PHONE NUMBER" content="+91 9836041044" />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center p-10 md:p-5"
        style={{ backgroundImage: `url(${contactbg})` }}>
        <p className="text-[#800080] font-poppins text-2xl text-center font-bold">Feel free to Register a demonstration or consultation</p>
        <p className="text-[#333333] font-raleway font-medium md:px-6">Get in touch and let us know how we can help. Fill out the form and we{"'"}ll be in touch as soon as possible.</p>
        <div className="flex gap-4"  onChange={handleChange} >
          <div className="mb-[0.125rem] flex items-center justify-center gap-4 min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="
              relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-3 w-3
               appearance-none 
              rounded-full border-2 border-solid border-neutral-300
               before:pointer-events-none before:absolute before:h-4
                before:w-4 before:scale-0 before:rounded-full
                 before:bg-transparent before:opacity-0 
                 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                 after:absolute after:z-[1] after:block after:h-4 after:w-4 
                 after:rounded-full after:content-[''] checked:border-primary 
                 checked:before:opacity-[0.16] checked:after:absolute 
                 checked:after:left-1/2 checked:after:top-1/2 
                 checked:after:h-[0.625rem] checked:after:w-[0.625rem] 
                 checked:after:rounded-full checked:after:border-primary
                  checked:after:bg-primary checked:after:content-[''] 
                  checked:after:[transform:translate(-50%,-50%)] 
                  hover:cursor-pointer hover:before:opacity-[0.04] 
                  hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                  focus:shadow-none focus:outline-none
                   focus:ring-0 focus:before:scale-100
                    focus:before:opacity-[0.12]
                     focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                     focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                     checked:focus:border-[#800080] 
                     checked:focus:before:scale-100 
                     checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] 
                     checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
                      dark:border-[#800080] dark:checked:border-primary
                       dark:checked:after:border-primary dark:checked:after:bg-primary
                        dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] 
                        dark:checked:focus:border-primary 
                        dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              value="Demo Purpose"
              checked={contactRadio === "Demo Purpose"}
              name="demo"
              id="demopurpose" />
            <label
              className="mt-px inline-block pl-[0.15rem] text-[#7E007E] 
              text-sm font-poppins font-normal px-6  hover:cursor-pointer"
              htmlFor="demopurpose">
    Demo Purpose
            </label>
          </div>
          <div className="mb-[0.125rem] flex items-center justify-center gap-4 min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="
              relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-3 w-3
               appearance-none 
              rounded-full border-2 border-solid border-neutral-300
               before:pointer-events-none before:absolute before:h-4
                before:w-4 before:scale-0 before:rounded-full
                 before:bg-transparent before:opacity-0 
                 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                 after:absolute after:z-[1] after:block after:h-4 after:w-4 
                 after:rounded-full after:content-[''] checked:border-primary 
                 checked:before:opacity-[0.16] checked:after:absolute 
                 checked:after:left-1/2 checked:after:top-1/2 
                 checked:after:h-[0.625rem] checked:after:w-[0.625rem] 
                 checked:after:rounded-full checked:after:border-primary
                  checked:after:bg-primary checked:after:content-[''] 
                  checked:after:[transform:translate(-50%,-50%)] 
                  hover:cursor-pointer hover:before:opacity-[0.04] 
                  hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                  focus:shadow-none focus:outline-none
                   focus:ring-0 focus:before:scale-100
                    focus:before:opacity-[0.12]
                     focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                     focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                     checked:focus:border-[#800080] 
                     checked:focus:before:scale-100 
                     checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] 
                     checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
                      dark:border-[#800080] dark:checked:border-primary
                       dark:checked:after:border-primary dark:checked:after:bg-primary
                        dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] 
                        dark:checked:focus:border-primary 
                        dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="demo"
              value="Consultation"
              defaultChecked 
              //checked={contactRadio === "Consultation"}
             
              id="consultation" />
            <label
              className="mt-px inline-block pl-[0.15rem] text-[#7E007E]  
              text-sm font-poppins font-normal px-6  hover:cursor-pointer"
              htmlFor="consultation">
    Consultation
            </label>
          </div>
        </div>
        <form className="w-full bg-transparent rounded-xl p-5 font-raleway flex flex-col">
    
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
             
              <input placeholder="Name" 
                className="appearance-none block placeholder-[#7E007E] w-full bg-white-200 
               text-[#7E007E] border-2 border-[#A9A9A9] rounded-md py-3 px-4 mb-3 font-poppins
               leading-tight focus:outline-none focus:border-2 focus:border-[#800080]
                focus:bg-white" id="grid-first-name" type="text" 
              />
    
            </div>
            <div className="w-full md:w-1/2 px-3">
             
              <input placeholder="Email" className="appearance-none block w-full 
              font-poppins placeholder-[#7E007E]
               bg-white-200 text-[#7E007E] border-2 
               border-[#A9A9A9] rounded-md py-3 px-4 mb-3 
               leading-tight focus:outline-none focus:border-2 
               focus:border-[#800080] focus:bg-white" id="grid-first-name" type="text" 
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
             
              <input placeholder="Phone" className="appearance-none block w-full
              placeholder-[#7E007E]
               bg-[#F7F0F7] text-[#7E007E] border-2 border-[#A9A9A9] rounded-md py-3 
               px-4 mb-3 leading-tight focus:outline-none font-poppins
               focus:border-2 focus:border-[#800080] focus:bg-white" 
              id="grid-first-name" type="text" 
              />
    
            </div>
            <div className="w-full md:w-1/2 px-3">
              {
                contactRadio === "Consultation" ? 
                  <>
                   
                   
                    <select
                
                      className="w-full p-2.5 text-[#7E007E] bg-white  font-medium
           font-poppins
           rounded-md shadow-sm outline-none appearance-none "
                    >
                      <option selected className="p-2">Choose an option</option>
                      <option className="border-y-2 border-[#A9A9A9] p-2">Pricing Inquiry</option>
                      <option className="border-y-2 border-[#A9A9A9]">System Requirements & Infrastructure</option>
                      <option className="border-y-2 border-[#A9A9A9]">Customized Tools & Reporting</option>
                      <option className="border-y-2 border-[#A9A9A9]">Other Inquiries</option>
                    </select>

                  </> : contactRadio === "Demo Purpose" ? 
                    <>
                      <select
                
                        className="w-full p-2.5 text-[#7E007E] bg-white border font-medium
                         font-poppins
                         rounded-md shadow-sm outline-none appearance-none "
                      >
                        <option selected className="p-2">Choose an option</option>
                        <option>Hotel Management Software (HMS) Demo</option>
                        <option>Restaurant Management Software (RMS) Demo</option>
                        <option>Cloud Menu (CM)</option>
                        <option>Combined Demo</option>
                      </select>
                    </> : null
              }
             
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
             
              <input placeholder="State" className="appearance-none block w-full 
              bg-white-200 text-[#7E007E] border-2 border-[#A9A9A9] placeholder-[#7E007E]
               rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none font-poppins
               focus:border-2 focus:border-[#800080] focus:bg-white" 
              id="grid-first-name" type="text" 
              />
    
            </div>
          
          </div>
          <button className='bg-[#800080] font-poppins self-center
           font-medium text-[15px] text-white rounded-md px-20 py-2'>Submit</button>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default AddContact