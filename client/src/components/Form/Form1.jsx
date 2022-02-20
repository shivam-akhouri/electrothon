import React from 'react'
import Tilt from 'react-parallax-tilt';
import '../../../src/App.css';
import { Link } from "react-router-dom";

function Form1({name,img,link}) {
  return (
    <div className="App bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-400 hover:to-blue-500   h-screen w-screen relative overflow-hidden flex justify-center items-center">
    <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
    
<div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
    
   <Tilt>

      <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <form className='h-full flex flex-col justify-evenly items-center '>
        <div className='text-white font-poppins text-4xl tracking-widest p-4'>{name}</div> 
        {img}
       
        </form>
       <Link to={link}> <input type="Submit" className='mt-4 cursor-pointer font-poppins rounded-full px-5 py-1 bg-green-400 hover:from-green-500 hover:to-blue-600 '/></Link>
       
      </div>
    </Tilt>
  </div>
  )
}

export default Form1