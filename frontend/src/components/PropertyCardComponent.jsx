import React, { useEffect, useState } from "react"
import {TbBuildingEstate } from "react-icons/tb";
import {BsTelephoneForwardFill} from "react-icons/bs"
import {FiMapPin} from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios";
import { addPropertyDetails, addPropertyNumber } from "../propertySlice";
import { useNavigate } from "react-router-dom";

const PropertyCardComponent = ({setSidebarTabs, property, propNo}) => {
  const {PropType,PropPhone,PropState,PropName, PropNo} = property
  const accessToken = useSelector(store => store?.login?.userData[0])
  const [propertyDetails, setpropertyDetails] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // useEffect(()=>{
  // if(property){
  //   setPropNo(property?.PropNo) 
  // }
  // },[]) 
   
  // useEffect(()=>{
  //   let PropertyNo = property?.PropertyNo
  //   dispatch(addPropertyNumber(PropertyNo))
  // },[property])
  useEffect(()=>{
    console.log(propertyDetails)  
 
    if(propertyDetails){
      dispatch(addPropertyDetails(propertyDetails))
    }
  },[propertyDetails])

  const viewSidebarToggler = async() => {
    let PropertyNo = property?.PropertyNo
    dispatch(addPropertyNumber(PropertyNo))
    try {
      const options = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }}
      const response = await axios.get(`/api/property/${property.PropertyNo}`, options);
      console.log(response?.data);
      setpropertyDetails(response?.data)
    }
    catch (error) {
      console.log(error);
    }
     
    setSidebarTabs(true) 
     
  }

  return (
    <div className='rounded-md p-5 shadow-md'>
      <p className='my-3'>{PropName}</p>
      <div className='flex flex-col gap-3'>
        <div className='flex text-[15px] font-normal justify-between'>
          <h5 className='text-[#B3B3B3] flex items-center gap-2'><TbBuildingEstate/>Property type</h5>
          <h5 className='text-[#464646] '>{PropType}</h5>
        </div>
        <div className='flex text-[15px] font-normal justify-between'>
          <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Contact</h5>
          <h5 className='text-[#464646]'>{PropPhone}</h5>
        </div>
        <div className='flex text-[15px] font-normal justify-between'>
          <h5 className='text-[#B3B3B3] flex items-center gap-2'><FiMapPin/>State</h5>
          <h5 className='text-[#464646]'>{PropState}</h5>
        </div>
      </div>
      <button className="font-normal  bg-[#800080] text-[white] flex items-center 
    rounded-md py-2 my-6 text-[13px] px-3 mx-auto
      cursor-pointer opacity-100" onClick={viewSidebarToggler}>View More</button>
    </div>
  )
}

export default PropertyCardComponent  