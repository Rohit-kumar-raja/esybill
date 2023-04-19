import React from "react";
import "./App.css";
import RegistrationForm from "./pages/RegistrationForm";
import { store } from "./store";
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={store}>
    <RegistrationForm/>
    </Provider>
    
    </>
  );
}

export default App;
