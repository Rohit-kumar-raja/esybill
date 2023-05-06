import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { stateList } from '../constants/stateList'

const PropertyDetails = () => {
    const location = useLocation()
    console.log(location.pathname)

    const propertyDetails = {
      PropType:'Hotel',
      PropName: "Kareems",
      PropEmail:'test@gmail.com',
      PropAddress:'Kolkata',
      PropPhone:"9101043391",
      PropState:"West Bengal",
      PropCountry:"India"
    }


    const [PropType, setPropType] = useState(propertyDetails.PropType)
    const [PropName, setPropName] = useState(propertyDetails.PropName)
    const [PropEmail, setPropEmail] = useState(propertyDetails.PropEmail)
    const [PropAddress, setPropAddress] = useState(propertyDetails.PropAddress)
    const [PropPhone, setPropPhone] = useState(propertyDetails.PropPhone)
    const [PropState, setPropState] = useState(propertyDetails.PropState)
    const [PropCountry, setPropCountry] = useState(propertyDetails.PropCountry)
    const [editDetails, seteditDetails] = useState(false)

    const propertyEditHandler = (e,id) => {
      if(id.includes("PropType")){
        setPropType(e.target.value)
      }
      else  if(id.includes("PropName")){
        setPropName(e.target.value)
      }
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
      else{
      }
      seteditDetails(true)
    }
  
    const cancelEditHandler = (e) => {
      e.preventDefault()
      setPropType(propertyDetails.PropType)
      setPropName(propertyDetails.PropName)
      setPropEmail(propertyDetails.PropEmail)
      setPropAddress(propertyDetails.PropAddress)
      setPropPhone(propertyDetails.PropPhone)
      setPropState(propertyDetails.PropState)
      setPropCountry(propertyDetails.PropCountry)
    }
    const saveEditHandler = (e) => {
      e.preventDefault()
       let editDetails = {}
      if(PropType !== propertyDetails.PropType){
        editDetails.PropType = PropType
      }
      if(PropName !== propertyDetails.PropName){
        editDetails.PropName = PropName
      }
      if(PropEmail !== propertyDetails.PropEmail){
        editDetails.PropEmail = PropEmail 
      }
      if(PropAddress !== propertyDetails.PropAddress){
        editDetails.PropAddress = PropAddress 
      }
      if(PropPhone !== propertyDetails.PropPhone){
        editDetails.PropPhone = PropPhone 
      }
      if(PropState !== propertyDetails.PropState){
        editDetails.PropState = PropState 
      }
      if(PropCountry !== propertyDetails.PropCountry){
        editDetails.PropCountry = PropCountry 
      }
      console.log(editDetails)
    }

  return (
   <>
  <form className="rounded-md px-2 md:px-6 py-6"
   //onSubmit={propertyOneSubmitHandler}
   >
    <div className='px-6 text-center'>
    <h1 className='text-[30px] font-semibold text-[#464646]'>Property Details</h1>
        </div>
            <div className="flex flex-col mb-6">
                
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
            <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor='states'>
                Property Type*
                </label>
                <select id="states" className="bg-gray-50  block 
                border-2 border-[#DDDDDD] rounded-md focus:outline-none 
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
                w-full px-2.5 h-[42px]" defaultValue={PropType} onChange ={(e)=> propertyEditHandler(e,"PropType")}>     
                <option selected>Choose a type</option>
                <option value="Hotel">Hotel</option>
                <option value="Restaurant">Restaurant</option>
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
                value={PropName} onChange ={(e)=> propertyEditHandler(e,"PropName")} />
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
                value={PropEmail} onChange ={(e)=> propertyEditHandler(e,"PropEmail")}  />
            </div>
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
                <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="grid-first-name">
                Property Address*
                </label>
                <input className="appearance-none block w-full border-2 border-[#DDDDDD] required
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
                rounded-md h-[42px] px-4 mb-3 leading-tight " required
                id="grid-first-name" type="text" placeholder="" 
                value={PropAddress} onChange ={(e)=> propertyEditHandler(e,"PropAddress")}/>
            </div>
            <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
                <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor="grid-first-name">
                Property Country*
                </label>
                <input className="appearance-none block w-full border-2 border-[#DDDDDD] required
                focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
                rounded-md h-[42px] px-4 mb-3 leading-tight " required
                id="grid-first-name" type="text" placeholder="" 
                value={PropCountry} onChange ={(e)=> propertyEditHandler(e,"PropCountry")} />
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
                value={PropPhone} onChange ={(e)=> propertyEditHandler(e,"PropPhone")}  />
            </div>
            <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
            
    <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor='states'>
                State*
                </label>

    <select id="states" className="bg-gray-50  block 
    border-2 border-[#DDDDDD] rounded-md focus:outline-none 
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
    w-full px-2.5 h-[42px]" defaultValue={PropState} onChange ={(e)=> propertyEditHandler(e,"PropState")} >
    <option selected>Choose a state</option>
    {
      stateList.map((stateList) => {
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
          </> : ''
        }
       </div>    
            </div>
           
      </form>
   </>
  ) 
}

export default PropertyDetails