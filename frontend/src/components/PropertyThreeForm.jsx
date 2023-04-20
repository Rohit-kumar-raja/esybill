import React, { useEffect, useState } from 'react'
import {IoCaretBackCircleOutline,IoAddCircleOutline} from 'react-icons/io5';

import { stateList } from '../constants/stateList';
const PropertyThreeForm = ({setUserRegistrationData, setActivateThirdPropertyStepper,
    setActivateFourthProperty,setActivateThirdProperty, activateFourthPropertyStepper,
    setActivateFourthPropertyStepper
    // setActivateThirdProperty,
    // setActivateSecondProperty
    }) => {

    const [propertyType, setPropertyType] = useState('')
    const [propertyName, setPropertyName] = useState('')
    const [propertyEmail, setPropertyEmail] = useState('')
    const [propertyAddress, setPropertyAddress] = useState('')
    const [propertyMobile, setPropertyMobile] = useState('')
    const [propertyState, setPropertyState] = useState('')
    const [propertyCountry, setPropertyCountry] = useState('')
    const [disabled, setDisabled] = useState(true)

    // useEffect(()=>{
    //     setActivateSecondProperty(false)
    // },[])
    useEffect(()=>{
        console.log("setActivateFourthPropertyStepper", activateFourthPropertyStepper)
    }, [activateFourthPropertyStepper])
    

    const moveToFourthPropertyToggleHandler = () => {
       
        setActivateFourthPropertyStepper(true)
        setActivateFourthProperty(true)
        setActivateThirdProperty(false)
         
    //   setActivateThirdProperty(true)
    //   setActivateSecondProperty(false)
        //  setActivateSecondProperty(true)
        //  setActivateFirstProperty(false)
       }

    const propertyThreeSubmitHandler = (e) => {
        e.preventDefault() 
        let propertyDetails = [
          {
            propertyType, propertyEmail, propertyAddress, propertyMobile, propertyState, propertyCountry
        }
      ]
    //   setStudentData(prevState => ({...prevState,courseDetails:[...prevState.courseDetails,{course, duration, details, ids} ]})) 
      setUserRegistrationData(prevState => ({...prevState, propertyDetails:[...prevState.propertyDetails, {
          propertyType, propertyEmail, propertyAddress, propertyMobile, propertyState, propertyCountry
      }]}))
        
    }

    useEffect(()=>{
        if(propertyType!=='' && propertyName !=='' && propertyEmail!=='' && propertyAddress !==''
         && propertyMobile !=='' && propertyState!=='' && propertyCountry!==''
          ){
          setDisabled(false)
        }
        else setDisabled(true)
      },[propertyType,propertyName,propertyEmail,propertyAddress,propertyMobile,propertyState,propertyCountry])

      
return (
    <>
<div className='flex flex-col px-6'>
<form className="rounded-md px-2 md:px-6 py-6 shadow-xl" onSubmit={propertyThreeSubmitHandler}>
<div className='px-6 text-center'>
    <h1 className='text-[15px] font-normal text-[#464646]'>Property</h1>
<h1 className='text-[30px] font-semibold text-[#464646]'>Three</h1>
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
            w-full px-2.5 h-[42px]" defaultValue={propertyType} onChange={(e)=> setPropertyType(e.target.value)}>
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
            value={propertyName} onChange={(e)=> setPropertyName(e.target.value)} />
        </div>
        <div className="w-full mb-6 md:mb-0 px-2 md:mt-6">
            <label className="block tracking-wide text-[#464646]
            text-[16px] font-normal mb-2" htmlFor="grid-first-name">
            Property Email*
            </label>
            <input className="appearance-none block w-full border-2 border-[#DDDDDD] required
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
            rounded-md h-[42px] px-4 mb-3 leading-tight " required
            id="grid-first-name" type="text" placeholder="" 
            value={propertyEmail} onChange={(e)=> setPropertyEmail(e.target.value)} />
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
            value={propertyAddress} onChange={(e)=> setPropertyAddress(e.target.value)} />
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
            value={propertyCountry} onChange={(e)=> setPropertyCountry(e.target.value)} />
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
            value={propertyMobile} onChange={(e)=> setPropertyMobile(e.target.value)} />
        </div>
        <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
        
<label className="block tracking-wide text-[#464646]
            text-[16px] font-normal mb-2" htmlFor='states'>
            State*
            </label>

<select id="states" className="bg-gray-50  block 
border-2 border-[#DDDDDD] rounded-md focus:outline-none 
focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
w-full px-2.5 h-[42px]" defaultValue={propertyState} onChange={(e)=> setPropertyState(e.target.value)}>
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
        <div className='flex gap-2 items-center justify-evenly'>

        <IoCaretBackCircleOutline size='31px'/>
        <button className={`font-normal flex gap-2 items-center bg-[#800080] text-[white] rounded-md py-3 px-8 my-6 
         
         ${disabled ? `cursor-not-allowed opacity-50` : `cursor-pointer opacity-100`} `} 
         onClick={moveToFourthPropertyToggleHandler}>
            Add Property 
            <IoAddCircleOutline size='20px' />
            </button>
        <button className={`font-normal  bg-[#800080] text-[white] rounded-md py-3 w-[193px] my-6
        ${disabled ? `cursor-not-allowed opacity-50` : `cursor-pointer opacity-100`}`}>Submit</button>
    
        </div>
        
</form>
</div>
    </>
)
}

export default PropertyThreeForm