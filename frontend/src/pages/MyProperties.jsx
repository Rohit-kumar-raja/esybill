/* eslint-disable */
import React, { useEffect, useState } from "react"
import PropertyCardComponent from "../components/PropertyCardComponent"
import axios from "../api/axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFetchedProperties } from "../propertySlice";


const MyProperties = ({setSidebarTabs}) => {
  const accessToken = useSelector(store => store?.login?.userData[0])
  
  const [properties, setProperties] = useState(null)
  const [deletePopup, setDeletePopup] = useState(false) 

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    if(accessToken === ""){ 
      navigate("/login") 
    }
   
  },[accessToken, navigate])

  useEffect(()=>{
    setSidebarTabs(false)
  },[])
  useEffect(()=>{
    const getPropertyData = async () => {
      try {
        const options = {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }}
        const response = await axios.get("/api/property", options);
        console.log(response?.data);
        setProperties(response?.data)
      }
      catch (error) {
        console.log(error);
      } 
    }
    getPropertyData()
  },[])

  useEffect(()=>{
    const getPropertyData = async () => {
      try {
        const options = {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }}
        const response = await axios.get("/api/property", options);
        console.log(response?.data);
        setProperties(response?.data)
      }
      catch (error) {
        console.log(error);
      } 
    }
    getPropertyData()
  },[deletePopup])

  useEffect(()=>{  
    if(properties?.length){
      dispatch(addFetchedProperties(properties))
    }
  },[properties])
  
  return (
    <>
      <div className="w-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 px-2 py-3 md:px-6">
          {
            properties?.map(property => (
              <>
                <div>
                  <PropertyCardComponent setSidebarTabs={setSidebarTabs} property={property} 
                    propNo={property?.PropNo} deletePopup={deletePopup} setDeletePopup={setDeletePopup} />
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  ) 
}
 
export default MyProperties