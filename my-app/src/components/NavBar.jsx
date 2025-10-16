import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const EDR = "#2A86E2";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => setNav(!nav);

  // 👉 efecto tipo Shopify: oculta el navbar al scrollear hacia abajo, lo muestra al subir
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false); // bajando → ocultar
      } else {
        setShowNav(true); // subiendo → mostrar
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const LinkItem = ({ href, section, children, onClick }) => {
    const isActive = activeLink === section;
    return (
      <li>
        <a
          href={href}
          onClick={onClick}
          className="group relative inline-block cursor-pointer tracking-wide"
          style={{ "--edr": EDR }}
        >
          <span
            className={[
              "relative z-10 select-none uppercase text-sm font-medium",
              isActive ? "text-[color:var(--edr)]" : "text-white",
              "transition-colors duration-200",
              !isActive ? "group-hover:text-[color:var(--edr)] delay-[300ms]" : "",
            ].join(" ")}
          >
            {children}
          </span>

          <span
            className={[
              "pointer-events-none absolute left-0 -bottom-1 h-[1px] w-full origin-left bg-white",
              "transition-transform duration-300",
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
            ].join(" ")}
          />
          <span
            className={[
              "pointer-events-none absolute left-0 -bottom-1 h-[1px] w-full bg-[color:var(--edr)]",
              "transition-opacity duration-200",
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 delay-[300ms]",
            ].join(" ")}
          />
        </a>
      </li>
    );
  };

  return (
    <div
      className={`fixed left-0 w-full z-50 bg-[#070808]/75 backdrop-blur-md transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center h-20 max-w-[1320px] mx-auto px-10 text-white">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <img
            src={`${process.env.PUBLIC_URL}/logos/edr-logo-3.svg`}
            alt="Logo EDR"
            className="h-20 w-auto"
          />
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex space-x-10 font-light tracking-wide">
          <LinkItem href="#home" section="home" onClick={() => setActiveLink("home")}>
            Inicio
          </LinkItem>
          <LinkItem href="#catalogo" section="catalogo" onClick={() => setActiveLink("catalogo")}>
            Catálogo
          </LinkItem>
          <LinkItem href="#rental" section="rental" onClick={() => setActiveLink("rental")}>
            Rental de equipos
          </LinkItem>
          <LinkItem href="#nosotros" section="nosotros" onClick={() => setActiveLink("nosotros")}>
            Nosotros
          </LinkItem>
          <LinkItem href="#contacto" section="contacto" onClick={() => setActiveLink("contacto")}>
            Contacto
          </LinkItem>
        </ul>

        {/* Redes */}
        <div className="hidden md:flex items-center gap-5 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1877F2] transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E1306C] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5491139457426"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#25D366] transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Hamburguesa */}
        <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>

        {/* Menú mobile */}
        <div
          className={`fixed top-0 left-0 h-screen w-[70%] bg-[#181A1B]/95 backdrop-blur-md transform transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="uppercase p-6 text-lg space-y-6 tracking-wide">
            <LinkItem href="#home" section="home" onClick={() => { setActiveLink("home"); handleNav(); }}>
              Inicio
            </LinkItem>
            <LinkItem href="#catalogo" section="catalogo" onClick={() => { setActiveLink("catalogo"); handleNav(); }}>
              Catálogo
            </LinkItem>
            <LinkItem href="#rental" section="rental" onClick={() => { setActiveLink("rental"); handleNav(); }}>
              Rental de equipos
            </LinkItem>
            <LinkItem href="#nosotros" section="nosotros" onClick={() => { setActiveLink("nosotros"); handleNav(); }}>
              Nosotros
            </LinkItem>
            <LinkItem href="#contacto" section="contacto" onClick={() => { setActiveLink("contacto"); handleNav(); }}>
              Contacto
            </LinkItem>
          </ul>

          <div className="flex gap-6 mt-8 text-2xl px-6">
            <FaFacebookF className="hover:text-[#1877F2] cursor-pointer" />
            <FaInstagram className="hover:text-[#E1306C] cursor-pointer" />
            <FaWhatsapp className="hover:text-[#25D366] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
