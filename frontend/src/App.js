import React from "react";
import "./App.css";
import RegistrationForm from "./pages/RegistrationForm.jsx";
import { store } from "./store";
import { Provider } from "react-redux";
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
              <Route path="image" element={<AddImage />} />
            </Route>
          </Routes>
        </div>
      </Provider>
     
    </>
  );
}

export default App;
