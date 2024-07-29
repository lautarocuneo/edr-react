import React from 'react'
import { ReactTyped } from "react-typed";
import IconAnimation from './IconAnimation';

import { MdKeyboardDoubleArrowDown } from "react-icons/md";





const Hero = () => {
  return (
    <div className = "text-white hover:cursor-default ">
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#2A86E2] fond-bold p-2 md:text-3xl'>ALQUILA TUS EQUIPOS</p>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 py-3 mx-3'>Rental de equipos de rodaje y utilería</h1>
        <div>
          <p className='md:text-4xl sm:text-3xl text-xl font-medium md:pb-8 text-[#b3b6b7]'>Revisa nuestro catálogo y armá tu pedido</p>
          <div className='flex flex-col justify-center items-center'>
          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold pb-3'
            strings = {["Cámaras","Lentes","Grip", "Luces", "Utilería"]}
            typeSpeed = {120}
            backSpeed = {140} loop/>
          <IconAnimation/>
          </div>
        </div>
        
      </div>
      <div className="">
        <div className="absolute bottom-4 right-4">
          <MdKeyboardDoubleArrowDown size={60} color={"#2A86E2"} />
        </div>
      </div>
    </div>
  )
}

export default Hero