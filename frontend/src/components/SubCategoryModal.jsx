import React, { useEffect, useRef, useState } from 'react'
import { stateList } from '../constants/stateList'
import { useSelector } from 'react-redux'
import axios from '../api/axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const SubCategoryModal= ({setShowModal, setfetchSubCategory}) => {
    const [ItemName, setItemName] = useState(null)
    const [selectedCategory, setselectedCategory] = useState(null)
    const [category, setCategory] = useState(null) 
    const[rn, setRn] = useState('')
    const accessToken = useSelector(store => store?.login?.userData[0]) 
    const PropertyNo = useSelector(store => store?.property?.propertyNumber)
  const refCat = useRef()
    useEffect(()=>{
      console.log('useEffect')
    const getCategoryData = async () => {
     try {
       const options = {
         headers: {
           'Authorization': `Bearer ${accessToken}`
         }}
       const response = await axios.get(`/api/property/${PropertyNo}/itemCategory`, options);
       console.log(response?.data);
       setCategory(response?.data)
     }
     catch (error) {
       console.log(error);
     }
    }
    getCategoryData()
   },[])

   useEffect(()=>{
    console.log(refCat,selectedCategory)
   },[refCat,selectedCategory])
   const createSubCategoryHandler = (e) => {
    e.preventDefault()
    let v = e.target.getAttribute('data-test-id')
    setRn(v)
    console.log(rn);
    setShowModal(true)
    const handleSubmit = async () => {
      try {
        const options = {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }}
        const response = await axios.post(`/api/property/${PropertyNo}/itemCtegory/${selectedCategory}/item`,
      
        {
          ItemName
         }, options
        );
     
          console.log(response)
          if(response?.status == '201'){
            toast.success("SubCategory created successfully!", {
              position: toast.POSITION.TOP_CENTER
            });
            setfetchSubCategory(true)
          } 
      } catch (err) {
        console.log(err) 
        toast.error("SubCategory creation failed!", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      }
      handleSubmit()
      setTimeout(()=>{
      setShowModal(false)
      setfetchSubCategory(false)
      },1500)
   }

   useEffect(()=>{
    console.log(selectedCategory)
   },[selectedCategory])

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
                <div className="flex items-start justify-between p-5 border-b border-solid text-sm 
                 border-slate-200 rounded-t">
                  <h3 className="text-[#3A3939]">
                   Create Sub Category
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
                <div className="relative p-6 flex flex-col gap-3">
                <div className='flex justify-center items-center gap-3'>
                <label className="block tracking-wide text-[#464646] text-sm
            font-normal mb-2" htmlFor='states'>
            Category
            </label>

    <select id="states" className="bg-gray-50  block 
        border-2 border-[#DDDDDD] rounded-md focus:outline-none 
        focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
        w-full px-2.5 h-[42px]" defaultValue={selectedCategory} 
        onChange={(e)=> setselectedCategory(e.target.value)} >
     <option selected>Choose a state</option>
    { 
      category?.map((selectedCategory) => {
        // setRn(selectedCategory?.CategoryRN)
        return (
        <option value={selectedCategory.CategoryRN} data-test-id={`${selectedCategory.Cat}`} ref={refCat}>
         {selectedCategory.ItemCategory}
        </option>
        )
      })
    }
</select>
                </div>
                <div className='flex justify-center items-center gap-3'>
                <label className="block tracking-wide text-[#464646] text-sm
            font-normal mb-2" htmlFor='states'>
              Sub category
            </label>
<input className="appearance-none block  border-2 border-[#DDDDDD] required w-80
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:outline-none focus:border-2 focus:border-[#800080]
            rounded-md h-[42px] px-4 mb-3 leading-tight " required
            id="grid-first-name" type="text" placeholder="" 
            value={ItemName} onChange={(e)=> setItemName(e.target.value)} />
            </div>
             <div>
             <button className="font-normal  bg-[#800080] text-[white] flex rounded-md py-2 my-6 text-[13px] px-3 mx-auto
      cursor-pointer opacity-100" onClick={createSubCategoryHandler}>Submit</button>
             </div>
                </div>
               
              </div> 
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
   </>
  )
}

export default SubCategoryModal