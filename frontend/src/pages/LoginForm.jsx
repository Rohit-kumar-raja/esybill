
import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar.jsx"
import { useNavigate } from "react-router-dom"
import OTPVerificationModal from "../components/OTPVerificationModal.jsx"
import { useDispatch, useSelector } from "react-redux"
import { addOtp } from "../registrationSlice"

const LoginForm = () => {
  const [disabled, setDisabled] = useState(true)
  const [usermobilenumber, setUserMobileNumber] = useState("")
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const accessToken = useSelector(store => store?.login?.userData[0])
  const navigate = useNavigate()

  const userDetailSubmitHandler = (e) => {
    e.preventDefault()
    setShowModal(true)
    dispatch(addOtp(""))
  }

  useEffect(()=>{
    console.log("Accesstoken",accessToken)
  },[accessToken])
  useEffect(()=>{
    if(accessToken !== null ){
      navigate("/dashboard")
    }
  },[])

  // useEffect(()=>{
  //   console.log(accessToken)
  // },[accessToken])

  useEffect(()=>{
    if(usermobilenumber!==""){  
      setDisabled(false)
    }
    else setDisabled(true)
  },[usermobilenumber])
      
  // useEffect(()=>{
  //   if(accessToken){ 
  //     navigate('/dashboard')
  //   }
  //   else navigate('/login')
  // },[accessToken, navigate])

  return (
    <>
      {
        showModal ? <OTPVerificationModal  setShowModal={setShowModal} usermobilenumber={usermobilenumber}
          type="login"
          //   userRegistrationData={userRegistrationData} 
          //    setUserRegistrationData={setUserRegistrationData}
        /> : null
      }
      <Navbar/>
      <div className="grid grid-cols-8">
        <div className="col-span-1 md:col-span-3"></div>
        <div className="col-span-6 md:col-span-2">
          <form className="rounded-md px-2 md:px-6 py-6 md:py-12 shadow-xl" onSubmit={userDetailSubmitHandler}>
     `  <div className='px-6 text-center'> 
              <h1 className='text-[30px] font-semibold text-[#464646]'>Login</h1>
            </div>
            <div className="flex flex-col mb-6">
              <div className="w-full mb-6 md:mb-0 px-2 md:mt-6"> 
                <label className="block tracking-wide text-[#464646]
            text-[16px] font-normal mb-2" htmlFor="grid-first-name">
             Mobile number*
                </label>
                <input className="appearance-none block w-full border-2 border-[#DDDDDD]
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2
             focus:border-[#800080] rounded-md h-[42px] px-4 mb-3 leading-tight" 
             required id="grid-first-name" type="text" placeholder="" 
                value={usermobilenumber} onChange={(e)=> setUserMobileNumber(e.target.value)} />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[#B3B3B3] text-[12px] font-normal text-center'>Dont have an account?
        By continuing, I agree to the Terms of Use & Privacy Policy
              </span>

              <button className={`font-normal  bg-[#800080] text-[white] rounded-md w-full py-3 px-6 my-6 
${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"} `}>Save & Next Step</button>

              <span className='text-[#B3B3B3] text-[12px] font-normal text-center'>Dont have an account?
                {/* <Link to='/'><span className='text-[#5E5E5E]'> Sign up</span></Link> */}
              </span>
            </div> 
          </form>
        </div>
        <div className="col-span-1 md:col-span-3"></div>
      </div>
    
    </>
  ) 
} 

export default LoginForm