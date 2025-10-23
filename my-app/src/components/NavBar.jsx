import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EDR = "#2A86E2";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    if (location.pathname === "/catalogo") {
      setActiveLink("catalogo");
    } else {
      setActiveLink("home");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      // esperar a que se monte la home
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const LinkItem = ({ href, section, children, onClick, isRouterLink = false }) => {
    const isActive = activeLink === section;

    const baseClasses = "group relative inline-block cursor-pointer tracking-wide";
    const textClasses = [
      "relative z-10 select-none uppercase text-sm font-medium",
      isActive ? "text-[color:var(--edr)]" : "text-white",
      "transition-colors duration-200",
      !isActive ? "group-hover:text-[color:var(--edr)] delay-[300ms]" : "",
    ].join(" ");
    const underline1 = [
      "pointer-events-none absolute left-0 -bottom-1 h-[1px] w-full origin-left bg-white",
      "transition-transform duration-300",
      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
    ].join(" ");
    const underline2 = [
      "pointer-events-none absolute left-0 -bottom-1 h-[1px] w-full bg-[color:var(--edr)]",
      "transition-opacity duration-200",
      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 delay-[300ms]",
    ].join(" ");

    const linkContent = (
      <>
        <span className={textClasses}>{children}</span>
        <span className={underline1} />
        <span className={underline2} />
      </>
    );

    return (
      <li>
        {isRouterLink ? (
          <Link to={href} onClick={onClick} className={baseClasses} style={{ "--edr": EDR }}>
            {linkContent}
          </Link>
        ) : (
          <a href={href} onClick={onClick} className={baseClasses} style={{ "--edr": EDR }}>
            {linkContent}
          </a>
        )}
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
        <div className="flex items-center gap-8">
          <img
            src={`${process.env.PUBLIC_URL}/logos/edr-logo-3.svg`}
            alt="Logo EDR"
            className="h-20 w-auto"
            onClick={goHome}
            style={{ cursor: "pointer" }}
          />
        </div>

        <ul className="hidden md:flex space-x-10 font-light tracking-wide">
          <LinkItem
            href="#home"
            section="home"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink("home");
              goHome();
            }}
          >
            Inicio
          </LinkItem>

          <LinkItem
            href="/catalogo"
            section="catalogo"
            onClick={() => setActiveLink("catalogo")}
            isRouterLink
          >
            Catálogo
          </LinkItem>

          <LinkItem
            href="#rental"
            section="rental"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink("rental");
              scrollToSection("rental");
            }}
          >
            Rental de equipos
          </LinkItem>

          <LinkItem
            href="#nosotros"
            section="nosotros"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink("nosotros");
              scrollToSection("nosotros");
            }}
          >
            Nosotros
          </LinkItem>

          <LinkItem
            href="#contacto"
            section="contacto"
            onClick={(e) => {
              e.preventDefault();
              setActiveLink("contacto");
              scrollToSection("contacto");
            }}
          >
            Contacto
          </LinkItem>
        </ul>

        <div className="hidden md:flex items-center gap-5 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E1306C] transition-colors">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5491139457426" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors">
            <FaWhatsapp />
          </a>
        </div>

        <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>

        <div
          className={`fixed top-0 left-0 h-screen w-[70%] bg-[#181A1B]/95 backdrop-blur-md transform transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="uppercase p-6 text-lg space-y-6 tracking-wide">
            <LinkItem
              href="#home"
              section="home"
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("home");
                goHome();
                handleNav();
              }}
            >
              Inicio
            </LinkItem>

            <LinkItem
              href="/catalogo"
              section="catalogo"
              onClick={() => {
                setActiveLink("catalogo");
                handleNav();
              }}
              isRouterLink
            >
              Catálogo
            </LinkItem>

            <LinkItem
              href="#rental"
              section="rental"
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("rental");
                scrollToSection("rental");
                handleNav();
              }}
            >
              Rental de equipos
            </LinkItem>

            <LinkItem
              href="#nosotros"
              section="nosotros"
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("nosotros");
                scrollToSection("nosotros");
                handleNav();
              }}
            >
              Nosotros
            </LinkItem>

            <LinkItem
              href="#contacto"
              section="contacto"
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("contacto");
                scrollToSection("contacto");
                handleNav();
              }}
            >
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
