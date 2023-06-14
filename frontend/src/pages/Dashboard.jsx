import React, { useEffect, useState } from "react"
import control from "../assets/dashboard/control.png"
import AllCardsPage from "./MyProperties";
import logo from "../assets/logo/logo.png"
import profile from "../assets/dashboard/User.png"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import PropertyDetails from "./PropertyDetails";
import AddProperty from "./AddProperty";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";
import AddProduct from "./AddProduct";
import Profile from "./Profile";
import MyProperties from "./MyProperties";
import { useSelector } from "react-redux";
import AddImage from "./AddImage";
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [sidebarTabs, setSidebarTabs] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const accessToken = useSelector(store => store?.login?.userData[0]?.accessToken)
  const menuType = useSelector(store => store?.property?.menuType)
  useEffect(()=>{
    navigate("/dashboard/properties")

    console.log(location)
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
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo} alt="logo"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
            Ezybill
            </h1>
          </div>
          <ul className="pt-6">
            <Link to='/dashboard/profile'>
              <li
                className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white
               text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                <img src={profile} />
                <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              My Profile
                </span>
              </li>
            </Link>
            <Link to='/dashboard/properties'>
              <li
                className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                <img src={profile} />
                <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              My Properties
                </span>
              </li>
            </Link>
            <Link to='/dashboard/addproperty'>
              <li
                className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                <img src={profile} />
                <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Add Property
                </span>
              </li>
            </Link>
            {
              sidebarTabs ?
                <>
                  <Link to='/dashboard/propertydetails'>
                    <li
                      className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                      <img src={profile} />
                      <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Property Details
                      </span>
                    </li>
                  </Link>
                 
                  {
                    menuType === "Image menu" ? 
                      <Link to='/dashboard/image'>
                        <li
                          className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                          <img src={profile} />
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
                              <img src={profile} />
                              <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Category 
                              </span>
                            </li>
                          </Link> 
                          <Link to='/dashboard/subcategory'>
                            <li
                              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                              <img src={profile} />
                              <span className={`${!open && "hidden"} origin-left duration-200 text-[#3A3939]`}>
              Sub-category
                              </span>
                            </li>
                          </Link>
                          <Link to='/dashboard/product'>
                            <li
                              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white">
                              <img src={profile} />
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