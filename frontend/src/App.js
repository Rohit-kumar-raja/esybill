import React, { useState } from "react";
import "./App.css";
import RegistrationForm from "./pages/RegistrationForm.jsx";
import { store } from "./store";
import { Provider } from "react-redux";
// import OTPVerificationModal from "./components/OTPVerificationModal.jsx";
import { Routes, Route } from "react-router-dom"
import LoginForm from "./pages/LoginForm.jsx";
import background from "./assets/BG.png";
import Dashboard from "./pages/Dashboard.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import AddProperty from "./pages/AddProperty.jsx";
import AddSubCategory from "./pages/AddSubCategory.jsx";
import AddCategory from "./pages/AddCategory.jsx"; 
import AddProduct from "./pages/AddProduct.jsx";
import Profile from "./pages/Profile.jsx";
import MyProperties from "./pages/MyProperties.jsx";
import AddImage from "./pages/AddImage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddContact from "./pages/AddContact.jsx";
import Hms from "./pages/Hms.jsx";
import Pricing from "./pages/Pricing.jsx";
import AboutUs from "./pages/AboutUs.jsx";

function App() {

  const [scrollProp, setScrollProp] = useState(false)

  return (
    <> 
    
      <Provider store={store}>
        <div 
          style={{ backgroundImage: `url(${background})` }} 
        >
          <Routes>
            <Route path="/" element={<HomePage scrollProp={scrollProp} setScrollProp={setScrollProp}/>}/>
            <Route path="/contact-us" element={<AddContact scrollProp={scrollProp}/>} />
            <Route path="/signup" element={ <RegistrationForm/> } />
            <Route path="login" element={ <LoginForm/> } />
            <Route path="dashboard" element={ <Dashboard/> }>
              <Route path="profile" element={<Profile />} />
              <Route path="properties" element={<MyProperties />} />
              <Route path="propertydetails" element={<PropertyDetails />} />
              <Route path="addproperty" element={<AddProperty />} />
              <Route path="category" element={<AddCategory  />} />
              <Route path="subcategory" element={<AddSubCategory />} />
              <Route path="product" element={<AddProduct />} />
              <Route path="image" element={<AddImage />} />
            </Route>
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="hms" element={<Hms />} />
            <Route path="rms" element={<Hms/>} />
            <Route path="cm" element={<Hms />} />
          </Routes>
        </div>
      </Provider>
     
    </>
  );
}

export default App;
