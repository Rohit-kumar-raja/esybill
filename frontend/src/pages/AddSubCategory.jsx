import DataTable from 'react-data-table-component';
import {tableDummyData} from '../constants/tableDummyData'
import {AiFillEdit} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs'
import CategoryModal from '../components/CategoryModal';
import { useState } from 'react';
import SubCategoryModal from '../components/SubCategoryModal';
import SubcategoryCardComponent from '../components/SubcategoryCardComponent';
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
      name: 'Sub Category',
      selector: row => row.sub_category,
      sortable: true,
  },
  {
      name: 'Edit',
      selector: row => <AiFillEdit/>,
      sortable: true,
  },
  {
    name: 'Delete',
    selector: row => <BsFillTrashFill/>,
    sortable: true,
},
];



const AddSubCategory = () => {
    const [showModal, setShowModal] = useState(false)

    const  createCategoryHandler = () => {
        setShowModal(true)
    }
    
  return (
    <>
   {
    showModal && <SubCategoryModal setShowModal={setShowModal} />
   }
    <button className="font-normal  bg-[#800080] text-[white] flex items-center 
      rounded-md py-2 my-6 text-[13px] px-3 ml-auto
      cursor-pointer opacity-100" onClick={ createCategoryHandler}>Create Sub Category</button>

    {/* <DataTable
        columns={columns}
        data={tableDummyData}
        pagination
    /> */}
      <div className="grid grid-cols-3 gap-3 px-2 py-3 md:px-6">
        <div>
        <SubcategoryCardComponent/>
        </div>
        <div>
        <SubcategoryCardComponent/>
        </div>
        <div>
        <SubcategoryCardComponent/>
        </div>
        
    </div>
    

    </>
   
);
}

export default AddSubCategory