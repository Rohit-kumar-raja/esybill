import React, { useState } from 'react'
import { stateList } from '../constants/stateList'
const Profile = () => {
  const customerDetails = {
    CustomerName:'Namrata',
    RegMobile: "9101043391",
    State:'Assam',
    Country:'India'
  }
  const [CustomerName, setCustomerName] = useState(customerDetails.CustomerName)
  const [RegMobile, setRegMobile] = useState(customerDetails.RegMobile)
  const [State, setState] = useState(customerDetails.State)
  const [Country, setCountry] = useState(customerDetails.Country)
  const [editDetails, seteditDetails] = useState(false)
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
    setCustomerName(customerDetails.CustomerName)
    setRegMobile(customerDetails.RegMobile)
    setState(customerDetails.State)
    setCountry(customerDetails.Country)
  }
  const saveEditHandler = (e) => {
    e.preventDefault()
    let editDetails = {}
    if(CustomerName !== customerDetails.CustomerName){
      editDetails.CustomerName = CustomerName
    }
    if(RegMobile !== customerDetails.RegMobile){
      editDetails.RegMobile = RegMobile
    }
    if(State !== customerDetails.State){
      editDetails.State = State
    }
    if(Country !== customerDetails.Country){
      editDetails.Country = Country
    }
    console.log(editDetails)
  }
  return (
   <>
   
      <form className="rounded-md px-2 md:px-6 py-6" 
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

export default Profile