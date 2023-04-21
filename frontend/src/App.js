import React from "react";
import "./App.css";
import RegistrationForm from "./pages/RegistrationForm";
import { store } from "./store";
import { Provider } from 'react-redux';
import OTPVerificationModal from "./components/OTPVerificationModal";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import background from "./assets/BG.png";
import Dashboard from "./pages/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationForm/>,
  },
  {
    path:"/login",
    element:<LoginForm/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
]);

function App() {
  return (
    <>
   
    <Provider store={store}>
    <div style={{ backgroundImage: `url(${background})` }}>
    <RouterProvider router={router} />
    </div>
    </Provider>
    
    </>
  );
}

export default App;
