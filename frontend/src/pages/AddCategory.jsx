import DataTable from 'react-data-table-component';
import {tableDummyData} from '../constants/tableDummyData'
import {AiFillEdit} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs'
import CategoryModal from '../components/CategoryModal';
import { useEffect, useState } from 'react';
import CategoryCardComponent from '../components/CategoryCardComponent';
import { useSelector } from 'react-redux';
import axios from '../api/axios';
import EditCategory from '../components/EditCategory';
const columns = [
    {
        name: 'Property Name',
        selector: row => row.property_name,
        sortable: true,
    },
    {
        name: 'Category',
        selector: row => row.category,
        sortable: true,
    },
  {
      name: 'Edit',
    
      cell:(row) => <button onClick={()=>editHandler(row)} id={row.ID}> <AiFillEdit/></button>,
  },
  {
    name: 'Delete',
    cell:(row) => <button onClick={()=>deleteHandler(row)} id={row.ID}> <BsFillTrashFill/></button>,
},
];


// const editHandler = (row) => {
//     console.log(row)
// }


const deleteHandler = (row) => {
    console.log(row)
}

const AddCategory = () => {
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState(null) 
    const [indCategory, setIndCategory] = useState(null)
    const [fetchCategory, setfetchCategory] = useState(false) 
    const PropertyNo = useSelector(store => store?.property?.propertyNumber)
    const accessToken = useSelector(store => store?.login?.userData[0])
    const [edit, setEdit] = useState(false)
    const [ed, setE] = useState(false)

    useEffect(()=>{
      console.log(edit)
    },[edit])
    const fun = () => {
      setEdit(false)
    }
    useEffect(()=>{
      console.log(edit, PropertyNo)
      if(edit === false)
      {
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
      }
    },[edit])
    
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
   },[fetchCategory])

   useEffect(()=>{
    console.log("Category....",category)
   },[category])

   const  createCategoryHandler = () => {
        setShowModal(true)
   }
    
  return ( 
    <>
   {
    showModal && <CategoryModal setShowModal={setShowModal} setfetchCategory={setfetchCategory}/>
   }
   
    <button className="font-normal  bg-[#800080] text-[white] flex items-center 
      rounded-md py-2 my-6 text-[13px] px-3 ml-auto
      cursor-pointer opacity-100" onClick={ createCategoryHandler}>Create Category</button>
     {
      edit ? 
      <div>
      <EditCategory 
      category={category} 
      indCategory={indCategory}  
    
      setEdit={fun}
     />
     </div> 
     : 
       <div className="grid grid-cols-3 gap-3 px-2 py-3 md:px-6">
      {
          category?.map(category => (
          <div>
          <CategoryCardComponent 
          category={category} 
          setEdit={setEdit}
         
          setIndCategory={setIndCategory}/>
          </div>
          ))
      }   
   </div>
     }
    
    </> 
   
);
}

export default AddCategory