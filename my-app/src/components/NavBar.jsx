
import React, {useState} from 'react';

import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const NavBar = () => {

  const [nav, setNav] = useState(false); //aca pongo a nav como false

  const handleNav = () => {
    setNav(!nav);
  }



  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
      <div className='flex flex-row justify-stretch items-center z-10'>
         <img src={`${process.env.PUBLIC_URL}/logoedr.png`} alt="Logoedr" className='h-24 w-auto' />
         <h1 className='w-full text-2xl md:text-3xl font-medium text-[#2A86E2] flex-grow '>Equipos de Rodaje</h1>
      </div> 
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Rodaje</li>
            <li className='p-4'>Utileria</li>
            <li className='p-4'>Equipo</li>
            <li className='p-4'>Contacto</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'absolute left-0 top-20 w-[60%]  bg-[#202425] ease-in-out duration-700 z-0 ' : "absolute -translate-x-full ease-in-out duration-500 top-20 md:hidden"}>
          <ul className='uppercase p-5 '>
            <li className='p-4 border-b border-[#2D3235]'>Home</li>
            <li className='p-4 border-b border-[#2D3235]'>Rodaje</li>
            <li className='p-4 border-b border-[#2D3235]'>Utilería</li>
            <li className='p-4 border-b border-[#2D3235]'>Equipo</li>
            <li className='p-4'>Contacto</li>
          </ul>
        </div>
    </div>
    
  )




  
}

export default NavBar