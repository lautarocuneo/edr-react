// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [atTop, setAtTop] = useState(true);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (section) =>
    `hover:text-[#2A86E2] transition-colors duration-300 cursor-pointer ${
      activeLink === section ? "border-b-2 border-white pb-1" : ""
    }`;

  return (
    <div
      className={`fixed left-0 w-full z-50 
        ${atTop ? "top-8" : "top-0"} 
        bg-[#181A1B]/90 backdrop-blur-md`}
    >
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-6 text-white'>
        
        {/* Logo + Links */}
        <div className="flex items-center space-x-6">
          <img
            src={`${process.env.PUBLIC_URL}/logos/edr-logo-2.svg`}
            alt="Logoedr"
            className="h-20 w-auto"
          />
          <ul className='hidden md:flex space-x-6 font-medium'>
            <li><a href="#home" onClick={() => setActiveLink("home")} className={linkClass("home")}>Inicio</a></li>
            <li><a href="#catalogo" onClick={() => setActiveLink("catalogo")} className={linkClass("catalogo")}>Catálogo</a></li>
            <li><a href="#contacto" onClick={() => setActiveLink("contacto")} className={linkClass("contacto")}>Contacto</a></li>
            <li><a href="#nosotros" onClick={() => setActiveLink("nosotros")} className={linkClass("nosotros")}>Sobre nosotros</a></li>
          </ul>
        </div>

        {/* Redes */}
        <div className="hidden md:flex items-center space-x-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#1877F2]">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E1306C]">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5491139457426" target="_blank" rel="noreferrer" className="hover:text-[#25D366]">
            <FaWhatsapp />
          </a>
        </div>

        {/* Hamburguesa */}
        <div onClick={handleNav} className='block md:hidden z-50 cursor-pointer'>
          {nav ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28}/>}
        </div>

        {/* Menú mobile */}
        <div className={`fixed top-0 left-0 h-screen w-[70%] bg-[#181A1B]/95 backdrop-blur-md transform transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className='uppercase p-6 text-lg space-y-4'>
            <li><a href="#home" onClick={() => { setActiveLink("home"); handleNav(); }} className={linkClass("home")}>Inicio</a></li>
            <li><a href="#catalogo" onClick={() => { setActiveLink("catalogo"); handleNav(); }} className={linkClass("catalogo")}>Catálogo</a></li>
            <li><a href="#contacto" onClick={() => { setActiveLink("contacto"); handleNav(); }} className={linkClass("contacto")}>Contacto</a></li>
            <li><a href="#nosotros" onClick={() => { setActiveLink("nosotros"); handleNav(); }} className={linkClass("nosotros")}>Sobre nosotros</a></li>
          </ul>

          <div className="flex space-x-6 mt-6 text-2xl px-6">
            <FaFacebookF className="hover:text-[#1877F2] cursor-pointer"/>
            <FaInstagram className="hover:text-[#E1306C] cursor-pointer"/>
            <FaWhatsapp className="hover:text-[#25D366] cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
