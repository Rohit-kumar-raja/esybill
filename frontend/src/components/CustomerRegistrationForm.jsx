import React, { useState } from 'react'

const CustomerRegistrationForm = () => {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [state, setState] = useState('')
  return (
   <>
   <div className='flex flex-col px-6'>
    <div className='px-6'>
    <h1 className='text-[21px] font-normal text-white'>Customer</h1>
   <h1 className='text-[38px] font-semibold text-white'>Registration</h1>
    </div>
  
   <form className="w-full max-w-lg  rounded-md px-4 py-6">
        <div className="flex flex-col mb-6">
          <div className="w-full mb-6 md:mb-0">
            <label className="block tracking-wide text-white px-2
            text-[16px] font-normal mb-2" htmlFor="grid-first-name">
              Name
            </label>
            <input className="appearance-none block w-full bg-[#FFFFFF] 
             rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="text" placeholder="" 
              value={name} onChange={(e)=> setName(e.target.value)} />
          </div>
          <div className='flex justify-between'>
          <div className=" mb-6 md:mb-0">
            <label className="block tracking-wide text-white px-2
            text-[16px] font-normal mb-2" htmlFor="grid-first-name">
              Mobile Number
            </label>
            <input className="appearance-none block  bg-[#FFFFFF] 
             rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="text" placeholder="" 
              value={name} onChange={(e)=> setName(e.target.value)} />
          </div>
          <div className="mb-6 md:mb-0">
            <label className="block tracking-wide text-white px-2
            text-[16px] font-normal mb-2" htmlFor="grid-first-name">
              State
            </label>
            <input className="appearance-none block bg-[#FFFFFF] 
             rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="text" placeholder="" 
              value={name} onChange={(e)=> setName(e.target.value)} />
          </div>
          </div>
        </div>
        <div className='flex justify-end'>
        <button className='font-normal self-end bg-white text-[#800080] rounded-full py-3 px-6  '>Save & Next</button>
        </div>
           
   </form>
   </div>
   
   </>
  )
}

export default CustomerRegistrationForm