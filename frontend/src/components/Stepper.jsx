import React, { useState } from 'react'
const Stepper = ({activateFirstProperty,activateFirstPropertyStepper,actFirstProp,setActivateSecondPropertyStepper,
   setActivateFirstProperty, setActivateThirdProperty,  setActivateThirdPropertyStepper, setActivateSecondProperty, 
   activateFourthPropertyStepper,setActivateFourthPropertyStepper, setActivateFirstPropertyStepper,
   setActivateFourthProperty,
   activateSecondPropertyStepper,activateThirdPropertyStepper}) => {
 const moveToRegistrationToggleHandler = () => {
  setActivateFirstProperty(false)
  setActivateSecondProperty(false)
  setActivateThirdProperty(false)
  setActivateSecondPropertyStepper(false)
  setActivateThirdPropertyStepper(false)
 }
 const moveToPropertyOneToggleHandler = () => {
  setActivateFirstProperty(true) 
  setActivateFirstPropertyStepper(true)
  setActivateSecondProperty(false)
  setActivateSecondPropertyStepper(false)
  setActivateThirdPropertyStepper(false)
  setActivateFourthPropertyStepper(false)
 }
 const moveToPropertyTwoToggleHandler = () =>{
  setActivateFirstProperty(false) 
  setActivateSecondProperty(true)
  setActivateThirdProperty(false)
  setActivateSecondPropertyStepper(true)
  setActivateThirdPropertyStepper(false)
  setActivateFourthPropertyStepper(false)
 }
 const moveToPropertyThreeToggleHandler = () =>{
  setActivateFirstProperty(false) 
  setActivateSecondProperty(false)
  setActivateThirdProperty(true)
  setActivateFourthProperty(false)
  setActivateFirstPropertyStepper(true)
  setActivateSecondPropertyStepper(true)
  setActivateThirdPropertyStepper(false)
  setActivateFourthPropertyStepper(false)
 }
 const moveToPropertyFourToggleHandler = () =>{
  setActivateFirstProperty(false) 
  setActivateSecondProperty(false)
  setActivateThirdProperty(false)
  setActivateFourthProperty(true)
  setActivateFirstPropertyStepper(true)
  setActivateSecondPropertyStepper(true)
  setActivateThirdPropertyStepper(true)
  setActivateFourthPropertyStepper(true)
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
          ${activateSecondPropertyStepper? `bg-[#800080]`  : `bg-[#EFE8E8]`} `} 
          onClick={moveToPropertyTwoToggleHandler}>03</span>
        <div className={`h-[70px] w-1 opacity-100 dark:opacity-50   
          ${activateThirdPropertyStepper ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}></div>
        </div>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className={`rounded-full py-[0.15rem] px-[0.30rem] text-white text-[11px] 
          ${activateThirdPropertyStepper ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `} 
          onClick={moveToPropertyThreeToggleHandler}>04</span>
        <div className={`h-[70px] w-1 opacity-100 dark:opacity-50 
          ${activateFourthPropertyStepper ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}></div>
        </div>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className={`rounded-full py-[0.15rem] px-[0.30rem] text-white text-[11px] 
          ${activateFourthPropertyStepper ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `} 
          onClick={moveToPropertyFourToggleHandler}>05</span>
        <div className={`h-[70px] w-1 opacity-100 dark:opacity-50  
          ${activateFourthPropertyStepper ? `bg-[#800080]`  : `bg-[#EFE8E8]`} `}>
        </div>
        </div>
      </div>
    </li>
</ol>
    </div>


    </>
  )
}

export default Stepper