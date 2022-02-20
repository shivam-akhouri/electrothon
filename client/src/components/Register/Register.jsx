import React from 'react'

import Form1 from '../Form/Form1'
import { ReactComponent as Illustration1 } from '../../svgs/Seller.svg';

import { ReactComponent as Illustration } from '../../svgs/Human.svg';

function Register() {
  return (
    <div className="flex w-screen flex-row ">
    <Form1 name='supplier' img={<Illustration1/>}/>
    <Form1 name='manufacturer'/>
    <Form1 className="flex" name='consumer' img={<Illustration/>}/>
   
    
   
    </div>
  )
}


export default Register