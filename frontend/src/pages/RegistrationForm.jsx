// import React from 'react'
// import Stepper from '../components/Stepper';
// import Navbar from '../components/Navbar';
// import PersonalDetailsForm from '../components/PersonalDetailsForm';
// const RegistrationForm = () => {
//    // const steps = ['Customer Registration', 'Property Registration'];
//   return (
//     <>
//     <Navbar/>

    
//     <div className="grid grid-cols-4">
//         <div className="col-span-1  ">
//             <Stepper/>
//         </div>
//         <div className="col-span-3">
//           <PersonalDetailsForm/>
//         </div>
//       </div>
//     </>
//   )
// }

// export default RegistrationForm

import React from 'react'
import Stepper from '../components/Stepper';
import Navbar from '../components/Navbar';
import PersonalDetailsForm from '../components/PersonalDetailsForm';
const RegistrationForm = () => {
   // const steps = ['Customer Registration', 'Property Registration'];
  return (
    <>
    <Navbar/>

    <div className="grid grid-cols-4 md:grid-cols-12">
    <div className="md:col-span-1"></div>
    <div className="col-span-4 md:col-span-10">
    <div className="grid grid-cols-4">
        <div className="col-span-1  ">
            <Stepper/>
        </div>
        <div className="col-span-3">
        <div className="col-span-3 md:grid md:grid-cols-8">
        <div className="md:col-span-1"></div>
        <div className="col-span-3 md:col-span-6"> <PersonalDetailsForm/></div>
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