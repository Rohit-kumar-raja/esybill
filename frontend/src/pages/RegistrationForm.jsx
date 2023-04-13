import React from 'react'
import registrationformgraphics from '../assets/RegistrationFormGraphics.png'
import CustomerRegistrationForm from '../components/CustomerRegistrationForm';
const RegistrationForm = () => {
    const steps = ['Customer Registration', 'Property Registration'];
  return (
    <>
    <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 h-screen">
        <div className="grid lg:col-span-2 md:col-span-2">
            <div className='flex justify-center items-center'>
            <img src={registrationformgraphics}/>
            </div>
        </div>
        <div className="grid lg:col-span-2 md:col-span-2 bg-[#800080]">
        <ol className="flex items-center w-full  space-x-2 text-sm font-medium text-center p-6
            text-gray-500 shadow-sm 
   dark:text-gray-400 sm:text-base dark:bg-gray-800 sm:p-4 sm:space-x-4">
   {
    steps.map(((step,index) => (
        <li className="flex items-baseline p-6" key={step}>
        <span className="flex  justify-center py-[0.5rem] px-[0.8rem] text-xs bg-white rounded-md shrink-0
         dark:border-blue-500">
            {index + 1}
        </span>
        <span className="hidden sm:inline-flex sm:ml-2 text-[#FFFFFF] text-sm font-semibold" 
         >{step}</span>
       
    </li>
    )))
   }
</ol>

<div className='flex flex-col   '>
<CustomerRegistrationForm/>
  
   

</div>


        </div>
      </div>
    </>
  )
}

export default RegistrationForm