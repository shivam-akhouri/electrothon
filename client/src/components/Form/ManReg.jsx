import React from 'react'
import Tilt from 'react-parallax-tilt';
import '../../../src/App.css';
import { Link } from "react-router-dom";

function ManReg() {
  return (
    <div //style={{ 
        // backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcrNWc8rQNaH8Qufc_lIjmK3YYbtw883rEg&usqp=CAU")`}} 
        className="App  bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-400 hover:to-blue-500   h-screen w-screen relative overflow-hidden flex justify-center items-center">
     <div className="h-35-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
     <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
     <Tilt>
       <div className="container h-[36rem] w-[40rem] bg-white bg-opacity-10 rounded-3xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm align ">
         <form className='h-full w-[40rem] flex flex-col justify-evenly items-center'>
           <div className='p-4 text-white font-poppins  tracking-widest text-2xl'>Manufacturer Register</div>
           <input type="text" placeholder='Name' className='input-text w-64'/>
           <input className="p-4" type="text" placeholder='company name' className='input-text  w-64'/>
          <input type="tel" placeholder='Pincode' className='input-text  w-64'/>
           <input type="tel" placeholder='Phone No.' className='input-text  w-64'/>
           <input className="p-2" type="text" placeholder='e-mail' className='input-text text-md  w-64'/>
           <textarea  type="textArea" placeholder='Adress' className='input-text p-2  w-64'/>
           <input  type="text" placeholder='something I forgot' className='input-text  w-64'/>
           <input  type="tel" placeholder='Govt. License' className='input-text mt-4 p-2  w-96'/>
          
          
 
           <Link to='/ManReg/MedReg'>  <input type="Submit" className='mt-4 animate-bounce-slow cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/></Link>
         </form>
 
       </div>
      
     </Tilt>
   </div>
  )
}

export default ManReg




