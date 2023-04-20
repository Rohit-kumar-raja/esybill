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
const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationForm/>,
    // loader: rootLoader,
  },
  {
    path:"/login",
    element:<LoginForm/>
  }
]);

function App() {
  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
    </>
  );
}

export default App;
