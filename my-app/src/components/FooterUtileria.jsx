import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { GiSteampunkGoggles } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";

const ACCENT = "#b45309"; // óxido
const BORDER = "#5a2a07";

const FooterUtileria = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="py-12"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0b 0%, #090909 60%, #070707 100%)",
        borderTop: `1px solid ${BORDER}55`,
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 text-center text-gray-300">
        <img
          src={`${process.env.PUBLIC_URL}/logos/ars-machina-logo.svg`}
          alt="Ars Machina Argentina"
          className="mx-auto h-16 w-auto mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={() => scrollToSection("top")}
        />

        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://www.facebook.com/profile.php?id=100067727385586"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877F2] transition-colors duration-300"
          >
            <FaFacebookSquare size={28} />
          </a>
          <a
            href="https://www.instagram.com/ars_machina_argentina/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E1306C] transition-colors duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.instagram.com/equiposderodaje/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--accent)] transition-colors duration-300"
            style={{ "--accent": ACCENT }}
          >
            <GiSteampunkGoggles size={28} />
          </a>
        </div>

        <div className="flex justify-center">
          <div>
            <h6
              className="font-semibold text-white mb-3 tracking-wide cursor-pointer hover:text-[color:var(--accent)] transition-colors duration-300"
              style={{ "--accent": ACCENT }}
              onClick={() => scrollToSection("top")}
            >
              Home
            </h6>
            <ul className="flex items-center justify-center gap-6">
              <li
                className="text-sm hover:text-[color:var(--accent)] transition-colors duration-300 cursor-pointer"
                style={{ "--accent": ACCENT }}
                onClick={() => navigate("/proyectos")}
              >
                Proyectos
              </li>
              <li
                className="text-sm hover:text-[color:var(--accent)] transition-colors duration-300 cursor-pointer"
                style={{ "--accent": ACCENT }}
                onClick={() => navigate("/catalogo")}
              >
                Catálogo
              </li>
              <li
                className="text-sm hover:text-[color:var(--accent)] transition-colors duration-300 cursor-pointer"
                style={{ "--accent": ACCENT }}
                onClick={() => navigate("/#contacto")}
              >
                Contacto
              </li>
            </ul>
          </div>
        </div>

        <div
          className="h-[1px] w-2/3 mx-auto my-10"
          style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}55, transparent)` }}
        />

        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>© {new Date().getFullYear()} Ars Machina • Argentina. Todos los derechos reservados.</p>
          <p>Privacidad | Términos y condiciones</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterUtileria;
