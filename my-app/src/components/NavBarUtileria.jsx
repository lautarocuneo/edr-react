import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ACCENT = "#b45309"; // óxido Ars Machina

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

  // === UTILERÍA ARS MACHINA ===
  "utileria",
  "utileria television",
  "utileria cine",
  "utileria fotografia",
  "utileria cientifica",

  "otros",
];

const NavBarUtileria = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("utileria");
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/catalogo") setActiveLink("catalogo");
    else if (location.pathname === "/proyectos") setActiveLink("proyectos");
    else if (location.pathname === "/utileria") setActiveLink("utileria");
    else setActiveLink("home");
  }, [location.pathname]);

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setNav(false);
  };

  const goToCatalogCategory = (cat) => {
    navigate(`/catalogo?cat=${encodeURIComponent(cat)}`);
    setShowDropdown(false);
    setNav(false);
  };

  const toggleDropdown = () => setShowDropdown((v) => !v);
  const handleNav = () => setNav((v) => !v);

  const LinkItem = ({
    href,
    section,
    children,
    onClick,
    isRouterLink = false,
    isDropdown = false,
  }) => {
    const isActive = activeLink === section;
    const base = "group relative inline-block cursor-pointer tracking-wide";
    const text = [
      "relative z-10 select-none uppercase text-sm font-medium",
      isActive ? "text-[color:var(--accent)]" : "text-white",
      "transition-colors duration-200",
      !isActive ? "group-hover:text-[color:var(--accent)] delay-[300ms]" : "",
    ].join(" ");
    const under1 = [
      "pointer-events-none absolute left-0 -bottom-1 h-[1px] w-full origin-left bg-white/70",
      "transition-transform duration-300",
      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
    ].join(" ");
    const under2 = [
      "pointer-events-none absolute left-0 -bottom-1 h-[1px] w-full",
      "transition-opacity duration-200",
      isActive
        ? "opacity-100 bg-[color:var(--accent)]"
        : "opacity-0 group-hover:opacity-100 delay-[300ms] bg-[color:var(--accent)]",
    ].join(" ");

    const inner = (
      <>
        <span className={text}>{children}</span>
        <span className={under1} />
        <span className={under2} />
      </>
    );

    return (
      <li className="relative" style={{ "--accent": ACCENT }}>
        {isRouterLink ? (
          <Link to={href} onClick={onClick} className={base}>
            {inner}
          </Link>
        ) : (
          <a href={href} onClick={onClick} className={base}>
            {inner}
          </a>
        )}
        {isDropdown && showDropdown && (
          <ul className="absolute left-0 mt-2 bg-[#0b0b0c]/95 backdrop-blur text-white rounded-lg shadow-xl w-52 z-50 overflow-hidden border border-white/10">
            <li
              onClick={() => navigate("/catalogo")}
              className="font-semibold border-b border-white/10 pb-2 mb-1 cursor-pointer hover:text-[color:var(--accent)] px-3 py-2"
              style={{ "--accent": ACCENT }}
            >
              Catálogo Completo
            </li>
            {CATEGORIES.map((cat) => (
              <li
                key={cat}
                onClick={() => goToCatalogCategory(cat)}
                className="capitalize px-3 py-2 hover:bg.white/5 hover:bg-white/5 cursor-pointer"
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
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="backdrop-blur-md border-b"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,8,8,0.78) 0%, rgba(7,8,8,0.55) 100%)",
          borderColor: `${ACCENT}33`,
        }}
      >
        <div className="flex justify-between items-center h-20 max-w-[1320px] mx-auto px-6 text-white">
          {/* LOGO */}
          <div className="flex items-center gap-6">
            <img
              src={`${process.env.PUBLIC_URL}/logos/ars-machina-logo.svg`}
              alt="Ars Machina"
              className="h-20 w-auto"
              onClick={goHome}
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex space-x-8 font-light tracking-wide">
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
            <LinkItem
              href="/utileria"
              section="utileria"
              isRouterLink
              onClick={() => setShowDropdown(false)}
            >
              Utilería
            </LinkItem>
            <LinkItem href="/#contacto" section="contacto" isRouterLink>
              Contacto
            </LinkItem>
            <LinkItem href="/#faq" section="faq" isRouterLink>
              FAQ
            </LinkItem>
          </ul>

          {/* ICONOS REDES */}
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
              href="https://instagram.com/ars.machina.ar"
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

          {/* MENU MOBILE */}
          <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
            {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </div>
        </div>
      </div>

      {/* DROPDOWN MOBILE */}
      {nav && (
        <div className="fixed top-20 left-0 w-full bg-[#0B0B0C]/95 backdrop-blur text.white text-white border-t border.white/10 border-white/10 z-40">
          <ul className="flex flex-col items-start p-6 space-y-4 text-lg">
            <li
              className="cursor-pointer hover.text-[color:var(--a)] hover:text-[color:var(--a)]"
              style={{ "--a": ACCENT }}
              onClick={goHome}
            >
              Inicio
            </li>
            <li
              onClick={() => setShowDropdown((v) => !v)}
              className="cursor-pointer hover:text-[color:var(--a)]"
              style={{ "--a": ACCENT }}
            >
              Catálogo
            </li>
            {showDropdown && (
              <ul className="ml-3 mt-2 space-y-2 text-sm text-gray-300">
                <li
                  onClick={() => navigate("/catalogo")}
                  className="cursor-pointer hover:text-white"
                >
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
              onClick={() => navigate("/proyectos")}
              className="cursor-pointer hover:text-[color:var(--a)]"
              style={{ "--a": ACCENT }}
            >
              Proyectos
            </li>
            <li
              onClick={() => navigate("/utileria")}
              className="cursor-pointer text-[color:var(--a)] font-medium"
              style={{ "--a": ACCENT }}
            >
              Utilería
            </li>
            <li
              onClick={() => navigate("/#contacto")}
              className="cursor-pointer hover:text-[color:var(--a)]"
              style={{ "--a": ACCENT }}
            >
              Contacto
            </li>
            <li
              onClick={() => navigate("/#faq")}
              className="cursor-pointer hover:text-[color:var(--a)]"
              style={{ "--a": ACCENT }}
            >
              FAQ
            </li>
            <div className="pt-4 flex items-center gap-5 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1877F2]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/ars_machina_argentina"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E1306C]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/5491162983716"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#25D366]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBarUtileria;
