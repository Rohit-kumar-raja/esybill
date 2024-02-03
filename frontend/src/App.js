import React, { useState } from "react";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
// import OTPVerificationModal from "./components/OTPVerificationModal.jsx";
import background from "./assets/BG.png";
import Routes from "./routes";

function App() {

  const [scrollProp, setScrollProp] = useState(false)

  return (
    <Provider store={store}>
      <div 
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh"
        }} 
      >
        <Routes scrollProp={scrollProp} setScrollProp={setScrollProp}/>
      </div>
    </Provider>
  );
}

export default App;
