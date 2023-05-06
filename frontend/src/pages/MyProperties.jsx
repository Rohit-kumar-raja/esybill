import React from 'react'
import PropertyCardComponent from '../components/PropertyCardComponent'

const MyProperties = ({setSidebarTabs}) => {
  return (
    <>
    <div className="grid grid-cols-3 gap-3 px-2 py-3 md:px-6">
        <div>
            <PropertyCardComponent setSidebarTabs={setSidebarTabs}/>
        </div>
        <div>
            <PropertyCardComponent />
        </div>
        <div>
            <PropertyCardComponent />
        </div>
        
    </div>

    </>
  ) 
}
 
export default MyProperties