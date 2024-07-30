import React, { useEffect } from "react";
import { ReactTyped } from "react-typed";
import IconAnimation from './IconAnimation';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallax = document.querySelector('.parallax-image');
      if (parallax) {
        parallax.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo con parallax */}
      <div className="absolute inset-0">
        <img 
          src="/atc-camera.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover parallax-image" // Aplica la clase para el parallax
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <div className="relative z-10 text-white text-center flex flex-col justify-center items-center h-full">
        <p className='text-[#2A86E2] font-bold p-2 md:text-3xl text-xl'>ALQUILÁ TUS EQUIPOS</p>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 py-3 mx-3'>
          Rental de equipos de rodaje y utilería
        </h1>
        <div>
          <p className='md:text-4xl sm:text-3xl text-xl font-medium md:pb-8 text-[#b3b6b7]'>
            Revisá nuestro catálogo y armá tu pedido
          </p>
          <div className='flex flex-col justify-center items-center'>
            <ReactTyped
              className='md:text-5xl sm:text-4xl text-xl font-bold pb-3 text-[#2A86E2]'
              strings={["Cámaras", "Lentes", "Grip", "Luces", "Utilería"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            <IconAnimation />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-20">
        <a href="#footer">
          <MdKeyboardDoubleArrowDown size={40} color={"#2A86E2"} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
