import React from 'react'

const PropertyCardComponent = ({setViewSidebar, setViewAllProperty}) => {
    const viewSidebarToggler = () => {
        setViewSidebar(true)
        setViewAllProperty(false)
    }
  return (
    <div className='border border-[#800080] rounded-md p-5'>
        PropertyCardComponent
    <button className="font-normal  bg-[#800080] text-[white] rounded-md w-full py-3 px-6 my-6 
     cursor-pointer opacity-100" onClick={viewSidebarToggler}>View More</button>
    </div>
  )
}

export default PropertyCardComponent  