import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {TbBuildingEstate } from 'react-icons/tb';
import {BsTelephoneForwardFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import axios from '../api/axios';
import { Link, useNavigate } from 'react-router-dom';

const EditCategory = (props) => {
    const [ItemCategory, setCategoryName] = useState('')
    const accessToken = useSelector(store => store?.login?.userData[0])
    const  categoryDetails = useSelector(store => store?.property?.categoryDetails)
    const navigate = useNavigate()
    useEffect(()=>{
        console.log( categoryDetails)
        setCategoryName(categoryDetails?.ItemCategory)
    },[ categoryDetails])

    // useEffect(()=>{
    //   setEdit(true)
    // },[])
    const backHandler = (e) =>{  
      e.preventDefault()
      setE(true)
      //setEdit(false)
      }

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
              'Authorization': `Bearer ${accessToken}`
            }}
          const response = await axios.put(`/api/property/${categoryDetails?.PropertyNo}/itemCtegory/${categoryDetails?.CategoryRN}`,
              { ...editDetails }, options
          );
              console.log(response)
            if(response?.status == '200'){
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
    <form>    
    <div className='rounded-md p-5 shadow-md'>
    <div className='flex flex-col gap-3'>
    <div className='flex text-[14px] font-normal justify-between'>
    <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Category Name</h5>
    <input type='text' value={ItemCategory} onChange={(e) => setCategoryName(e.target.value)}
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
    font-normal  bg-green-400 text-[white] flex items-center 
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