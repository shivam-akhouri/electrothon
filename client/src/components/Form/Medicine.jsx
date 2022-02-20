import React from 'react'
import Tilt from 'react-parallax-tilt';
import '../../../src/App.css';

function MedReg() {
  return (
    <div //style={{ 
       //backgroundImage: `url("https://9k.gg/BPjYw")`}}
       className="App  bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-400 hover:to-blue-500   h-screen w-screen relative overflow-hidden flex justify-center items-center">
    <div className="h-35-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
    <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
    <Tilt>
      <div className="container h-[36rem] w-[40rem] bg-white bg-opacity-10 rounded-3xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm align ">
        <form className=' h-full w-[40rem] flex flex-col justify-evenly items-center'>
          <div className='p-4 text-white font-poppins  tracking-widest text-2xl'>Medicine Registratino</div>
          <input type="text" placeholder='Manufacturing Id' className='input-text w-64'/>
          <input className="p-4" type="text" placeholder='medicine name' className='input-text  w-64'/>
         <input type="date" placeholder='manufacturing date' className='input-text  w-64'/>
          <input type="date" placeholder='expiry date' className='input-text  w-64'/>
          <input className="p-2" type="text" placeholder='dosage' className='input-text text-md  w-64'/>
         
          <input  type="tel"   placeholder='batch no. '  className='input-text  w-64'/>
        
         
         

          <input type="Submit" className='mt-4 animate-bounce cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
        </form>

      </div>
     
    </Tilt>
  </div>
  )
}

export default MedReg




