import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false); // Inicialmente, el menú está cerrado

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className='flex flex-row justify-stretch items-center z-10'>
        <img src={`${process.env.PUBLIC_URL}/logoedr.png`} alt="Logoedr" className='h-24 w-auto' />
        <h1 className='w-full text-2xl md:text-4xl font-medium text-[#2A86E2] flex-grow hover:cursor-default'>
          Equipos de Rodaje
        </h1>
      </div> 
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#2A86E2] transition-colors duration-300'>
          <a href="#equipos">Rodaje</a>
        </li>
        <li className='p-4 hover:text-[#2A86E2] transition-colors duration-300'>
          <a href="#utileria">Utilería</a>
        </li>
        <li className='p-4 hover:text-[#2A86E2] transition-colors duration-300'>
          <a href="#nosotros">Equipo</a>
        </li>
        <li className='p-4 hover:text-[#2A86E2] transition-colors duration-300'>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'absolute left-0 top-20 w-[60%] bg-[#202425] ease-in-out duration-700 z-0' : "absolute -translate-x-full ease-in-out duration-500 top-20 md:hidden"}>
        <ul className='uppercase p-5'>
          <li className='p-4 border-b border-[#2D3235] hover:text-[#2A86E2] transition-colors duration-300'>
            <a href="#top">Home</a>
          </li>
          <li className='p-4 border-b border-[#2D3235] hover:text-[#2A86E2] transition-colors duration-300'>
            <a href="#equipos">Rodaje</a>
          </li>
          <li className='p-4 border-b border-[#2D3235] hover:text-[#2A86E2] transition-colors duration-300'>
            <a href="#utileria">Utilería</a>
          </li>
          <li className='p-4 border-b border-[#2D3235] hover:text-[#2A86E2] transition-colors duration-300'>
            <a href="#nosotros">Equipo</a>
          </li>
          <li className='p-4 hover:text-[#2A86E2] transition-colors duration-300'>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
