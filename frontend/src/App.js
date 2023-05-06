import React from "react";
import "./App.css";
import RegistrationForm from "./pages/RegistrationForm";
import { store } from "./store";
import { Provider } from 'react-redux';
import OTPVerificationModal from "./components/OTPVerificationModal";
import { Routes, Route } from "react-router-dom"
import LoginForm from "./pages/LoginForm";
import background from "./assets/BG.png";
import Dashboard from "./pages/Dashboard";
import PropertyDetails from "./pages/PropertyDetails";
import AddProperty from "./pages/AddProperty";
import AddSubCategory from "./pages/AddSubCategory";
import AddCategory from "./pages/AddCategory"; 
import AddProduct from "./pages/AddProduct";
import Profile from "./pages/Profile";
import MyProperties from "./pages/MyProperties";

function App() {
  return (
    <> 
   
    <Provider store={store}>
    <div style={{ backgroundImage: `url(${background})` }}>
    <Routes>
        <Route path="/" element={ <RegistrationForm/> } />
        <Route path="login" element={ <LoginForm/> } />
        <Route path="dashboard" element={ <Dashboard/> }>
            <Route path="profile" element={<Profile />} />
            <Route path="properties" element={<MyProperties />} />
            <Route path="propertydetails" element={<PropertyDetails />} />
            <Route path="addproperty" element={<AddProperty />} />
            <Route path="category" element={<AddCategory  />} />
            <Route path="subcategory" element={<AddSubCategory />} />
            <Route path="product" element={<AddProduct />} />
        </Route>
    </Routes>
    </div>
    </Provider>
     
    </>
  );
}

export default App;
