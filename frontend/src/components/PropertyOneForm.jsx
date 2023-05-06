    import React, { useEffect, useState } from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import {IoCaretBackCircleOutline,IoAddCircleOutline} from 'react-icons/io5';

    import { stateList } from '../constants/stateList';
    import { addProperty } from '../registrationSlice';
    import OTPVerificationModal from './OTPVerificationModal';

    const PropertyOneForm = ({
         setActivateSecondProperty,setActivateFirstProperty,setActivateSecondPropertyStepper}) => {

        const [PropType, setPropType] = useState('')
        const [PropName, setPropName] = useState('')
        const [PropEmail, setPropEmail] = useState('')
        const [PropAddress, setPropAddress] = useState('')
        const [PropPhone, setPropPhone] = useState('')
        const [PropState, setPropState] = useState('')
        const [PropCountry, setPropCountry] = useState('')
        const [disabled, setDisabled] = useState(true) 
        const [addPropBtn, setAddPropBtn] = useState(true)
        const [showModal, setShowModal] = useState(false)
        const propertyDetails = useSelector(store => store.register?.properties)
        const dispatch = useDispatch()
        useEffect(()=>{
            setActivateSecondProperty(false)
        },[])
        
        useEffect(()=>{
            console.log(propertyDetails)
        },[propertyDetails])
        useEffect(()=>{
            if(propertyDetails.length > 0)
            {
                PropType === '' && setPropType(propertyDetails[0].PropType) 
                PropName === '' && setPropName(propertyDetails[0].PropName) 
                PropEmail === '' && setPropEmail(propertyDetails[0].PropEmail) 
                PropAddress === '' && setPropAddress(propertyDetails[0].PropAddress) 
                PropPhone === '' && setPropPhone(propertyDetails[0].PropPhone)
                PropState === '' && setPropState(propertyDetails[0].PropState)
                PropCountry === '' && setPropCountry(propertyDetails[0].PropCountry)   
            }
          },[PropType, PropName, PropEmail, PropAddress, PropPhone, PropState, 
            PropCountry, propertyDetails])

        const moveToSecondPropertyToggleHandler = () => {
            let propertyOneDetails = {
                PropType, PropName, PropEmail, PropAddress, PropPhone, PropState, PropCountry
            }
            dispatch(addProperty({number : 0, value:propertyOneDetails}))
             setActivateSecondProperty(true)
             setActivateFirstProperty(false)
             setActivateSecondPropertyStepper(true)
           } 

        const propertyOneSubmitHandler = (e) => {
            e.preventDefault()  
            setAddPropBtn(true)
            let propertyOneDetails = {
                PropType, PropName, PropEmail, PropAddress, PropPhone, PropState, PropCountry
            }
           dispatch(addProperty({number : 0, value:propertyOneDetails}))
           setShowModal(true)
        }

        useEffect(()=>{
            if(PropType!=='' && PropName !=='' && PropEmail!=='' && PropAddress !==''
             && PropPhone !=='' && PropState!=='' && PropCountry!==''
              ){
              setDisabled(false)
              setAddPropBtn(false)
            }
            else 
            {
                setDisabled(true)
                setAddPropBtn(true)
            }
          },[PropType,PropName,PropEmail,PropAddress,PropPhone,PropState,PropCountry])

          
    return (
        <>
         {
      showModal ? <OTPVerificationModal  setShowModal={setShowModal} 
    //   userRegistrationData={userRegistrationData} 
    //    setUserRegistrationData={setUserRegistrationData}
       /> : null
    }
 <div className='flex flex-col px-6'>
    <form className="rounded-md px-2 md:px-6 py-6 shadow-xl" onSubmit={propertyOneSubmitHandler}>
    <div className='px-6 text-center'>
        <h1 className='text-[15px] font-normal text-[#464646]'>Property</h1>
    <h1 className='text-[30px] font-semibold text-[#464646]'>One</h1>
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
                w-full px-2.5 h-[42px]" defaultValue={PropType} onChange={(e)=> setPropType(e.target.value)}>
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
                value={PropName} onChange={(e)=> setPropName(e.target.value)} />
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
                value={PropEmail} onChange={(e)=> setPropEmail(e.target.value)} />
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
                value={PropAddress} onChange={(e)=> setPropAddress(e.target.value)} />
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
                value={PropCountry} onChange={(e)=> setPropCountry(e.target.value)} />
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
                value={PropPhone} onChange={(e)=> setPropPhone(e.target.value)} />
            </div>
            <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
            
    <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor='states'>
                State*
                </label>

    <select id="states" className="bg-gray-50  block 
    border-2 border-[#DDDDDD] rounded-md focus:outline-none 
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
    w-full px-2.5 h-[42px]" defaultValue={PropState} onChange={(e)=> setPropState(e.target.value)}>
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
            <button className={`font-normal flex gap-2 items-center bg-[#800080] text-[white] rounded-md py-3 px-8 my-6 
             ${addPropBtn ? `cursor-not-allowed opacity-50` : `cursor-pointer opacity-100`} `} 
             onClick={moveToSecondPropertyToggleHandler}>
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

    export default PropertyOneForm 