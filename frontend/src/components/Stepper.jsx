import React, { useState } from 'react'
const Stepper = ({activateFirstProperty,activateFirstPropertyStepper,actFirstProp,setActivateSecondPropertyStepper,
   setActivateFirstProperty, setActivateThirdProperty, setActivateSecondProperty, activateSecondPropertyStepper}) => {
 const moveToRegistrationToggleHandler = () => {
  setActivateFirstProperty(false)
  setActivateSecondProperty(false)
  setActivateThirdProperty(false)
  setActivateSecondPropertyStepper(false)
 }
 const moveToPropertyOneToggleHandler = () => {
  setActivateFirstProperty(true)
  setActivateSecondProperty(false)
  setActivateSecondPropertyStepper(false)
 }
  return ( 
    <>
    <div className='flex justify-center md:justify-normal gap-0 md:gap-6'>
    <ol className="hidden md:flex md:flex-col md:justify-around ">                  
    <li className="  ">            
      <div className='flex h-auto gap-6 '>
      <span className="text-[#464646] leading-[22px] font-semibold text-[13px] w-[218px] text-center
      h-fit py-3 px-10 rounded-lg border border-[#800080]">
        Personal Details</span>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
      <span className="text-[#464646] leading-[22px] font-semibold text-[13px] w-[218px] text-center
      h-fit py-3 px-10 rounded-lg border border-[#800080]">
        Property One</span>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
      <span className="text-[#464646] leading-[22px] font-semibold text-[13px] w-[218px] text-center
      h-fit py-3 px-10 rounded-lg border border-[#800080]">
        Property Two</span>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
      <span className="text-[#464646] leading-[22px] font-semibold text-[13px] w-[218px] text-center
      h-fit py-3 px-10 rounded-lg border border-[#800080]">
        Property Three</span>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
      <span className="text-[#464646] leading-[22px] font-semibold text-[13px] w-[218px] text-center
      h-fit py-3 px-10 rounded-lg border border-[#800080]">
        Property Four</span>
      </div>
    </li>
</ol>

<ol className=" text-gray-500">                  
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center mt-12'>
        <span className="rounded-full bg-[#800080] py-[0.15rem] px-[0.30rem] text-white text-[11px] 
        cursor-pointer "
        onClick={moveToRegistrationToggleHandler} >01</span>
        <div className={`h-[70px] w-1 opacity-100 dark:opacity-50 
        ${activateFirstPropertyStepper? `bg-[#800080]`  : `bg-[#EFE8E8]`}
        `}></div>
        </div>
      </div> 
    </li>
  
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className={`rounded-full py-[0.15rem] px-[0.30rem] text-white text-[11px] cursor-pointer
          ${activateFirstPropertyStepper ? `bg-[#800080]`  : `bg-[#EFE8E8]`}
         `}   onClick={moveToPropertyOneToggleHandler}>02</span>
        <div className={`h-[70px] w-1 opacity-100 dark:opacity-50  
          ${activateSecondPropertyStepper ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}></div>
        </div>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className={`rounded-full py-[0.15rem] px-[0.30rem] text-white text-[11px] 
          ${activateSecondPropertyStepper? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}>03</span>
        <div className={`h-[70px] w-1 opacity-100 dark:opacity-50   
          ${actFirstProp ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}></div>
        </div>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className={`rounded-full py-[0.15rem] px-[0.30rem] text-white text-[11px] 
          ${actFirstProp ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}>04</span>
        <div className={`h-[70px] w-1 opacity-100 dark:opacity-50 
          ${actFirstProp ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}></div>
        </div>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className={`rounded-full py-[0.15rem] px-[0.30rem] text-white text-[11px] 
          ${actFirstProp ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}>05</span>
        <div className={`h-[70px] w-1 opacity-100 dark:opacity-50  
          ${actFirstProp ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}></div>
        </div>
      </div>
    </li>
</ol>
    </div>


    </>
  )
}

export default Stepper