import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from '../api/axios';

const CategoryModal = ({setShowModal,setfetchCategory}) => {
    const [ItemCategory, setItemCategory] = useState('')
    const accessToken = useSelector(store => store?.login?.userData[0]) 
    const PropertyNo = useSelector(store => store?.property?.propertyNumber) 

    const createCategoryHandler = (e) => {
      e.preventDefault()
      setShowModal(true)
      const handleSubmit = async () => {
        try {
          const options = {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }}
          const response = await axios.post(`/api/property/${PropertyNo}/itemCtegory`,
          {
            ItemCategory 
           }, options
          );
      
            console.log(response)
            if(response?.status === 201){
              toast.success("Category created successfully!", {
                position: toast.POSITION.TOP_CENTER
              });
              setfetchCategory(true)
            } 
        } catch (err) {
          console.log(err) 
          toast.error("Category creation failed!", {
            position: toast.POSITION.TOP_CENTER
          });
        }
        }
    handleSubmit()
    setShowModal(false)
    setfetchCategory(false)
    }


    
  return (
   <> 
    <ToastContainer autoClose={2000}/>
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
                   Create Category
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black loat-right
                     text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  
                    h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> 
                {/*body*/}
               <form onSubmit={createCategoryHandler}>
               <div className="relative p-6 flex-auto">
                <input className="appearance-none block  border-2 border-[#DDDDDD] required w-80
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
            rounded-md h-[42px] px-4 mb-3 leading-tight " required
            id="grid-first-name" type="text" placeholder="" 
            value={ItemCategory} onChange={(e)=> setItemCategory(e.target.value)} />
              <button className="font-normal  bg-[#800080] text-[white] flex rounded-md py-2 my-6 
              text-[13px] px-3 mx-auto cursor-pointer opacity-100" type='submit'>Submit</button>
                </div>
               </form>
               
              </div> 
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
   </>
  )
}

export default CategoryModal 