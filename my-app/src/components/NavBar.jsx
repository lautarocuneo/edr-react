// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const EDR = "#2A86E2";

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

  const LinkItem = ({ href, section, children, onClick }) => {
    const isActive = activeLink === section;

    return (
      <li>
        <a
          href={href}
          onClick={onClick}
          className="group relative inline-block cursor-pointer"
          style={{ ["--edr"]: EDR }}
        >
          {/* Texto: se pinta EDR con delay para coincidir con el final del barrido */}
          <span
            className={[
              "relative z-10 select-none",
              // base en blanco
              isActive ? "text-[color:var(--edr)]" : "text-white",
              // transición de color; en hover aplicamos EDR con delay 300ms
              "transition-colors duration-200",
              !isActive ? "group-hover:text-[color:var(--edr)] delay-[300ms]" : ""
            ].join(" ")}
          >
            {children}
          </span>

          {/* Barra blanca (debajo) que hace el barrido */}
          <span
            className={[
              "pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-white",
              "transition-transform duration-300",
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            ].join(" ")}
          />

          {/* Barra azul EDR (encima) que aparece cuando termina el barrido */}
          <span
            className={[
              "pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-[color:var(--edr)]",
              "transition-opacity duration-200",
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 delay-[300ms]"
            ].join(" ")}
          />
        </a>
      </li>
    );
  };

  return (
    <div
      className={`fixed left-0 w-full z-50 
        ${atTop ? "top-8" : "top-0"} 
        bg-[#070808]/90 backdrop-blur-md`}
    >
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-6 text-white">

        {/* Logo + Links */}
        <div className="flex items-center space-x-6">
          <img
            src={`${process.env.PUBLIC_URL}/logos/edr-logo-2.svg`}
            alt="Logoedr"
            className="h-20 w-auto"
          />
          <ul className="hidden md:flex space-x-6 font-medium">
            <LinkItem href="#home" section="home" onClick={() => setActiveLink("home")}>
              Inicio
            </LinkItem>
            <LinkItem href="#catalogo" section="catalogo" onClick={() => setActiveLink("catalogo")}>
              Catálogo
            </LinkItem>
            <LinkItem href="#contacto" section="contacto" onClick={() => setActiveLink("contacto")}>
              Contacto
            </LinkItem>
            <LinkItem href="#nosotros" section="nosotros" onClick={() => setActiveLink("nosotros")}>
              Sobre nosotros
            </LinkItem>
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
        <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
          {nav ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28}/>}
        </div>

        {/* Menú mobile */}
        <div className={`fixed top-0 left-0 h-screen w-[70%] bg-[#181A1B]/95 backdrop-blur-md transform transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="uppercase p-6 text-lg space-y-4">
            <LinkItem href="#home" section="home" onClick={() => { setActiveLink("home"); handleNav(); }}>Inicio</LinkItem>
            <LinkItem href="#catalogo" section="catalogo" onClick={() => { setActiveLink("catalogo"); handleNav(); }}>Catálogo</LinkItem>
            <LinkItem href="#contacto" section="contacto" onClick={() => { setActiveLink("contacto"); handleNav(); }}>Contacto</LinkItem>
            <LinkItem href="#nosotros" section="nosotros" onClick={() => { setActiveLink("nosotros"); handleNav(); }}>Sobre nosotros</LinkItem>
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
