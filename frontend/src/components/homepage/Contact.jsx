import React, { useState } from "react"
import contact1 from "../../assets/homepage/contact1.svg" 
import contact2 from "../../assets/homepage/contact2.svg"
import Select from "react-select";
import {AiFillInfoCircle} from "react-icons/ai"
const Contact = () => {
 
  const hmsclickHandler = () => {
    setIsShownHms(prevState => !prevState)
  }
  const rmsclickHandler = () => {
    setIsShownRms(prevState => !prevState)
  }
  const cmclickHandler = () => {
    setIsShownCm(prevState => !prevState)
  }
  const data = [
    {
      value: 1,
      text: "Hotel Management Software (HMS)",
      icon: <AiFillInfoCircle onClick={hmsclickHandler}/>
    },
    {
      value: 2,
      text: "Restaurant Management Software (RMS)",
      icon: <AiFillInfoCircle onClick={rmsclickHandler}/>
    },
    {
      value: 3,
      text: "Cloud Menu(CM)",
      icon: <AiFillInfoCircle onClick={cmclickHandler} />
    }
  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
  const [isShownhms, setIsShownHms] = useState(false);
  const [isShownrms, setIsShownRms] = useState(false); 
  const [isShowncm, setIsShownCm] = useState(false);
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
  return ( 
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 md:p-20" style={{ backgroundImage: `url(${contact2})` }} >
        <div>
          <img src={contact1} alt="" />
        </div>
        <div>
          <form className="w-full max-w-lg bg-white relative rounded-xl p-5 font-raleway">
            <p className='text-[#7E007E] font-semibold text-center text-[23px] py-5'>Schedule a Call with Us</p>
            <div className="flex flex-wrap items-center justify-center -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-[#565656] text-xs text-left font-bold mb-2" htmlFor="grid-first-name">
    Name
                </label>
                <input className="appearance-none block w-full 
                bg-white-200 text-gray-700 border-2 border-[#A9A9A9] 
                rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                focus:border-2 focus:border-[#800080] focus:bg-white" 
                id="grid-first-name" type="text" 
                />
    
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-[#565656] text-xs text-left font-bold mb-2" htmlFor="grid-first-name">
    Contact No
                </label>
                <input className="appearance-none block w-full 
                bg-white-200 text-gray-700 border-2 border-[#A9A9A9] 
                rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                focus:border-2 focus:border-[#800080] focus:bg-white" 
                id="grid-first-name" type="text" 
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 items-center justify-center">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-[#565656] text-xs text-left font-bold mb-2" htmlFor="grid-first-name">
        Email
                </label>
                <input className="appearance-none block w-full 
                bg-white-200 text-gray-700 border-2 border-[#A9A9A9] 
                rounded py-3 px-4  leading-tight focus:outline-none 
                focus:border-2 focus:border-[#800080] focus:bg-white" 
                id="grid-first-name" type="email" 
                /> 
    
              </div>
             
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-[#565656] text-xs text-left font-bold mb-2" htmlFor="grid-first-name">
    Subject
                </label>
                <Select
                  className="bg-gray-50  block text-xs border-2 border-[#A9A9A9] 
                 rounded-md focus:outline-none 
                focus:shadow-lg focus:shadow-[#800080]-500/50 
                focus:border-2 focus:border-[#800080]
                  w-full" 
                  placeholder=""
                  value={selectedOption}
                  options={data}
                  onChange={handleChange}
                  getOptionLabel={e => (
                    <>
                      <div className="flex justify-between">
                      
                        <span >{e.text}</span>
                        <span  role="presentation" >{e.icon}</span>
                      </div>
                     
                    </>
                  )}
                />
              </div>
              {/* <label className="block uppercase tracking-wide text-[#565656] text-xs text-left font-bold mb-2" htmlFor="grid-first-name">
    Subject
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border-2 border-[#A9A9A9] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-2 focus:border-[#800080] focus:bg-white" id="grid-first-name" type="text" 
                /> */}
                
              {isShownhms && (
                <div className="absolute right-0 md:-right-20  text-[8px] bg-[#FFE1FF] text-[#7E007E]  
                border-2 border-[#7E007E] p-1 rounded-md w-full md:w-20 top-[60%] md:top-[50%]">
          Efficiently manage hotel operations, reservations,
           guest check-in/out, and optimize revenue while 
           delivering exceptional guest experiences.
                </div>
              )}
              {isShownrms && (
                <div className="absolute right-0 md:-right-20  text-[8px] bg-[#FFE1FF] text-[#7E007E]  
                border-2 border-[#7E007E] p-1 rounded-md w-full md:w-20 top-[60%] md:top-[50%]">
           Streamline restaurant operations, manage orders, reservations, inventory, and billing for an enhanced dining experience.
                </div>
              )}
              {isShowncm && (
                <div className="absolute right-0 md:-right-20  text-[8px] bg-[#FFE1FF] text-[#7E007E]  
                 border-2 border-[#7E007E] p-1 rounded-md w-full md:w-20 top-[60%] md:top-[50%]">
Transform traditional menus into digital, interactive menus accessible from smartphones, enabling convenient browsing, ordering, and real-time updates for customers.
                </div>
              )}
 
                

          
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-[#565656] text-xs text-left font-bold mb-2" htmlFor="grid-first-name">
        Choose Date
                </label>
                <input className="appearance-none block w-full 
                bg-white-200 text-gray-700 border-2 border-[#A9A9A9] 
                rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                focus:border-2 focus:border-[#800080] focus:bg-white" 
                id="grid-first-name" type="text" 
                /> 
    
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-[#565656] text-xs text-left font-bold mb-2" htmlFor="grid-first-name">
    Choose Time
                </label>
                <input className="appearance-none block w-full
                bg-white-200 text-gray-700 border-2 border-[#A9A9A9] 
                rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                focus:border-2 focus:border-[#800080] focus:bg-white" 
                id="grid-first-name" type="text" 
                /> 
              </div>
            </div>
            <button className='bg-[#800080] font-poppins font-medium text-[15px] text-white rounded-md px-20 py-2'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact