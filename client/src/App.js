import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Register from './components/Register/Register';
import Signin from './components/SignIn/Signin';
import SignUp from './components/SignUp/SignUp';
import HomePage from './components/HomePage/HomePage';
import ManReg from './components/Form/ManReg';
import SupReg from './components/Form/SupReg';
import MedReg from './components/Form/Medicine';


    function App() {
      return (
        <div className="bg-gray-900  h-screen flex justify-center ">
        
        
       <MedReg/>
        </div> 
    
      );
    }
    
    


export default App;
