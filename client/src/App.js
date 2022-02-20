import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/Signin";
import SignUp from "./components/SignUp/SignUp";
import HomePage from "./components/HomePage/HomePage";
import ManReg from "./components/Form/ManReg";
import SupReg from "./components/Form/SupReg";
import MedReg from "./components/Form/Medicine";
import Qr from "./components/QR/Qr"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="SupReg" element={<SupReg/>}/> 
      <Route path="/ManReg/MedReg" element={<MedReg/> }/>
      <Route path="SignUp" element={<SignUp />} />
      <Route path="ManReg" element={<ManReg />} />
      <Route path="Register" element={<Register />} />
      <Route path="SignIn" element={<SignIn/>} />
      <Route path="Qr"    element={<Qr/>}/>
      
    </Routes>
    

   
     
      
    </BrowserRouter>
  );
}

export default App;
