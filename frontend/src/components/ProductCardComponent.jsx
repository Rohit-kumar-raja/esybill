import React, { useEffect, useState } from "react"
import {TbBuildingEstate } from "react-icons/tb";
import {BsTelephoneForwardFill} from "react-icons/bs"
import {FiMapPin} from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../api/axios";
import { getProduct } from "../propertySlice";

const ProductCardComponent = ({setSidebarTabs, product,setEdit,setfetchProduct,
  deletePopup, setDeletePopup}) => {
 
  const dispatch = useDispatch()
  const accessToken = useSelector(store => store?.login?.userData[0])

  useEffect(()=>{
    console.log("Product", product)
  },[])
  const viewSidebarToggler = () => {
    setSidebarTabs(true)
  }

  const editHandler = () => {
    console.log("edit clicked")
    setEdit(true) 
    dispatch(getProduct(product))
  }

  const productDeleteHandler = () => {
    setDeletePopup(true)
  }

  const deleteHandler = async() => {
    
    try {
      const options = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }}
      const response = await axios.delete(`/api/property/${product?.PropertyNo}/itemCtegory/${product?.CategoryRN}/item/${product?.ItemNameRN}/product/${product?.ProductNameRN}`,
        options);
     
      console.log(response);
      if(response?.status == "204"){
        console.log(response);
        toast.success("Product deleted successfully!", {
          position: toast.POSITION.TOP_CENTER
        });
        setDeletePopup(false)
        setfetchProduct(true)
      }
       
    }
    catch (error) {
      toast.error("SubCategory deletion failed!", { 
        position: toast.POSITION.TOP_CENTER
      });
      console.log(error);
    }
    setfetchProduct(true)
  }

  return (
    <>
      <ToastContainer autoClose={2000}/>
      <div className='rounded-md p-5 shadow-md'>
        <div className='flex flex-col gap-3'>
          <div className='flex text-[15px] font-normal justify-between flex-wrap'>
            <h5 className='text-[#B3B3B3] flex items-center gap-2'><TbBuildingEstate/>Category</h5>
            <h5 className='text-[#464646] '>{product?.ItemCategory}</h5>
          </div>
          <div className='flex text-[15px] font-normal justify-between gap-2 flex-wrap'>
            <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Subcategory</h5>
            <h5 className='text-[#464646]'>{product?.ItemName}</h5>
          </div>
          <div className='flex text-[15px] font-normal justify-between gap-2 flex-wrap'>
            <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Product</h5>
            <h5 className='text-[#464646]'>{product?.ProductName}</h5>
          </div>
          <div className='flex'>
            <button className="
    font-normal  bg-green-600 text-[white] flex items-center 
    rounded-md py-2 my-6 text-[14px] px-3 mx-auto
    cursor-pointer opacity-100" onClick={editHandler}>Edit</button>
            <button className="font-normal  bg-red-600 text-[white] flex items-center 
    rounded-md py-2 my-6 text-[14px] px-3 mx-auto
    cursor-pointer opacity-100" onClick={productDeleteHandler}>Delete</button>
          </div>
        </div>
      </div>

      {
        deletePopup ? <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 border-b border-solid text-sm 
                 border-slate-200 rounded-t">
                  <h3 className="text-[#3A3939]">
                  Are you sure you want to delete this product?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black loat-right
                     text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setDeletePopup(false)}
                  >
                    <span className="bg-transparent text-black  
                    w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> 
                {/*body*/}
                <div className="flex justify-center gap-5">
                  <button className="font-normal bg-red-600 text-[white] rounded-md py-2 my-6 
              text-[14px] px-3 cursor-pointer opacity-100" 
                  onClick={deleteHandler}>Yes</button>
                  <button className="font-normal bg-yellow-400 text-[white]  rounded-md py-2 my-6 
              text-[14px] px-3  cursor-pointer opacity-100"
                  onClick={() => setDeletePopup(false)}>No</button>
                </div>
              </div> 
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </> : null
      }

    </>
  )
}

export default ProductCardComponent 