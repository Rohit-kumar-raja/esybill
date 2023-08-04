import React from "react"
import OuterNav from "../components/OuterNav.jsx"
import HeroImage from "../assets/contact/hero.png"
import mail from "../assets/contact/mail.png"
import phone_icon from "../assets/contact/phone_icon.png"
import location from "../assets/contact/location.png"

const AddContact = () => {
  return (
    <div>
      <OuterNav/>
      <div className="grid xl:grid-cols-2 grid-cols-1 md:mx-24">
        <div><img src={HeroImage} alt="hero" width={500} className="my-8" /></div>
        <div className="md:m-32 m-20">
          <div className="flex flex-row gap-5">
            <div className="bg-white my-5 rounded-full p-10 shadow-lg" 
              style={{
                backgroundImage: `url(${location})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
            </div>
            <div className="mt-6">
              <h2 className="uppercase font-bold"> Locate Us </h2>
              <p> Eastland Microsystems, Malancha Road, P.O. Noapara, Barasat, Kolkata 700125, 
West Bengal, India</p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="bg-white my-5 rounded-full p-10 shadow-lg" 
              style={{
                backgroundImage: `url(${mail})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
            </div>
            <div className="mt-6">
              <h2 className="uppercase font-bold"> Locate Us </h2>
              <p> Eastland Microsystems, Malancha Road, P.O. Noapara, Barasat, Kolkata 700125, 
West Bengal, India</p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="bg-white my-5 rounded-full p-10 shadow-lg" 
              style={{
                backgroundImage: `url(${phone_icon})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
            </div>
            <div className="mt-6">
              <h2 className="uppercase font-bold"> Locate Us </h2>
              <p> Eastland Microsystems, Malancha Road, P.O. Noapara, Barasat, Kolkata 700125, 
West Bengal, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContact