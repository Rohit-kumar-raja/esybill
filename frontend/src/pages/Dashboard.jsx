import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import AllCardsPage from './AllCardsPage' 
import Sidebar from '../components/Sidebar'
 
const Dashboard = () => {
    const [viewPropertyButton, setViewPropertyButton] = useState(false)
    const [viewAllProperty, setViewAllProperty] = useState(false)
    const [viewSidebar, setViewSidebar] = useState(false)
    useEffect(()=>{
        setViewPropertyButton(true)
    },[])
  return (
    <>
    <div>
    <Navbar  viewPropertyButton={viewPropertyButton} setViewAllProperty={setViewAllProperty} />
    </div>
   
    <div>
        {
            viewAllProperty ? <AllCardsPage setViewSidebar={setViewSidebar} 
            setViewAllProperty={setViewAllProperty} /> : 
            viewSidebar ? <Sidebar/> :null
        }
    {/* <Sidebar/> */}
    </div>
    {/* <AllCardsPage/> */}
   
    </>
  )
}

export default Dashboard