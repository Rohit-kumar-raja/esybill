import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { stateList } from "../constants/stateList"
import { useDispatch, useSelector } from "react-redux"; 
import axios from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addMenuType } from "../propertySlice";

const PropertyDetails = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  console.log(location.pathname)
  const propertyDetail = useSelector(store => store?.property?.propertyDetails[0]) 
  const accessToken = useSelector(store => store?.login?.userData[0])
  const propertyDetails = {
    PropType:"Hotel",
    PropName: "Kareems",
    PropEmail:"test@gmail.com",
    PropAddress:"Kolkata",
    PropPhone:"9101043391",
    PropState:"West Bengal",
    PropCountry:"India"
  }


  const [PropType, setPropType] = useState(propertyDetail[0]?.PropType)
  const [PropName, setPropName] = useState(propertyDetail[0]?.PropName)
  const [PropEmail, setPropEmail] = useState(propertyDetail[0]?.PropEmail)
  const [PropAddress, setPropAddress] = useState(propertyDetail[0]?.PropAddress)
  const [PropPhone, setPropPhone] = useState(propertyDetail[0]?.PropPhone)
  const [PropState, setPropState] = useState(propertyDetail[0]?.PropState)
  const [PropCountry, setPropCountry] = useState(propertyDetail[0]?.PropCountry)
  const [editDetails, seteditDetails] = useState(false)
  const [menu, setMenu] = useState("")

    
  const propertyEditHandler = (e,id) => {
    if(id.includes("PropType")){
      setPropType(e.target.value)
    }
    else  if(id.includes("PropName")){
      setPropName(e.target.value)
    }
    // else  if(id.includes("PropMenu")){
    //   setMenu(e.target.value)
    // }
    else  if(id.includes("PropEmail")){
      setPropEmail(e.target.value)
    }
    else  if(id.includes("PropAddress")){
      setPropAddress(e.target.value)
    }
    else  if(id.includes("PropPhone")){
      setPropPhone(e.target.value)
    }
    else  if(id.includes("PropState")){
      setPropState(e.target.value)
    }
    else  if(id.includes("PropCountry")){
      setPropCountry(e.target.value)
    }
    else if(id.includes("MenuType")){
      console.log(e.target.value)
      setMenu(e.target.value)
      dispatch(addMenuType(e.target.value))
    }
    else{
    }
    seteditDetails(true)
  }
  
  useEffect(()=>{
    if(propertyDetail[0]?.MenuType)
    {
      let menu = propertyDetail[0]?.MenuType
      dispatch(addMenuType(menu))
    }
  },[propertyDetail])
  const cancelEditHandler = (e) => {
    e.preventDefault()
    console.log(menu, propertyDetail[0].MenuType)
    setPropType(propertyDetail[0].PropType)
    setPropName(propertyDetail[0].PropName)
    setPropEmail(propertyDetail[0].PropEmail)
    setPropAddress(propertyDetail[0].PropAddress)
    setPropPhone(propertyDetail[0].PropPhone)
    setPropState(propertyDetail[0].PropState)
    setPropCountry(propertyDetail[0].PropCountry)
    setMenu(propertyDetail[0].MenuType)
  }
  const saveEditHandler = async (e) => {
    e.preventDefault()
    console.log(propertyDetail)
    let editDetails = {}
    if(PropType !== propertyDetail[0]?.PropType){
      editDetails.PropType = PropType
    }
    if(PropName !== propertyDetail[0]?.PropName){
      editDetails.PropName = PropName
    }
    if(PropEmail !== propertyDetail[0]?.PropEmail){
      editDetails.PropEmail = PropEmail 
    }
    if(PropAddress !== propertyDetail[0]?.PropAddress){
      editDetails.PropAddress = PropAddress 
    }
    if(PropPhone !== propertyDetail[0]?.PropPhone){
      editDetails.PropPhone = PropPhone 
    }
    if(PropState !== propertyDetail[0]?.PropState){
      editDetails.PropState = PropState 
    }
    if(PropCountry !== propertyDetail[0]?.PropCountry){
      editDetails.PropCountry = PropCountry 
    }
    editDetails.MenuType = menu
    console.log(editDetails)
    let no = propertyDetail[0]?.PropertyNo
    console.log(no) 
    try {
      const options = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }}
      const response = await axios.put(`/api/property/${no}`,
        { ...editDetails }, options
      );
       
      console.log(response, response?.status)
      if(response?.status === 200){
        toast.success("Details edited successfully!", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (err) {
      console.log(err) 
      toast.error("Update failed, please try later!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
     
  }


  useEffect(()=>{
    console.log(propertyDetail, propertyDetail[0]?.MenuType)
  },[propertyDetail])
  return (
    <>
      <ToastContainer autoClose={2000}/>
      <form className="rounded-md px-2 md:px-6 py-6"
        //onSubmit={propertyOneSubmitHandler} 
      >
        <div className='px-6 text-center'>
   
          <h1 className='text-[30px] font-semibold text-[#464646]'>Property Details</h1>
        </div>
        <img src={propertyDetail[0]?.QRLocation} alt='Qr scanner' className='w-20 h-20 mx-auto my-2'/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col mb-6">
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
              <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="grid-first-name">
                Property Type
              </label>
              <input className="appearance-none block w-full border-2 border-[#DDDDDD] required
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
                rounded-md h-[42px] px-4 mb-3 leading-tight " required
              id="grid-first-name" type="text" placeholder="" 
              value={PropType} 
              onChange ={(e)=> propertyEditHandler(e,"PropType")}/>   
            </div>
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
              <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor='states'> 
                Menu Type
              </label>
              <select id="states" className="bg-gray-50  block 
                border-2 border-[#DDDDDD] rounded-md focus:outline-none 
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
                w-full px-2.5 h-[42px]" 
              value={menu} 
              onChange ={(e)=> propertyEditHandler(e,"MenuType")}>   
                
               
                {
                  propertyDetail[0]?.MenuType === "text" ?  
                    <>
                      <option value="Text menu" selected>Text menu</option> 
                      <option value="Image menu">Image menu</option>
                    </>
                   
                    :  
                    propertyDetail[0]?.MenuType === "Image menu" ?  
                      <>
                        <option value="Image menu" selected>Image menu</option> 
                        <option value="Text menu">Text menu</option>
                      </>
                      :
                      propertyDetail[0]?.MenuType === "Text menu" ?  
                        <>
                          <option value="Text menu" selected>Text menu</option> 
                          <option value="Image menu">Image menu</option>
                        </>
                        :
                        null
                } 
               
                {/* <option value="Text menu">Text menu</option> */}
              </select>
            </div>
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
              <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="grid-first-name">
                Property Name*
              </label>
              <input className="appearance-none block w-full border-2 border-[#DDDDDD] required
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
                rounded-md h-[42px] px-4 mb-3 leading-tight " required
              id="grid-first-name" type="text" placeholder="" 
              value={PropName}  
              onChange ={(e)=> propertyEditHandler(e,"PropName")} />
            </div>
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
              <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="grid-first-name">
                Property Email*
              </label>
              <input className="appearance-none block w-full border-2 border-[#DDDDDD] required
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
                rounded-md h-[42px] px-4 mb-3 leading-tight " required
              id="grid-first-name" type="email" placeholder="" 
              value={PropEmail}
              onChange ={(e)=> propertyEditHandler(e,"PropEmail")}  />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
              <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="grid-first-name">
                Property Address*
              </label>
              <input className="appearance-none block w-full border-2 border-[#DDDDDD] required
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
                rounded-md h-[42px] px-4 mb-3 leading-tight " required
              id="grid-first-name" type="text" placeholder="" 
              value={PropAddress}
              onChange ={(e)=> propertyEditHandler(e,"PropAddress")}/>
            </div>
            
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
              <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="grid-first-name">
                Property Country*
              </label>
              <input className="bg-gray-50  block 
                border-2 border-[#DDDDDD] rounded-md focus:outline-none 
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
                w-full px-2.5 h-[42px]" required
              id="grid-first-name" type="text" placeholder="" 
              value={PropCountry}
              onChange ={(e)=> propertyEditHandler(e,"PropCountry")} />
            </div>
                
            {/* <div className="grid grid-cols-4 md:mb-3 md:mt-3"> */}
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
              <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="mobilenumber">
                Mobile Number*
              </label>
              <input className="appearance-none block w-full border-2 border-[#DDDDDD] required
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
                rounded-md h-[42px] px-4 mb-3 leading-tight "
              id="mobilenumber" type="text" placeholder="" 
              value={PropPhone} 
              onChange ={(e)=> propertyEditHandler(e,"PropPhone")}  />
            </div>
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
              <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="states">
                State*
              </label>
              <select id="states" className="bg-gray-50  block 
                border-2 border-[#DDDDDD] rounded-md focus:outline-none 
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
                w-full px-2.5 h-[42px]" 
              value={PropState} 
              onChange ={(e)=> propertyEditHandler(e,"PropState")} >
                <option selected>Choose a state</option>
                {
                  stateList.map((stateList) => {
                    return (<option value={stateList}>{stateList}</option>)
                  })
                }
              </select>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="flex flex-col mb-6">
           
          
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
    </>
  ) 
}

export default PropertyDetails