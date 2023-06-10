import DataTable from "react-data-table-component";
import {tableDummyData} from "../constants/tableDummyData"
import {AiFillEdit} from "react-icons/ai";
import {BsFillTrashFill} from "react-icons/bs"
import CategoryModal from "../components/CategoryModal";
import { useEffect, useState } from "react";
import SubCategoryModal from "../components/SubCategoryModal";
import ProductModal from "../components/ProductModal";
import ProductCardComponent from "../components/ProductCardComponent";
import { useSelector } from "react-redux";
import axios from "../api/axios";
import EditProduct from "../components/EditProduct";

const columns = [
  {
    name: "Property Name",
    selector: row => row.property_name,
    sortable: true,
  },
  {
    name: "Category",
    selector: row => row.category,
    sortable: true,
  },
  {
    name: "Sub Category",
    selector: row => row.sub_category,
    sortable: true,
  },
  {
    name: "Product",
    selector: row => row.sub_category,
    sortable: true,
  },
  {
    name: "Edit",
    selector: row => <AiFillEdit/>,
    sortable: true,
  },
  {
    name: "Delete",
    selector: row => <BsFillTrashFill/>,
    sortable: true,
  },
];



const AddSubCategory = () => {
  const [showModal, setShowModal] = useState(false)
  const [fetchProduct, setfetchProduct] = useState(false) 
  const accessToken = useSelector(store => store?.login?.userData[0]) 
  const PropertyNo = useSelector(store => store?.property?.propertyNumber)
  const [product, setproduct] = useState(null) 
  const [edit, setEdit] = useState(false)
  const [deletePopup, setDeletePopup] = useState(false)

  const  createCategoryHandler = () => {
    setShowModal(true)
  } 

  const fun = () => {
    setEdit(false)
  }

  useEffect(()=>{
    console.log("useEffect")
    const getProductData = async () => {
      try {
        const options = {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }}
        const response = await axios.get(`/api/property/${PropertyNo}/product`, options);
        console.log(response?.data);
        setproduct(response?.data)
      }
      catch (error) {
        console.log(error);
      }
    } 
    getProductData()
  },[]) 

  useEffect(()=>{
    console.log("useEffect")
    const getProductData = async () => {
      try {
        const options = {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }}
        const response = await axios.get(`/api/property/${PropertyNo}/product`, options);
        console.log(response?.data);
        setproduct(response?.data)
      }
      catch (error) {
        console.log(error);
      }
    } 
    getProductData()
  },[fetchProduct, edit, deletePopup]) 
    
  return (
    <>
      {
        showModal && <ProductModal setShowModal={setShowModal} setfetchProduct={setfetchProduct} />
      }
      <button className="font-normal  bg-[#800080] text-[white] flex items-center 
      rounded-md py-2 my-6 text-[13px] px-3 ml-auto cursor-pointer opacity-100" 
      onClick={ createCategoryHandler}>Create Product</button>
      {
        edit ? 
          <div>
            <EditProduct
              product={product}
              setfetchProduct={setfetchProduct}
    
              setEdit={fun}
            />
          </div> 
          : 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2 py-3 md:px-6">
            {
              product?.map(product => (
                <div>
                  <ProductCardComponent product={product} setEdit={setEdit} 
                    setfetchProduct={setfetchProduct}
                    deletePopup={deletePopup} 
                    setDeletePopup={setDeletePopup}
                  />
                </div>
              ))
            }
          </div>
      }
    </>
   
  );
}

export default AddSubCategory