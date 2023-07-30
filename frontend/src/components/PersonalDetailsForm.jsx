import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { stateList } from '../constants/stateList'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addPhone, addUser } from '../registrationSlice'

const PersonalDetailsForm = ({setActivateFirstProperty,setUserRegistrationData, setActivateFirstPropertyStepper}) => {
  const [CustomerName, setCustomerName] = useState('')
  const [RegMobile, setRegMobile] = useState('')
  const [State, setState] = useState('')
  const [Country, setCountry] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [captchaToken, setCaptchaToken] = useState(false)
  const captchaRef = useRef(null) 
  const dispatch = useDispatch()
  const userDetails = useSelector(store => store.register?.user)

  useEffect(()=>{  
    setActivateFirstProperty(false) 
    setActivateFirstPropertyStepper(false)
  },[]) 
useEffect(()=>{ 
  console.log(captchaRef)
},[captchaRef])
 useEffect(()=>{
   console.log(userDetails)
   CustomerName === '' && setCustomerName(userDetails.CustomerName) 
   RegMobile === '' && setRegMobile(userDetails.RegMobile) 
   Country === '' && setCountry(userDetails.Country) 
   State === '' && setState(userDetails.State) 
 },[CustomerName, RegMobile, Country, State, userDetails])
  
  useEffect(()=>{
    if((CustomerName !=='' && RegMobile!=='' && State !=='' ) || captchaToken){
      setDisabled(false)
    }
    else setDisabled(true)
  },[CustomerName, RegMobile, State, captchaToken])

  const userDetailSubmitHandler = (e) => {
    e.preventDefault()
    setCustomerName(CustomerName)
    let user = {CustomerName, RegMobile, State, Country}
    dispatch(addUser(user))
    dispatch(addPhone(RegMobile)) 
    setActivateFirstProperty(true)
    setActivateFirstPropertyStepper(true)
   
    setCustomerName(user.CustomerName)
    // setRegMobile('')
    // setState('')
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
              value={CustomerName} onChange={(e)=> setCustomerName(e.target.value)} />
          </div>
          <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
          <label className="block tracking-wide text-[#464646] 
            text-[16px] font-normal mb-2" htmlFor="grid-first-name"> 
              Mobile Number*
            </label>
            <input className="appearance-none block  border-2 border-[#DDDDDD]
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
             w-full h-[42px]
             rounded-md  px-4 mb-3 leading-tight focus:outline-none"
              id="grid-first-name" type="text" placeholder="" 
              value={RegMobile} onChange={(e)=> setRegMobile(e.target.value)} />
          </div>

          <div className="grid grid-cols-4 md:mb-3 md:mt-3">
          <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
            <label className="block tracking-wide text-[#464646] 
            text-[16px] font-normal mb-2" htmlFor="grid-first-name"> 
              Country*
            </label>
            <input className="appearance-none block  border-2 border-[#DDDDDD]
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
             w-full h-[42px]
             rounded-md  px-4 mb-3 leading-tight focus:outline-none"
              id="grid-first-name" type="text" placeholder="" 
              value={Country} onChange={(e)=> setCountry(e.target.value)} />
          </div>
          <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
           
<label className="block tracking-wide text-[#464646]
            text-[16px] font-normal mb-2" htmlFor='states'>
              State*
            </label>

<select id="states" className="bg-gray-50  block 
border-2 border-[#DDDDDD] rounded-md focus:outline-none 
focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
  w-full px-2.5 h-[42px]" 
  defaultValue={State} 
  onChange={(e)=> setState(e.target.value)} >
     <option selected>Choose a state</option>
    {
      stateList.map((stateList) => {
        return (<option value={stateList}>{stateList}</option>)
        
      })
    }
</select>
           </div>
          </div>        
        </div>
        <div className='flex flex-col items-center'>
        <ReCAPTCHA  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}   ref={captchaRef} 
         onChange={useCallback(() => setCaptchaToken(true))}/>
        <button className={`font-normal  bg-[#800080] text-[white] rounded-md w-full py-3 px-6 my-6 
        ${disabled ? `cursor-not-allowed opacity-50` : `cursor-pointer opacity-100`} `}>Save & Next Step</button>
        <span className='text-[#B3B3B3] text-[12px] font-normal text-center'>Already have an account?
        <Link to='/login'><span className='text-[#5E5E5E]'> Sign in</span></Link>
        </span>
        </div>
   </form>
   </div>
   
    </>
  )
}

export default PersonalDetailsForm