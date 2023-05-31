import React from 'react'
import {TbBuildingEstate } from 'react-icons/tb';
import {BsTelephoneForwardFill} from 'react-icons/bs'
import {FiMapPin} from 'react-icons/fi'

const ProductCardComponent = ({setSidebarTabs}) => {
    const viewSidebarToggler = () => {
      setSidebarTabs(true)
    }
  return (
    <div className='rounded-md p-5 shadow-md'>
    <div className='flex flex-col gap-3'>
    <div className='flex text-[15px] font-normal justify-between'>
      <h5 className='text-[#B3B3B3] flex items-center gap-2'><TbBuildingEstate/>Property</h5>
      <h5 className='text-[#464646] '>Restaurant</h5>
    </div>
    <div className='flex text-[15px] font-normal justify-between gap-2'>
    <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Product</h5>
    <h5 className='text-[#464646]'>+91 9101043391</h5>
    </div>
    <div className='flex'>
    <button className="
    font-normal  bg-[#800080] text-[white] flex items-center 
    rounded-md py-2 my-6 text-[13px] px-3 mx-auto
    cursor-pointer opacity-100">Edit</button>
    <button className="font-normal  bg-[#800080] text-[white] flex items-center 
    rounded-md py-2 my-6 text-[13px] px-3 mx-auto
    cursor-pointer opacity-100">Delete</button>
    </div>
    </div>
   
    </div>
    
  )
}

export default ProductCardComponent 