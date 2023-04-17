import React from 'react'
const Stepper = () => {
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
        <span className='rounded-full bg-[#800080] py-[0.15rem] px-[0.30rem] text-white text-[11px]'>01</span>
        <div class=" h-[70px] w-1 bg-[#800080] opacity-100 dark:opacity-50"></div>
        </div>
      
      </div>
    </li>
  
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className='rounded-full bg-[#800080] py-[0.15rem] px-[0.30rem] text-white text-[11px]'>02</span>
        <div class=" h-[70px] w-1 bg-[#800080] opacity-100 dark:opacity-50"></div>
        </div>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className='rounded-full bg-[#800080] py-[0.15rem] px-[0.30rem] text-white text-[11px]'>03</span>
        <div class=" h-[70px] w-1 bg-[#800080] opacity-100 dark:opacity-50"></div>
        </div>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className='rounded-full bg-[#800080] py-[0.15rem] px-[0.30rem] text-white text-[11px]'>04</span>
        <div class=" h-[70px] w-1 bg-[#800080] opacity-100 dark:opacity-50"></div>
        </div>
      </div>
    </li>
    <li className="  ">            
      <div className='flex h-auto gap-6'>
        <div className=' flex flex-col items-center justify-center'>
        <span className='rounded-full bg-[#800080] py-[0.15rem] px-[0.30rem] text-white text-[11px]'>05</span>
        <div class=" h-[70px] w-1 bg-[#800080] opacity-100 dark:opacity-50"></div>
        </div>
      </div>
    </li>
</ol>
    </div>


    </>
  )
}

export default Stepper