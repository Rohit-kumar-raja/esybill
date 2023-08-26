
import React, { useEffect, useState } from "react"
import Navbar from "../components/homepage/Navbar.jsx"
import cmheader from "../assets/products/cmheader.svg"
import rmsheader from "../assets/products/rmsheader.svg"
import hmsheader from "../assets/products/hmsheader.svg"
import hmsimg from "../assets/products/hms-img.svg"
import rmsimg from "../assets/products/rms-img.svg"
import cmimg from "../assets/products/cm-img.svg"
import { useLocation } from "react-router-dom"

import { hms } from "../constants/productsData.js"
import { rms } from "../constants/productsData.js"
import { cm } from "../constants/productsData.js"
import Footer from "../components/homepage/Footer.jsx"

import { features } from "../constants/productsData.js"
import { hmsfeature } from "../constants/productsData.js"
import { rmsfeature } from "../constants/productsData.js"
import { cmfeature } from "../constants/productsData.js"
import hmsfeaturesimg from "../assets/products/hmsfeatures-img.svg"
import rmsfeaturesimg from "../assets/products/rmsfeaturesimg.svg"

import step1 from "../assets/products/carousel/step-1.svg"
import step2 from "../assets/products/carousel/step-2.svg"
import step3 from "../assets/products/carousel/step-3.svg"
import step4 from "../assets/products/carousel/step-4.svg"
import step5 from "../assets/products/carousel/step-5.svg"
import step6 from "../assets/products/carousel/step-6.svg"
import step7 from "../assets/products/carousel/step-7.svg"
import step8 from "../assets/products/carousel/step-8.svg"
import step9 from "../assets/products/carousel/step-9.svg"
import step10 from "../assets/products/carousel/step-10.svg"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CloudMenuCards from "../components/homepage/CloudMenuCards.jsx"


