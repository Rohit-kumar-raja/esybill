/* eslint-disable */
import React, { useEffect, useState } from "react"
import { stateList } from "../constants/stateList"
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPVerificationModal from "../components/OTPVerificationModal";
import { addOtp, addPhone } from "../registrationSlice";
import { useLocation } from "react-router-dom";
import { addPropertyCount } from "../propertySlice";

const USER_DETAILS = "/api/user";

const Profile = () => {
  const customerDetails = {
    CustomerName:"Namrata",
    RegMobile: "9101043391",
    State:"Assam",
    Country:"India"
  }

  const [profile, setProfile] = useState("")
  const [path, setPath] = useState("")
  const location = useLocation()
  useEffect(()=>{
    const getProfileData = async () => {
      try {
        const options = {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }}
        const response = await axios.get("/api/user", options);
        console.log(response, response?.data);
        setProfile(response?.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    getProfileData()
  },[])
   
  useEffect(()=>{
    console.log(location?.pathname)
    if(location)
    {
      setPath(location?.pathname)
    }
  },[])


  const [CustomerName, setCustomerName] = useState("")
  const [user, setUser] = useState({
    // CustomerName: '',
    // RegMobile: '',
    // RegEmail: '',
    // State: '',
    // Country: ''
  })
  const [RegMobile, setRegMobile] = useState("")
  const [State, setState] = useState("")
  const [Country, setCountry] = useState("")
  const [editDetails, seteditDetails] = useState(false)
  const [customerDetail, setCustomerDetail] = useState([])
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const accessToken = useSelector(store => store?.login?.userData[0]) 
  // useEffect(()=>{
  //   const handleSubmit = async () => {
  //     try {
  //       const response = await axios.get(USER_DETAILS
  //         //   { 
  //         //     headers: { 'Content-Type': 'application/json', 
  //         //     'Authorization': `Bearer ${getCookieByName('SUDA_TOKEN')}` },
  //         //  }
  //       );
    
  //       console.log(response)
  //       let responseBody = null
          
  //       responseBody = await response.json()
  //       if (response?.status == "200") {
  //         console.log("200", response, responseBody)
  //         setCustomerDetail(responseBody)
  //       } else {
  //         // setIsReceipLoaded(false)
  //       }
  //     } catch (err) {
  //       console.log(err) 
  //     }
  //   }
  //   handleSubmit()
  // },[])
  
  useEffect(()=>{
    console.log(profile,profile[0])
  },[profile])

  const editDetailsHandler = (e,id) => {
    if(id.includes("CustomerName")){
      setCustomerName(e.target.value)
    }
    else  if(id.includes("RegMobile")){
      setRegMobile(e.target.value)
    }
    else  if(id.includes("State")){
      setState(e.target.value)
    }
    else  if(id.includes("Country")){
      setCountry(e.target.value)
    }
    else{
    }
    seteditDetails(true)
  }

  const cancelEditHandler = (e) => {
    e.preventDefault()
    seteditDetails(false)
    setCustomerName(profile?.CustomerName)
    setRegMobile(profile?.RegMobile)
    setState(profile?.State)
    setCountry(profile?.Country)
  }


  const saveEditHandler = (e) => { 
    e.preventDefault()
    setShowModal(true)
    dispatch(addOtp(""))
    console.log(CustomerName, profile.CustomerName)
    if(CustomerName !== profile?.CustomerName){
      setUser(prevState => {
        return { ...prevState, CustomerName }
      })
    }
    if(RegMobile !== profile?.RegMobile){
      setUser(prevState => {
        return { ...prevState, RegMobile }
      })
    }
    if(State !== profile?.State){
      setUser(prevState => {
        return { ...prevState, State }
      })
    }
    if(Country !== profile?.Country){
      setUser(prevState => {
        return { ...prevState, Country }
      })
    }
    console.log(user)
  //   try {
  //     const options = {
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`
  //       }}
  //     const response = axios.patch(`/api/user`,
  //         { ...editDetails }, options
  //     );
  //         console.log(response)
  //       if(response?.status == '200'){
  //        toast.success("Profile edited successfully!", {
  //          position: toast.POSITION.TOP_CENTER
  //        });
  //       }
  //   } catch (err) {
  //     console.log(err) 
  //     toast.error("Update failed, please try later!", {
  //       position: toast.POSITION.TOP_CENTER
  //     });
  //   }
  }


  useEffect(()=>{
    if(profile !==""){
      setCustomerName(profile?.CustomerName)
      setRegMobile(profile?.RegMobile)
      setState(profile?.State) 
      setCountry(profile?.Country)
      dispatch(addPhone(profile?.RegMobile))
      dispatch(addPropertyCount(profile?.AllotedPropertyQuota))
    }
  },[profile])
  return (
    <>
      {
        showModal ? <OTPVerificationModal  setShowModal={setShowModal}  user={user}
          type="verify" path={path} seteditDetails={seteditDetails}
          // userRegistrationData={userRegistrationData} 
    
        /> : null
      }
      <ToastContainer autoClose={2000}/>
      <div className="flex flex-col px-0 md:px-6 mt-3 md:mt-0 justify-center items-center">

     
        <form className="rounded-md px-2 md:px-6 py-6 w-auto md:w-[40rem]" 
          //</>onSubmit={userDetailSubmitHandler}
        >
          <div className='px-2'>
   
            <h1 className='text-[30px] font-semibold text-[#464646]'>My Profile</h1>
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
              id="CustomerName" type="text" placeholder="" 
              value={CustomerName} onChange={(e)=>editDetailsHandler(e,"CustomerName")} />
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
              id="RegMobile" type="text" placeholder="" 
              value={RegMobile} onChange={(e)=>editDetailsHandler(e,"RegMobile")} />
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
                value={Country} onChange={(e)=>editDetailsHandler(e,"Country")} />
              </div>
              <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
           
                <label className="block tracking-wide text-[#464646]
            text-[16px] font-normal mb-2" htmlFor='states'>
              State*
                </label>

                <select id="states" className="bg-gray-50  block 
border-2 border-[#DDDDDD] rounded-md focus:outline-none 
focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
  w-full px-2.5 h-[42px]" defaultValue={State}  onChange={(e)=>editDetailsHandler(e,"State")} >
                  <option selected value={State}>{State}</option>
                  {
                    stateList?.map((stateList) => {
                      return (<option value={stateList}>{stateList}</option>)
        
                    })
                  }
                </select>
              </div>
            </div>    
            <div className='flex  items-center gap-3 px-2'>
              {
                editDetails ? 
                  <> 
     
                    <button className="font-normal  bg-red-400 text-[white] flex items-center 
      rounded-md py-2 my-6 text-[13px] px-3 cursor-pointer opacity-100" 
                    onClick={(e)=>cancelEditHandler(e)}>Cancel</button>
                    <button className="font-normal  bg-green-400 text-[white] flex items-center 
      rounded-md py-2 my-6 text-[13px] px-3 cursor-pointer opacity-100" 
                    onClick={(e)=>saveEditHandler(e)}>Save Changes</button>
                  </> : ""
              }
            </div>    
          </div>
       
        </form>
      </div> 
    </>
  )
}

export default Profile