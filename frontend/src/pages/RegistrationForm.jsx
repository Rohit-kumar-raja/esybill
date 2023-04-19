import React, { useEffect, useState } from 'react'
import Stepper from '../components/Stepper';
import Navbar from '../components/Navbar';
import PersonalDetailsForm from '../components/PersonalDetailsForm';
import PropertyOneForm from '../components/PropertyOneForm';
import PropertyTwoForm from '../components/PropertyTwoForm';
const RegistrationForm = () => {
   // const steps = ['Customer Registration', 'Property Registration'];
   const [actFirstProp, setActFirstProp] = useState(false)
   const [activateFirstProperty, setActivateFirstProperty] = useState(false)
   const [activateSecondProperty, setActivateSecondProperty] = useState(false)
   const [userRegistrationData, setUserRegistrationData] = useState('') 
  //  const toggleStepper = () => {
  //     setActivateFirstProperty(prevState =>)
  //  }
  useEffect(()=>{
  console.log(userRegistrationData)
  },[userRegistrationData])
  return (
    <>
    <Navbar/>

    <div className="grid grid-cols-4 md:grid-cols-12">
    <div className="md:col-span-1"></div>
    <div className="col-span-4 md:col-span-10">
    <div className="grid grid-cols-4">
        <div className="col-span-1  ">
            <Stepper actFirstProp={actFirstProp} activateFirstProperty={activateFirstProperty} 
            activateSecondProperty={activateSecondProperty}
            setActivateSecondProperty={setActivateSecondProperty}
            setActivateFirstProperty={setActivateFirstProperty}/>
        </div>
        <div className="col-span-3">
        <div className="col-span-3 md:grid md:grid-cols-8">
        <div className="md:col-span-1"></div>
        <div className="col-span-3 md:col-span-6">
           {activateFirstProperty ?  <PropertyOneForm  
           setUserRegistrationData={setUserRegistrationData} 
           setActivateSecondProperty={setActivateSecondProperty}
           setActivateFirstProperty={setActivateFirstProperty}
           />:
           
           activateSecondProperty ? <PropertyTwoForm/> : 
           <PersonalDetailsForm 
            setActivateFirstProperty={setActivateFirstProperty} 
            setUserRegistrationData={setUserRegistrationData} />
            }
           {/* */}
           </div>
        <div className="md:col-span-1"></div>
        </div>
        </div>
      </div>
    </div>
    <div className="md:col-span-1"></div>
    </div>
    </>
  )
}

export default RegistrationForm