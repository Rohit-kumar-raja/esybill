import React, { useEffect, useState } from "react"
import HeroImage from "../assets/contact/hero.png"
import email from "../assets/contact/email.svg"
import phone from "../assets/contact/phone.svg"
import location from "../assets/contact/location.svg"
import Navbar from "../components/homepage/Navbar.jsx"
import Cards from "../components/contactpage/Cards.jsx"
import contactbg from "../assets/contact/contactbg.svg"
import Footer from "../components/homepage/Footer.jsx"
import {AiFillInfoCircle} from "react-icons/ai"
import {MdOutlineClose} from "react-icons/md"
import Select from "react-select";
const AddContact = () => {
  const [value, setValue] = useState("")
  const clickHandler = (val) => {
    if(val === "hmsdemo"){
      setValue("hmsDemo")
    }
    else if(val === "rmsdemo"){
      setValue("rmsdemo")
    }
    else if(val === "cmdemo"){
      setValue("cmdemo")
    }
    else if(val === "comdemo"){
      setValue("comdemo")
    }
    else if(val === "conprice"){
      setValue("conprice")
    }
    else if(val === "consys"){
      setValue("consys")
    }
    else if(val === "conreport"){
      setValue("conreport")
    }
    else if(val === "coninquiry"){
      setValue("coninquiry")
    }
   
    else {
      setValue("")
    }
  }
  const data = [
    {
      value: 1,
      text: "Hotel Management Software (HMS) Demo",
      icon: <AiFillInfoCircle onClick={()=>clickHandler("hmsdemo")}/>
    },
    {
      value: 2,
      text: "Restaurant Management Software (RMS) Demo",
      icon: <AiFillInfoCircle onClick={()=>clickHandler("rmsdemo")}/>
    },
    {
      value: 3,
      text: "Cloud Menu (CM)",
      icon: <AiFillInfoCircle onClick={()=>clickHandler("cmdemo")} />
    },
    {
      value: 4,
      text: "Combined Demo",
      icon: <AiFillInfoCircle onClick={()=>clickHandler("comdemo")} />
    }
  ];


  const consultationData = [
    {
      value: 1,
      text: "Pricing Inquiry",
      icon: <AiFillInfoCircle onClick={()=>clickHandler("conprice")}/>
    },
    {
      value: 2,
      text: "System Requirements & Infrastructure",
      icon: <AiFillInfoCircle onClick={()=>clickHandler("consys")}/>
    },
    {
      value: 3,
      text: "Customized Tools & Reporting",
      icon: <AiFillInfoCircle onClick={()=>clickHandler("conreport")} />
    },
    {
      value: 4,
      text: "Other Inquiries",
      icon: <AiFillInfoCircle onClick={()=>clickHandler("coninquiry")} />
    }
  ];

  useEffect(()=>{
    console.log("value", value)
  },[value])
  const [contactRadio, setcontactRadio] = useState("Demo Purpose")
  const [selectedOption, setSelectedOption] = useState(null);
  const [conSelectedOption, setconSelectedOption] = useState(null);
  // const [isShownhms, setIsShownHms] = useState(false);
  // const [isShownrms, setIsShownRms] = useState(false); 
  // const [isShowncm, setIsShownCm] = useState(false);
  // handle onChange event of the dropdown
  const selectChange = e => {
    setSelectedOption(e);
  }
  const consultationSelectedOption = e => {
    setconSelectedOption(e)
  }
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
        style={{ backgroundImage: `url(${contactbg})`,backgroundRepeat : "no-repeat", backgroundSize :"cover" }}>
        <p className="text-[#800080] font-poppins text-2xl text-center font-bold">Feel free to Register a demonstration or consultation</p>
        <p className="text-[#333333] font-raleway font-medium md:px-6">Get in touch and let us know how we can help. Fill out the form and we{"'"}ll be in touch as soon as possible.</p>
        <div className="flex gap-4"  onChange={handleChange} >
          <div className="mb-[0.125rem] flex items-center justify-center gap-4 min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="
              "
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
              "
              type="radio"
              name="demo"
              value="Consultation"
              
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
        <form className="w-full bg-transparent relative
        rounded-xl py-5 px-4 md:px-[10rem] font-raleway flex flex-col">
    
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
            <div className="w-full md:w-1/2 px-3 ">
              {
                contactRadio === "Consultation" ? 
                  <>
                   
                   
                    <Select
                      className="bg-gray-50  block text-xs border-2 border-[#A9A9A9] 
                 rounded-md focus:outline-none 
                focus:shadow-lg focus:shadow-[#800080]-500/50 
                focus:border-2 focus:border-[#800080]
                  w-full" 
                      placeholder="Subject"
                      value={conSelectedOption}
                      options={consultationData}
                      onChange={consultationSelectedOption}
                      getOptionLabel={e => (
                        <>
                          <div className="flex justify-between">
                      
                            <span >{e.text}</span>
                            <span  role="presentation" >{e.icon}</span>
                          </div>
                     
                        </>
                      )}
                    />

                  </> : contactRadio === "Demo Purpose" ? 
                    <>
                      <Select
                        className="bg-gray-50  block text-xs border-2 border-[#A9A9A9] 
                 rounded-md focus:outline-none 
                focus:shadow-lg focus:shadow-[#800080]-500/50 
                focus:border-2 focus:border-[#800080]
                  w-full" 
                        placeholder=""
                        value={selectedOption}
                        options={data}
                        onChange={selectChange}
                        getOptionLabel={e => (
                          <>
                            <div className="flex justify-between">
                      
                              <span >{e.text}</span>
                              <span  role="presentation" >{e.icon}</span>
                            </div>
                     
                          </>
                        )}
                      />
                    </> : null
              }
             
            </div>
          
            
            {value === "hmsDemo" ? (
              <div className="absolute right-0  text-[8px] bg-[#FFE1FF] 
                text-[#7E007E] border-2 border-[#7E007E] p-1 rounded-md 
                w-full md:w-[10rem] ">
                <MdOutlineClose className="ml-auto" onClick={()=> setValue("")} />
                <span>A demonstration tailored to highlight the capabilities and features of our hotel management software, with or without the service terminal option.
                </span>
              </div>
            ) : value === "rmsdemo" ? (
              <div className="absolute right-0  text-[8px] bg-[#FFE1FF] 
                text-[#7E007E] border-2 border-[#7E007E] p-1 rounded-md 
                w-full md:w-[10rem] ">
                <MdOutlineClose className="ml-auto" onClick={()=> setValue("")} />
                <span>A demonstration specifically focused on showcasing the features and functionality of our restaurant management software.
                </span>
              </div>
            ) : value === "cmdemo" ? (
              <div className="absolute right-0  text-[8px] bg-[#FFE1FF] 
                text-[#7E007E] border-2 border-[#7E007E] p-1 rounded-md 
                w-full md:w-[10rem] ">
                <MdOutlineClose className="ml-auto" onClick={()=> setValue("")} />
                <span>A demonstration specifically focused on showcasing the features and functionality of our restaurant management software.
                </span>
              </div>
            ): value === "comdemo" ? (
              <div className="absolute right-0  text-[8px] bg-[#FFE1FF] 
                text-[#7E007E] border-2 border-[#7E007E] p-1 rounded-md 
                w-full md:w-[10rem] ">
                <MdOutlineClose className="ml-auto" onClick={()=> setValue("")} />
                <span>A comprehensive demonstration that covers both the Restaurant Software (RMS) and Hotel Software (HMS), including the option to include or exclude the service terminal functionality.
                </span>
              </div>
            ): value === "conprice" ? (
              <div className="absolute right-0  text-[8px] bg-[#FFE1FF] 
                text-[#7E007E] border-2 border-[#7E007E] p-1 rounded-md 
                w-full md:w-[10rem] ">
                <MdOutlineClose className="ml-auto" onClick={()=> setValue("")} />
                <span>If you have any questions or queries regarding our pricing structure, packages, or payment options.
                </span>
              </div>
            ) :
              value === "consys" ? (
                <div className="absolute right-0  text-[8px] bg-[#FFE1FF] 
                text-[#7E007E] border-2 border-[#7E007E] p-1 rounded-md 
                w-full md:w-[10rem] ">
                  <MdOutlineClose className="ml-auto" onClick={()=> setValue("")} />
                  <span>For inquiries related to the system requirements and infrastructure needed to run our software effectively.
                  </span>
                </div>
              ): 
                value === "conreport" ? (
                  <div className="absolute right-0  text-[8px] bg-[#FFE1FF] 
                text-[#7E007E] border-2 border-[#7E007E] p-1 rounded-md 
                w-full md:w-[10rem] ">
                    <MdOutlineClose className="ml-auto" onClick={()=> setValue("")} />
                    <span>If you require customized tools or specific reporting features tailored to your business needs.
                    </span>
                  </div>
                ):
                  value === "coninquiry" ? (
                    <div className="absolute right-0  text-[8px] bg-[#FFE1FF] 
                text-[#7E007E] border-2 border-[#7E007E] p-1 rounded-md 
                w-full md:w-[10rem] ">
                      <MdOutlineClose className="ml-auto" onClick={()=> setValue("")} />
                      <span>For any other inquiries or topics not covered in the above categories.
                      </span>
                    </div>
                  ): null}

 
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