    import React from 'react'
    import {IoCaretBackCircleOutline,IoAddCircleOutline} from 'react-icons/io5';
    const PropertyOneForm = () => {
    return (
        <>
        <div className='flex flex-col px-6'>
    <form className="rounded-md px-2 md:px-6 py-6 shadow-xl">
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
                w-full px-2.5 h-[42px]">
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
                value={name} onChange={(e)=> setName(e.target.value)} />
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
                value={name} onChange={(e)=> setName(e.target.value)} />
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
                value={name} onChange={(e)=> setName(e.target.value)} />
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
                value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="col-span-4 md:col-span-2 mb-6 md:mb-0 px-2">
            
    <label className="block tracking-wide text-[#464646]
                text-[16px] font-normal mb-2" htmlFor='states'>
                State*
                </label>

    <select id="states" className="bg-gray-50  block 
    border-2 border-[#DDDDDD] rounded-md focus:outline-none 
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
    w-full px-2.5 h-[42px]">
    <option selected>Choose a state</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
    </select>


            </div>
            </div>

            
            </div>
            <div className='flex gap-2 items-center justify-evenly'>

            <IoCaretBackCircleOutline size='31px'/>
            <button className='font-normal flex gap-2 items-center bg-[#800080] text-[white] rounded-md py-3 px-8 my-6 '>
                Add Property 
                <IoAddCircleOutline size='20px' />
                </button>
            <button className='font-normal  bg-[#800080] text-[white] rounded-md py-3 w-[193px] my-6 '>Submit</button>
        
            </div>
            
    </form>
    </div>
        </>
    )
    }

    export default PropertyOneForm