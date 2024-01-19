
import React, { useEffect, useState } from "react"
import control from "../assets/dashboard/control.png"
import logo1 from "../assets/homepage/logo1.png"
import profile from "../assets/dashboard/User.png"
import { Link, useLocation, useNavigate} from "react-router-dom";
import PropertyDetails from "./PropertyDetails.jsx";
import AddProperty from "./AddProperty.jsx";
import AddCategory from "./AddCategory.jsx";
import AddSubCategory from "./AddSubCategory.jsx";
import AddProduct from "./AddProduct.jsx";
import Profile from "./Profile.jsx";
import MyProperties from "./MyProperties.jsx";
import { useSelector } from "react-redux";
import AddImage from "./AddImage.jsx";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [sidebarTabs, setSidebarTabs] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const menuType = useSelector(store => store?.property?.menuType)
  useEffect(()=>{
    navigate("/dashboard/properties")

    console.log("location", location.pathname)
  },[])
  useEffect(()=>{ 
    if(sidebarTabs){ 
      navigate("/dashboard/propertydetails")
    }
    else{
      navigate("/dashboard/properties") 
      setSidebarTabs(false)
    }
  },[sidebarTabs])

  // useEffect(()=>{
  //   console.log("loaded")
  //   if(location === "/dashboard/addproperty")
  //   {
  //     addMenuType("")
  //   }
  // },[])
  // useEffect(()=> {
  //  setSidebarTabs(false)
  //  console.log('sidebar tabs')
  // },[])

  // useEffect(()=>{
  //   if(!accessToken){ 
  //     navigate('/login')
  //   }
   
  // },[accessToken, navigate])

  // useEffect(()=>{
  //   if(accessToken){ 
  //     navigate('/dashboard/properties')
  //   }
  //   else navigate('/login')
  // },[accessToken, navigate])

  return ( 
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-62 md:w-72" : "w-20 "
          } bg-[#FFFFFF] min-h-screen p-5  pt-8 relative duration-300 shadow-2xl`}
        >
          <img
            src={control}
            alt="background img"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)} 
            role="presentation"
          />
          <div className="flex gap-x-2 items-center">
            {
              open ? 
            
                <>
                  <img src={logo1} alt='logo' className='h-[40px]'/>
                  <p className='font-poppins text-xs md:text-2xl font-bold text-[#7E007E]'>EzyBill India</p>
                </> :  
                <img src={logo1} alt='logo' className='h-[40px]'/>
            }
            {/* <img
              src={logo} alt="logo"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            /> */}
            
          </div>
          <ul className="pt-6">
            <Link to='/dashboard/profile'>
              <li
                className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white
               text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                <img src={profile} alt="profile" />
                <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              My Profile
                </span>
              </li>
            </Link>
            <Link to='/dashboard/properties'>
              <li
                className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                <img src={profile} alt="profile" />
                <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              My Properties
                </span>
              </li>
            </Link>
            {/* <Link to='/dashboard/addproperty'>
              <li
                className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                <img src={profile} alt="profile" />
                <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Add Property
                </span>
              </li>
            </Link> */}
            {
              sidebarTabs ?
                <>
                  <Link to='/dashboard/propertydetails'>
                    <li
                      className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                      <img src={profile} alt="profile" />
                      <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Property Details
                      </span>
                    </li>
                  </Link>
                 
                  {
                    menuType === "image" ? 
                      <Link to='/dashboard/image'>
                        <li
                          className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                          <img src={profile} alt="profile" />
                          <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Image Menu
                          </span>
                        </li>
                      </Link> 
                      : (menuType === "Text menu" || menuType === "text") ? 
                        <>
                          <Link to='/dashboard/category'>
                            <li
                              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                              <img src={profile} alt="profile" />
                              <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Category 
                              </span>
                            </li>
                          </Link> 
                          <Link to='/dashboard/subcategory'>
                            <li
                              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                              <img src={profile} alt="profile" />
                              <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Sub-category
                              </span>
                            </li>
                          </Link>
                          <Link to='/dashboard/product'>
                            <li
                              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                              <img src={profile} alt="profile" />
                              <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Product
                              </span>
                            </li>
                          </Link>
                        </>
                        : null
                  }
                  {/* <Link to='/dashboard/category'>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
              <img src={profile} />
              <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Add Category 
              </span>
            </li>
            </Link> 
            <Link to='/dashboard/subcategory'>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
              <img src={profile} />
              <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Add Sub-category
              </span>
            </li>
            </Link>
            <Link to='/dashboard/product'>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
              <img src={profile} />
              <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Add product
              </span>
            </li>
            </Link> */}
                </> : ""
            }
            
          </ul> 
        </div>
        <div className="items-center mx-auto p-7 w-screen">
          {location.pathname?.toString().split("/").map(text => {
            return text === "propertydetails" ? <PropertyDetails  /> : text === "addproperty" ? 
              <AddProperty/> : text === "category" ? <AddCategory/> : text === "subcategory" ? 
                <AddSubCategory/> : text === "product" ? <AddProduct/> : text === "profile" ? <Profile/> : 
                  text === "properties" ? <MyProperties  setSidebarTabs={setSidebarTabs}/> : 
                    text === "image" ? <AddImage/> : "" ;
          })}
        </div>
      </div>
    </>
  )
}

export default Dashboard