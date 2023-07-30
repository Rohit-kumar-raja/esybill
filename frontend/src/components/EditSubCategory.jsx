import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BsTelephoneForwardFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";


const EditSubCategory = (props) => {
  const [SubCategory, setSubCategoryName] = useState("")
  const accessToken = useSelector(store => store?.login?.userData[0])
  const  subcategoryDetails = useSelector(store => store?.property?.subcategoryDetails)
  const saveEditHandler = async (e) => {
    e.preventDefault()
    let editDetails = {} 
    if(SubCategory !== subcategoryDetails?.ItemName){
      editDetails.ItemName = SubCategory
    }
       
    console.log(editDetails)
    console.log(props.fetchSubCategory)
    try { 
      const options = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }}
      const response = await axios.put(`/api/property/${subcategoryDetails?.PropertyNo}/itemCtegory/${subcategoryDetails?.CategoryRN}/item/${subcategoryDetails?.ItemNameRN}`
        
        ,
        { ...editDetails }, options
      );
      console.log(response)
      if(response?.status == 200){
        toast.success("SubCategory edited successfully!", {
          position: toast.POSITION.TOP_CENTER 
        });
       
        //props.setfetchSubCategory(true)
      }
    } catch (err) {
      console.log(err) 
      toast.error("Update failed, please try later!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    
    //props.setfetchSubCategory(false)
  }
  return (
    <> 
      <ToastContainer autoClose={2000}/>
      <form className="md:w-[30rem] mx-auto">    
        <div className='rounded-md p-5 shadow-md'>
          <div className='flex flex-col gap-3'>
            <div className='flex text-[14px] font-normal justify-between flex-col md:flex-row'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>SubCategory Name</h5>
              <input type='text' value={SubCategory} onChange={(e) => setSubCategoryName(e.target.value)}
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex'>
              <button className="
    font-normal  bg-green-400 text-[white] flex items-center 
    rounded-md py-2 my-6 text-[14px] px-3 mx-auto
    cursor-pointer opacity-100" 
              onClick={saveEditHandler}>Edit</button>
              <button type='button' className="
    font-normal  bg-[#800080] text-[white] flex items-center 
    rounded-md py-2 my-6 text-[14px] px-3 mx-auto
    cursor-pointer opacity-100" 
              onClick={props.setEdit}>Back</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditSubCategory 