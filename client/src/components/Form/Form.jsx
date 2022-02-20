import React from 'react'
import Tilt from 'react-parallax-tilt';
import '../../../src/App.css';

export default function Form({name,func,btnName,text,link}) {
  return (
    <div className="App  bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-400 hover:to-blue-500   h-screen w-screen relative overflow-hidden flex justify-center items-center">
    <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
    <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
    <Tilt>
      <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-3xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <form className='h-full flex flex-col justify-evenly items-center'>
          <div className='p-2 text-white font-poppins text-2xl tracking-widest'>{name}</div>
          <input className="p-2" type="text" placeholder='e-mail' className='input-text'/>
          <input type="password" placeholder='password' className='input-text'/>
         

          <input type="Submit" className='animate-bounce cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
        </form>

        <h1 className="p-4 text-3xl  text-white">{text}</h1>
        {/*the button used for sign in/signup data*/}
        <button className='mt-4 animate-bounce cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 ' onClick={func}>{btnName}</button>
      </div>
    </Tilt>
  </div>
  )
}

