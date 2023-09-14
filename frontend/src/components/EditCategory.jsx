/* eslint-disable */
import React, { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BsTelephoneForwardFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import axios from "../api/axios";


const EditCategory = (props) => {
  const [ItemCategory, setCategoryName] = useState("")
  const accessToken = useSelector(store => store?.login?.userData[0])
  const  categoryDetails = useSelector(store => store?.property?.categoryDetails)

  useEffect(()=>{
    console.log( categoryDetails)
    setCategoryName(categoryDetails?.ItemCategory)
  },[ categoryDetails])

  // useEffect(()=>{
  //   setEdit(true)
  // },[])
 

  const saveEditHandler = async (e) => {
    e.preventDefault()
    let editDetails = {} 
    if(ItemCategory !== categoryDetails?.ItemCategory){
      editDetails.ItemCategory = ItemCategory
    }
        
    console.log(editDetails)
    try {
      const options = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }}
      const response = await axios.put(`/api/property/${categoryDetails?.PropertyNo}/itemCtegory/${categoryDetails?.CategoryRN}`,
        { ...editDetails }, options
      );
      console.log(response)
      if(response?.status == "200"){
        toast.success("Category edited successfully!", {
          position: toast.POSITION.TOP_CENTER 
        });
        props.setfetchCategory(true)
      }
    } catch (err) {
      console.log(err) 
      toast.error("Update failed, please try later!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    props.setfetchCategory(false)
  }
  return (
    <>
      <ToastContainer autoClose={2000}/>
      <form className="md:w-[30rem] mx-auto">    
        <div className='rounded-md p-5 shadow-md'>
          <div className='flex flex-col gap-3'>
            <div className='text-[14px] font-normal justify-between flex-col md:flex-row'>
               <p className="p-2 font-poppins text-[0.8rem] font-[550]">Category Name</p>
              <input type='text' value={ItemCategory} onChange={(e) => setCategoryName(e.target.value)}
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
              
            </div>
            <div>
                              <p className="p-2 font-poppins text-[0.8rem] font-[550]">Note</p>
                <textarea className="w-full h-48 shadow-md rounded-md appearance-none block  border-2 border-[#DDDDDD] required
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none 
            focus:border-2 focus:border-[#800080] p-2 text-sm resize-none overflow-auto"></textarea>
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

export default EditCategory