const Hms = () => {
  const location = useLocation()
  const [uriparam, seturiparam] = useState("")
  const [arr, setArr] = useState("")
  console.log("location",location.pathname)

  
  

  useEffect(()=>{
    for (const [key, value] of Object.entries(features)) {
      console.log(`${key}: ${value}`);
      if(`${key}` === location?.pathname){
        seturiparam(value)
      }
    }
    console.log("uriparam",uriparam)
  },[features])
  
  useEffect(()=>{
    console.log(`${uriparam}`+"img")
  },[`${uriparam}`+"img"])

  useEffect(()=>{
    console.log(uriparam,"uriparam")
    if(location?.pathname === "/hms"){
      setArr(hmsfeature)
    } 
    else if(location?.pathname === "/rms"){
      setArr(rmsfeature)
    }
    else if(location?.pathname === "/cm"){
      setArr(cmfeature)
    }
    else{
      console.log("cm")
    }
  },[uriparam,location?.pathname])

  useEffect(()=>{
    console.log("arr", arr, arr?.length)
  },[arr])
  return (
  
    <>
      <Navbar/>
      <div className="flex flex-col justify-center items-center font-poppins">
        <img src={location?.pathname === "/hms" ? hmsheader : location?.pathname === "/rms"?
          rmsheader : cmheader } className='object-cover h-[100%] w-screen' alt='bg-img'/>
        <h2 className="text-[#983398] font-bold uppercase md:text-[35px] mt-[-20%]">
          {
            location?.pathname === "/hms" ? "Hotel management Software" : 
              location?.pathname === "/rms" ? "Restaurant Management Software"
                : "CLOUD MENU" 
          }
        </h2>
       
      </div>
      <div className="flex flex-col justify-center items-center font-poppins">
        <h2 className="text-[#983398] font-bold text-[25px] py-12 md:py-24 px-4 md:px-1 text-center md:text-start">
          {
            location?.pathname === "/hms" ? hms[0] : location?.pathname === "/rms" ? 
              rms[0] : cm[0]
          }
        </h2>
        <p className="text-[#7E007E] font-normal text-[18px] px-4 md:px-24 py-4">
          {
            location?.pathname === "/hms" ? hms[1] : location?.pathname === "/rms" ? 
              rms[1] : cm[1]
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-[#7E007E] font-normal text-[18px] px-4 md:px-24 py-4 flex flex-col">
            {
              location?.pathname === "/hms" ? hms[2] : location?.pathname === "/rms" ? 
                rms[2] : cm[2]
            }
          </p>
          <img src={location?.pathname === "/hms" ? hmsimg : location?.pathname === "/rms"?
            rmsimg : cmimg } className='object-cover md:h-80 md:w-80 p-6 md:p-0' alt='bg-img'/>
        </div>
        <p className="text-[#7E007E] font-normal text-[18px] px-4 md:px-24 py-4">
          {
            location?.pathname === "/hms" ? hms[3] : location?.pathname === "/rms" ? 
              rms[3] : cm[3]
          }
        </p>
       
      </div>
      <div className="flex flex-col justify-center items-start py-4 px-4 md:px-24 font-poppins">
        {
          location?.pathname === "/hms" ? 
            <button className='
              bg-rgba font-normal text-[15px] text-white rounded-2xl px-4 md:px-8 py-2'>HMS Key Features</button>
            : location?.pathname === "/rms" ? 
              <button className='
              bg-rgba font-normal text-[15px] text-white rounded-2xl px-4 md:px-8 py-2'>RMS Key Features</button>  
              :   <button className='
              bg-rgba font-normal text-[15px] text-white rounded-2xl px-4 md:px-8 py-2'>CM Key Features</button>
        }
      </div>

      {
        arr?.length > 0 ? 
          arr[0]?.map(arr => (
            <>
              <div className="flex px-4 md:px-24 py-4 font-poppins">
                <img src={arr[0]} alt="" className="w-20 h-16"/>
                <div className="flex flex-col">
                  <p className="text-[#611261] text-lg font-semibold">{arr[1]}</p>
                  <p className="text-[#7E007E] text-base font-normal">{arr[2]}</p>
                </div>
              </div>
            </>
          ))
          : null
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-poppins">
        <div className="flex flex-col justify-center items-center">
          {
            arr?.length > 0 ? 
              arr[1]?.map(arr => (
                <>
                  <div className="flex px-4 md:px-24 py-4">
                    <img src={arr[0]} alt="" className="w-20 h-16"/>
                    <div className="flex flex-col">
                      <p className="text-[#611261] text-lg font-semibold">{arr[1]}</p>
                      <p className="text-[#7E007E] text-base font-normal">{arr[2]}</p>
                    </div>
                  </div>
                </>
              ))
              : null
          }
        </div>
        <img 
          src={location?.pathname === "/hms" ? hmsfeaturesimg : location?.pathname === "/rms"?
            rmsfeaturesimg : null }
          alt="" />
      </div>
      {
        arr?.length > 0 ? 
          arr[2]?.map(arr => (
            <>
              <div className="flex px-4 md:px-24 py-4 font-poppins">
                <img src={arr[0]} alt="" className="w-20 h-16"/>
                <div className="flex flex-col px-2">
                  <p className="text-[#611261] text-lg font-semibold">{arr[1]}</p>
                  <p className="text-[#7E007E] text-base font-normal">{arr[2]}</p>
                </div>
              </div>
            </>
          ))
          : null
      }
      {
        location?.pathname === "/cm" ? 
          <>
            <Carousel>
             
              <CloudMenuCards title="Step 1:" img={step1} content="Go to registration page or click generate cloud menu now button at home page"/>
             
              <CloudMenuCards title="Step 2:" img={step2} content="Register your property or restaurant with OTP verification"/>
            
              <CloudMenuCards title="Step 3:" img={step3} content="Your account opened. Now login to your account"/>

              <CloudMenuCards title="Step 4:" img={step4} content="Select generate cloud menu"/>

              <CloudMenuCards title="Step 5:" img={step5} content="Select photo for photo view menu Or select text for text view menu"/>

              <CloudMenuCards title="Step 6:" img={step6} content="Upload photo of your menu card or text manually"/>

              <CloudMenuCards title="Step 7:" img={step7} content="Submit"/>

              <CloudMenuCards title="Step 8:" img={step8} content="Download QR code"/>

              <CloudMenuCards title="Step 8:" img={step9} content="Print the QR"/>

              <CloudMenuCards title="Step 10:" img={step10} content="Scan to Check and circulate with smile"/>
              
            </Carousel>
          </>
          : null
      }
      <Footer/>
    </>
  )
}

export default Hms