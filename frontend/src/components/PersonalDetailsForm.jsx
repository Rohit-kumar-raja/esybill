import React, { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const PersonalDetailsForm = ({setActFirstProp}) => {
  const [username, setUsername] = useState('')
  const [usermobilenumber, setUserMobileNumber] = useState('')
  const [userstate, setUserState] = useState('')
  const [usercountry, setUserCountry] = useState('')
  const [disabled, setDisabled] = useState(true)
  useEffect(()=>{
    setActFirstProp(false)
  },[])

  useEffect(()=>{
    if(username !=='' && usermobilenumber!=='' && userstate !==''){
      setDisabled(false)
    }
    else setDisabled(true)
  },[username, usermobilenumber, userstate])

  const userDetailSubmitHandler = (e) => {
    e.preventDefault()
    console.log(username, usermobilenumber, userstate, usercountry)
    setUsername('')
    setUserMobileNumber('')
    setUserState('')
  }
  return (
    <>
    <div className='flex flex-col px-6'>
   <form className="rounded-md px-2 md:px-6 py-6 shadow-xl" onSubmit={userDetailSubmitHandler}>
   <div className='px-6 text-center'>
    <h1 className='text-[15px] font-normal text-[#464646]'>Personal</h1>
   <h1 className='text-[30px] font-semibold text-[#464646]'>Details</h1>
    </div>
        <div className="flex flex-col mb-6">
          <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
            <label className="block tracking-wide text-[#464646]
            text-[16px] font-normal mb-2" htmlFor="grid-first-name">
              Name*
            </label>
            <input className="appearance-none block w-full border-2 border-[#DDDDDD]
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
             rounded-md h-[42px] px-4 mb-3 leading-tight " required
              id="grid-first-name" type="text" placeholder="" 
              value={username} onChange={(e)=> setUsername(e.target.value)} />
          </div>

          <div className="grid grid-cols-4 md:mb-3 md:mt-3">
          <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
            <label className="block tracking-wide text-[#464646] 
            text-[16px] font-normal mb-2" htmlFor="grid-first-name">
              Mobile Number*
            </label>
            <input className="appearance-none block  border-2 border-[#DDDDDD]
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
             w-full h-[42px]
             rounded-md  px-4 mb-3 leading-tight focus:outline-none"
              id="grid-first-name" type="text" placeholder="" 
              value={usermobilenumber} onChange={(e)=> setUserMobileNumber(e.target.value)} />
          </div>
          <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
           
<label className="block tracking-wide text-[#464646]
            text-[16px] font-normal mb-2" htmlFor='states'>
              State*
            </label>

<select id="states" className="bg-gray-50  block 
border-2 border-[#DDDDDD] rounded-md focus:outline-none 
focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
  w-full px-2.5 h-[42px]" defaultValue={userstate} onChange={(e)=> setUserState(e.target.value)} >
  <option selected>Choose a state</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>


          </div>
          </div>

        
        </div>
        <div className='flex flex-col items-center'>

        <ReCAPTCHA  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}/>
        <button className={`font-normal  bg-[#800080] text-[white] rounded-md w-full py-3 px-6 my-6 
        ${disabled ? `cursor-not-allowed opacity-50` : `cursor-pointer opacity-100`} `}>Save & Next Step</button>
        <span className='text-[#B3B3B3] text-[12px] font-normal text-center'>Already have an account? <span className='text-[#5E5E5E]'> Sign in</span></span>
        </div>
           
   </form>
   </div>
   
    </>
  )
}

export default PersonalDetailsForm