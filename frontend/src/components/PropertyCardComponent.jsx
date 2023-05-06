import React from 'react'
import {TbBuildingEstate } from 'react-icons/tb';
import {BsTelephoneForwardFill} from 'react-icons/bs'
import {FiMapPin} from 'react-icons/fi'

const PropertyCardComponent = ({setSidebarTabs}) => {
    const viewSidebarToggler = () => {
      setSidebarTabs(true)
    }
  return (
    <div className='rounded-md p-5 shadow-md'>
      <p className='my-3'>Kareems</p>
    <div className='flex flex-col gap-3'>
    <div className='flex text-[15px] font-normal justify-between'>
      <h5 className='text-[#B3B3B3] flex items-center gap-2'><TbBuildingEstate/>Property type</h5>
      <h5 className='text-[#464646] '>Restaurant</h5>
    </div>
    <div className='flex text-[15px] font-normal justify-between'>
    <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Contact Number</h5>
    <h5 className='text-[#464646]'>+91 9101043391</h5>
    </div>
    <div className='flex text-[15px] font-normal justify-between'>
    <h5 className='text-[#B3B3B3] flex items-center gap-2'><FiMapPin/>State</h5>
    <h5 className='text-[#464646]'>Kolkata</h5>
    </div>
    </div>
    <button className="font-normal  bg-[#800080] text-[white] flex items-center 
    rounded-md py-2 my-6 text-[13px] px-3 mx-auto
      cursor-pointer opacity-100" onClick={ viewSidebarToggler}>View More</button>
    </div>
  )
}

export default PropertyCardComponent  