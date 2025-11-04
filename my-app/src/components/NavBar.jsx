import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EDR = "#2A86E2";

const CATEGORIES = [
  "camara",
  "opticas",
  "filtros",
  "tripodes",
  "generadores",
  "luces",
  "griperia",
  "videoassist",
  "estabilizadores",
  "utileria",
  "otros",
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = () => setNav(!nav);

  // 🔹 Detecta ruta activa (incluye /utileria)
  useEffect(() => {
    if (location.pathname === "/catalogo") {
      setActiveLink("catalogo");
    } else if (location.pathname === "/proyectos") {
      setActiveLink("proyectos");
    } else if (location.pathname === "/utileria") {
      setActiveLink("utileria");
    } else {
      setActiveLink("home");
    }
  }, [location.pathname]);

  // 🔹 Oculta navbar al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNav(!(currentScroll > lastScrollY && currentScroll > 100));
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🔹 Scroll hacia el inicio
  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // 🔹 Ir a Utilería (landing dedicada)
  const goToUtileria = () => {
    if (location.pathname !== "/utileria") {
      navigate("/utileria");
    }
    setShowDropdown(false);
    setNav(false);
  };

  // 🔹 Scroll hacia la sección "Contacto"
  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("contacto");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const section = document.getElementById("contacto");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  // 🔹 Scroll hacia la sección "FAQ"
  const goToFaq = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("faq");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const section = document.getElementById("faq");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  // 🔹 Ir a categoría específica en catálogo
  const goToCatalogCategory = (cat) => {
    navigate(`/catalogo?cat=${cat}`);
    setShowDropdown(false);
    setNav(false);
  };

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  // ======= COMPONENTE LINK ITEM =======
  const LinkItem = ({
    href,
    section,
    children,
    onClick,
    isRouterLink = false,
    isDropdown = false,
  }) => {
    const isActive = activeLink === section;
    const baseClasses =
      "group relative inline-block cursor-pointer tracking-wide";
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

    return (
      <li className="relative">
        {isRouterLink ? (
          <Link
            to={href}
            onClick={onClick}
            className={baseClasses}
            style={{ "--edr": EDR }}
          >
            <span className={textClasses}>{children}</span>
            <span className={underline1} />
            <span className={underline2} />
          </Link>
        ) : (
          <a
            href={href}
            onClick={onClick}
            className={baseClasses}
            style={{ "--edr": EDR }}
          >
            <span className={textClasses}>{children}</span>
            <span className={underline1} />
            <span className={underline2} />
          </a>
        )}

        {/* === DROPDOWN CATÁLOGO === */}
        {isDropdown && showDropdown && (
          <ul
            className="absolute left-0 mt-2 bg-[#111]/95 text-white rounded-lg shadow-lg w-48 z-50 overflow-hidden
                       origin-top transition-all duration-200 ease-out transform scale-y-100 opacity-100"
          >
            <li
              onClick={() => navigate("/catalogo")}
              className="font-semibold border-b border-gray-700 pb-1 mb-1 cursor-pointer hover:text-[color:var(--edr)] px-3 py-2"
            >
              Catálogo Completo
            </li>
            {CATEGORIES.map((cat) => (
              <li
                key={cat}
                onClick={() => goToCatalogCategory(cat)}
                className="capitalize px-3 py-2 hover:bg-[#222] cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
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
        {/* LOGO */}
        <div className="flex items-center gap-8">
          <img
            src={`${process.env.PUBLIC_URL}/logos/edr-logo-5.svg`}
            alt="Logo EDR"
            className="h-16 w-auto"
            onClick={goHome}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* === MENU DESKTOP === */}
        <ul className="hidden md:flex space-x-10 font-light tracking-wide">
          <LinkItem href="#home" section="home" onClick={goHome}>
            Inicio
          </LinkItem>

          <LinkItem
            href="#"
            section="catalogo"
            onClick={toggleDropdown}
            isRouterLink
            isDropdown
          >
            Catálogo
          </LinkItem>

          <LinkItem href="/proyectos" section="proyectos" isRouterLink>
            Proyectos
          </LinkItem>

          {/* 🔸 NUEVO: Utilería (landing dedicada) */}
          <LinkItem href="/utileria" section="utileria" isRouterLink onClick={() => setShowDropdown(false)}>
            Utilería
          </LinkItem>

          {/* 🔹 Scroll a ContactUs */}
          <LinkItem href="#contacto" section="contacto" onClick={goToContact}>
            Contacto
          </LinkItem>

          <LinkItem href="#faq" section="faq" onClick={goToFaq}>
            FAQ
          </LinkItem>
        </ul>

        {/* === ICONOS REDES === */}
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
            href="https://instagram.com/equiposderodaje"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E1306C] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5491162983716"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#25D366] transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* === MENU MOBILE === */}
        <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* === DROPDOWN MOBILE === */}
      {nav && (
        <div className="fixed top-20 left-0 w-full bg-[#0F0F10]/95 text-white transition-all duration-300 ease-out transform origin-top z-40">
          <ul className="flex flex-col items-start p-6 space-y-4 text-lg">
            <li onClick={goHome} className="cursor-pointer hover:text-[color:var(--edr)]">
              Inicio
            </li>

            <li onClick={toggleDropdown} className="cursor-pointer hover:text-[color:var(--edr)]">
              Catálogo
            </li>

            {showDropdown && (
              <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-300 animate-fadeIn">
                <li onClick={() => navigate("/catalogo")} className="cursor-pointer hover:text-white">
                  Catálogo Completo
                </li>
                {CATEGORIES.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => goToCatalogCategory(cat)}
                    className="capitalize cursor-pointer hover:text-white"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}

            <li
              onClick={() => {
                goToUtileria();
              }}
              className="cursor-pointer hover:text-[color:var(--edr)]"
            >
              Utilería
            </li>

            <li onClick={() => navigate("/proyectos")} className="cursor-pointer hover:text-[color:var(--edr)]">
              Proyectos
            </li>

            {/* 🔹 Scroll a ContactUs en mobile */}
            <li onClick={goToContact} className="cursor-pointer hover:text-[color:var(--edr)]">
              Contacto
            </li>
            <li onClick={goToFaq} className="cursor-pointer hover:text-[color:var(--edr)]">
              FAQ
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
