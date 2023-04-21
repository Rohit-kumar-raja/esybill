import React from 'react'
import PropertyCardComponent from '../components/PropertyCardComponent'

const AllCardsPage = ({setViewSidebar, setViewAllProperty}) => {
  return (
    <>
    <div className="grid grid-cols-3 gap-3 px-2 py-3 md:px-6">
        <div>
            <PropertyCardComponent setViewSidebar={setViewSidebar} setViewAllProperty={setViewAllProperty}/>
        </div>
        <div></div>
        <div></div>
    </div>

    </>
  )
}
 
export default AllCardsPage