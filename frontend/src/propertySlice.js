import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name:"property",
  initialState:{
    propertyDetails:[],
    fetchedProperties:[],
    propertyNumber:"",
    categoryDetails:"",
    subcategoryDetails:"",
    productDetails:"",
    menuType:""
  },
  reducers:{
    addPropertyDetails:(state, action) => {
      console.log(action.payload)
      state = state.propertyDetails.splice(0,1,action.payload)
    }, 
    addFetchedProperties:(state, action) => {
      state = state.fetchedProperties.push(action.payload)
      // state.fetchedProperties[(action.payload.val)] = action.payload.propertyDetail
    }, 
    addFetchedProperty:(state, action) => {
      //state.fetchedProperties[0][(action.payload.length)] = action.payload.propertyDetail
      state = state.fetchedProperties[0].push(action.payload.propertyDetail)
    }, 
    addPropertyNumber:(state,action) => {
      console.log(action.payload)
      state.propertyNumber = action.payload
    },
    getCategory:(state, action) => {
      state.categoryDetails = action.payload
    }, 
    getSubCategory:(state, action) => {
      state.subcategoryDetails = action.payload
    }, 
    getProduct:(state, action) => {
      state.productDetails = action.payload
    }, 
    addMenuType:(state, action) => { 
      state.menuType  = action.payload
    } 
  } 

})
export const {addPropertyDetails, addMenuType,addFetchedProperties, addFetchedProperty,getCategory,getSubCategory,
  addPropertyNumber, getProduct} = propertySlice.actions
export default propertySlice.reducer   