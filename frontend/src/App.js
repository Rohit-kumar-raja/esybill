import React from "react";
import "./App.css";
import RegistrationForm from "./pages/RegistrationForm";
import { store } from "./store";
import { Provider } from 'react-redux';
import OTPVerificationModal from "./components/OTPVerificationModal";

function App() {
  return (
    <>
    <Provider store={store}>
    <RegistrationForm/>
    {/* <OTPVerificationModal/> */}
    </Provider>
    
    </>
  );
}

export default App;
