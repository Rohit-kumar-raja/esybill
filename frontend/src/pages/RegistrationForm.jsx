import React, { useEffect, useState } from 'react'
import Stepper from '../components/Stepper';
import Navbar from '../components/Navbar';
import PersonalDetailsForm from '../components/PersonalDetailsForm';
import PropertyOneForm from '../components/PropertyOneForm';
import PropertyTwoForm from '../components/PropertyTwoForm';
import PropertyThreeForm from '../components/PropertyThreeForm';
import PropertyFourForm from '../components/PropertyFourForm';
import { useDispatch } from 'react-redux';
import { addUser } from '../registrationSlice';
const RegistrationForm = () => {
   // const steps = ['Customer Registration', 'Property Registration'];
   const [actFirstProp, setActFirstProp] = useState(false)
   const [activateFirstProperty, setActivateFirstProperty] = useState(false)
   const [activateFirstPropertyStepper, setActivateFirstPropertyStepper] = useState(false)
   const [activateSecondProperty, setActivateSecondProperty] = useState(false)
   const [activateSecondPropertyStepper, setActivateSecondPropertyStepper] = useState(false)
   
   const [activateThirdProperty, setActivateThirdProperty] = useState(false)
   const [activateThirdPropertyStepper, setActivateThirdPropertyStepper] = useState(false)

   const [activateFourthProperty, setActivateFourthProperty] = useState(false)
   const [activateFourthPropertyStepper, setActivateFourthPropertyStepper] = useState(false)

   const [userRegistrationData, setUserRegistrationData] = useState({}) 
   const dispatch = useDispatch()
  //  const toggleStepper = () => {
  //     setActivateFirstProperty(prevState =>)
  //  }
  // useEffect(()=>{
  // console.log(userRegistrationData)
  // dispatch(addUser(userRegistrationData))
  
  // },[userRegistrationData])
  // useEffect(()=>{
  //   console.log("setActivateFourthPropertyStepper", activateFourthPropertyStepper)
  // }, activateFourthPropertyStepper)
  return (
    <>
    <Navbar/>

    <div className="grid grid-cols-4 md:grid-cols-12 md:my-12">
    <div className="md:col-span-1"></div>
    <div className="col-span-4 md:col-span-10">
    <div className="grid grid-cols-4">
        <div className="col-span-1  ">
            <Stepper actFirstProp={actFirstProp} 

            activateFirstProperty={activateFirstProperty} 
            activateFirstPropertyStepper={activateFirstPropertyStepper}
            setActivateFirstProperty={setActivateFirstProperty} 
            setActivateFirstPropertyStepper={setActivateFirstPropertyStepper}

            activateSecondProperty={activateSecondProperty}
            setActivateSecondProperty={setActivateSecondProperty}
            activateSecondPropertyStepper={activateSecondPropertyStepper}
            setActivateSecondPropertyStepper={setActivateSecondPropertyStepper}

            setActivateThirdProperty={setActivateThirdProperty}
            activateThirdPropertyStepper={activateThirdPropertyStepper}
            setActivateThirdPropertyStepper={setActivateThirdPropertyStepper}
            setActivateFourthProperty={setActivateFourthProperty}
            activateFourthPropertyStepper={activateFourthPropertyStepper}
            setActivateFourthPropertyStepper={setActivateFourthPropertyStepper}
            />
        </div>
        <div className="col-span-3">
        <div className="col-span-3 md:grid md:grid-cols-8">
        <div className="md:col-span-1"></div>
        <div className="col-span-3 md:col-span-6">
           {activateFirstProperty ?  <PropertyOneForm  
           setUserRegistrationData={setUserRegistrationData} 
           setActivateSecondProperty={setActivateSecondProperty}
           setActivateSecondPropertyStepper={setActivateSecondPropertyStepper}
           setActivateFirstProperty={setActivateFirstProperty}
           setActivateFirstPropertyStepper={setActivateFirstPropertyStepper}
           />:
           
           activateSecondProperty ? <PropertyTwoForm  
          setUserRegistrationData={setUserRegistrationData} 
          setActivateThirdProperty={setActivateThirdProperty}
          setActivateSecondProperty={setActivateSecondProperty}
          setActivateSecondPropertyStepper={setActivateSecondPropertyStepper}
          setActivateThirdPropertyStepper={setActivateThirdPropertyStepper}
           /> : 
           activateThirdProperty ? <PropertyThreeForm 
           setUserRegistrationData={setUserRegistrationData}  
           setActivateThirdPropertyStepper={setActivateThirdPropertyStepper}
           activateFourthPropertyStepper={activateFourthPropertyStepper}
           setActivateFourthProperty={setActivateFourthProperty}
           setActivateFourthPropertyStepper={setActivateFourthPropertyStepper}
           setActivateThirdProperty={setActivateThirdProperty}
          
           /> :  
           activateFourthProperty ? <PropertyFourForm  
           userRegistrationData={userRegistrationData} 
           setUserRegistrationData={setUserRegistrationData}  
           setActivateFourthPropertyStepper={setActivateFourthPropertyStepper}
           /> :
           <PersonalDetailsForm 
            setActivateFirstProperty={setActivateFirstProperty} 
            // setUserRegistrationData={setUserRegistrationData} 
            setActivateFirstPropertyStepper={setActivateFirstPropertyStepper} />
            }
          
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