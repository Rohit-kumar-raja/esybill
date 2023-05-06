import DataTable from 'react-data-table-component';
import {tableDummyData} from '../constants/tableDummyData'
import {AiFillEdit} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs'
import CategoryModal from '../components/CategoryModal';
import { useState } from 'react';
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
    //   selector: row => <AiFillEdit/>,
      cell:(row) => <button onClick={()=>editHandler(row)} id={row.ID}> <AiFillEdit/></button>,
      //sortable: true,
  },
  {
    name: 'Delete',
    //selector: row => <BsFillTrashFill/>,
    //sortable: true,
    cell:(row) => <button onClick={()=>deleteHandler(row)} id={row.ID}> <BsFillTrashFill/></button>,
},
];

const editHandler = (row) => {
    console.log(row)
}

const deleteHandler = (row) => {
    console.log(row)
}

const AddCategory = () => {
    const [showModal, setShowModal] = useState(false)
    const  createCategoryHandler = () => {
        setShowModal(true)
    }
    
  return (
    <>
   {
    showModal && <CategoryModal setShowModal={setShowModal} />
   }
    <button className="font-normal  bg-[#800080] text-[white] flex items-center 
      rounded-md py-2 my-6 text-[13px] px-3 ml-auto
      cursor-pointer opacity-100" onClick={ createCategoryHandler}>Create Category</button>
    
      

    <DataTable
        columns={columns}
        data={tableDummyData}
        pagination
			//paginationServer
		//paginationComponentOptions={paginationComponentOptions}
    />

    </>
   
);
}

export default AddCategory