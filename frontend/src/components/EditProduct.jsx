/* eslint-disable */
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BsTelephoneForwardFill} from "react-icons/bs"
import axios from "../api/axios";

const EditProduct = (props) => {

  const accessToken = useSelector(store => store?.login?.userData[0])
  const productDetails = useSelector(store => store?.property?.productDetails)

  const [ProductName, setProductName] = useState("")
  const [NoteOnProduct, setNoteOnProduct] = useState("")
  const [UnitPrice, setunitprice] = useState("")
  const [Unit, setunit] = useState("")
  const [SGSTPC,setSGSTPC] = useState("")
  const [CGSTPC,setCGSTPC] = useState("")
  const [DiscountAllowed,setDiscountAllowed] = useState("")
  const [ShName, setShName] = useState("")
  const [RoomUnitPrice, setRoomUnitPrice] = useState("")
  const [HSNSAC, setHSNSAC] = useState("")

  useEffect(()=>{
    console.log(productDetails)
    if(productDetails){
      setProductName(productDetails?.ProductName)
      setNoteOnProduct(productDetails?.NoteOnProduct)
      setunitprice(productDetails?.UnitPrice)
      setunit(productDetails?.Unit)
      setSGSTPC(productDetails?.SGSTPC)
      setCGSTPC(productDetails?.CGSTPC)
      setDiscountAllowed(productDetails?.DiscountAllowed)
      setShName(productDetails?.ShName)
      setRoomUnitPrice(productDetails?.RoomUnitPrice)
      setHSNSAC(productDetails?.HSNSAC)
    }
  },[productDetails])
  const saveEditHandler = async (e) => {
    e.preventDefault()
    let editDetails = {} 
    if(ProductName !== productDetails?.ProductName){
      editDetails.ProductName = ProductName
    }
       
    console.log(editDetails)
    try {
      const options = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }}
      const response = await axios.put(`/api/property/${productDetails?.PropertyNo}/itemCtegory/${productDetails?.CategoryRN}/item/${productDetails?.ItemNameRN}/product/${productDetails?.ProductNameRN}`
        
        ,
        { ...editDetails }, options
      );
      console.log(response)
      if(response?.status == "200"){
        toast.success("Product edited successfully!", {
          position: toast.POSITION.TOP_CENTER 
        });
        props.setfetchProduct(true)
      }
    } catch (err) {
      console.log(err) 
      toast.error("Update failed, please try later!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    props.setfetchProduct(false) 
  }

  return (
    <>
      <ToastContainer autoClose={2000}/>
      <form className="md:w-[30rem] mx-auto">    
        <div className='rounded-md p-5 shadow-md'>
          <div className='flex flex-col gap-3'>
            <div className='flex text-[14px] font-normal justify-between  flex-col md:flex-row'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Product Name</h5>
              <input type='text' value={ProductName} onChange={(e) => setProductName(e.target.value)}
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Note On Product</h5>
              <input type='text' value={NoteOnProduct} onChange={(e) => setNoteOnProduct(e.target.value)} disabled
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Unit Price</h5>
              <input type='text' value={UnitPrice} onChange={(e) => setunitprice(e.target.value)} disabled
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>Unit</h5>
              <input type='text' value={Unit} onChange={(e) => setunit(e.target.value)} disabled
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>SGSTPC</h5>
              <input type='text' value={SGSTPC} onChange={(e) => setSGSTPC(e.target.value)} disabled
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>CGSTPC</h5>
              <input type='text' value={CGSTPC} onChange={(e) => setCGSTPC(e.target.value)} disabled
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>DiscountAllowed</h5>
              <input type='text' value={DiscountAllowed} onChange={(e) => setDiscountAllowed(e.target.value)} disabled
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>ShName</h5>
              <input type='text' value={ShName} onChange={(e) => setShName(e.target.value)} disabled
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>RoomUnitPrice</h5>
              <input type='text' value={RoomUnitPrice} onChange={(e) => setRoomUnitPrice(e.target.value)} disabled
                className='appearance-none block w-full border-2 border-[#DDDDDD]
    focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
     rounded-md h-[42px] px-4 mb-3 leading-tight'
              />
            </div>
            <div className='flex text-[14px] font-normal justify-between'>
              <h5 className='text-[#B3B3B3] flex items-center gap-2'><BsTelephoneForwardFill/>HSNSAC</h5>
              <input type='text' value={HSNSAC} onChange={(e) => setHSNSAC(e.target.value)} disabled
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
 
export default EditProduct