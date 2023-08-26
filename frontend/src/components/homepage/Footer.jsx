import React from "react"
import {FaFacebookF,FaWhatsapp,FaInstagram,FaTwitter} from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="flex bg-[#100010] flex-col font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 text-white py-10 px-10">
          <div className='flex flex-col items-start text-sm'>
            <p className='text-2xl'><span className='font-light'>EzyBill</span> <span className='font-medium'>India</span></p>
            <p className='font-light py-2'>Contact No - +91  9836041044</p>
            <p className='font-light py-2'>Email - support@ezybillindia.com</p>
            <div className="flex gap-3 py-2">
              <FaFacebookF/>
              <FaWhatsapp/>
              <FaInstagram/>
              <FaTwitter/> 
            </div>
          </div>
          <div className='flex flex-col items-start text-sm'>
            <p className='font-medium'>Products & Services</p>
            <p className='font-light py-2'><Link to='/hms'>Hotel Management Software</Link> </p>
            <p className='font-light py-2'><Link to='/rms'>Restaurant Management Software </Link></p>
            <p className='font-light py-2'><Link to='/cm'>Cloud Menu</Link></p>
          </div>
          <div className='flex flex-col items-start text-sm'>
            <p>Pages</p>
            <p className='font-light py-2'><Link to='/'>Home</Link></p>
            <p className='font-light py-2'><Link to='/about'> About Us</Link></p>
            <p className='font-light py-2'><Link to='/contact-us'>Contact Us</Link></p>
            <p className='font-light py-2'><Link to='/pricing'>Pricing</Link></p>
          </div>
          <div className='flex flex-col items-start text-sm'>
            <p>Legal</p>
            <p className='font-light py-2'>Terms Of Service</p>
            <p className='font-light py-2'>Privacy Policy</p>
            <p className='font-light py-2'>Support</p>
          </div>
        </div>
        <hr className='mx-11' />
        <div className='text-white font-light text-sm pt-6 pb-10'>
          <p className="text-center">Copyright 2022 EzyBill India | All Rights Reserved</p>
        </div>
      </div>


   
    </>
  )
}

export default Footer