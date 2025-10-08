import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { GiSteampunkGoggles } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-gray-300 py-12 border-t border-[#2A86E2]/10 ">
      <div className="max-w-[1240px] mx-auto px-6 text-center">
        {/* Logo */}
        <img
          src={`${process.env.PUBLIC_URL}/logoedr.png`}
          alt="Logo EDR"
          className="mx-auto h-20 w-auto mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300"
        />

        {/* Redes sociales */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://www.facebook.com/profile.php?id=100067727385586"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              size={30}
              className="hover:text-[#2A86E2] transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/equiposderodaje/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={30}
              className="hover:text-[#2A86E2] transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/ars_machina_argentina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiSteampunkGoggles
              size={30}
              className="hover:text-[#e2862a] transition-colors duration-300"
            />
          </a>
        </div>

        {/* Navegación */}
        <div className="flex justify-center">
          <div>
            <h6 className="font-semibold text-white mb-3 tracking-wide">
              <a
                href="#top"
                className="hover:text-[#2A86E2] transition-colors duration-300"
              >
                Home
              </a>
            </h6>
            <ul className="flex items-center justify-center gap-6">
              <li className="text-sm hover:text-[#2A86E2] transition-colors duration-300">
                <a href="#equipos">Rodaje</a>
              </li>
              <li className="text-sm hover:text-[#2A86E2] transition-colors duration-300">
                <a href="#utileria">Utilería</a>
              </li>
              <li className="text-sm hover:text-[#2A86E2] transition-colors duration-300">
                <a href="#nosotros">Nosotros</a>
              </li>
              <li className="text-sm hover:text-[#2A86E2] transition-colors duration-300">
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-2/3 bg-[#2A86E2]/10 mx-auto my-10" />

        {/* Derechos */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>&copy; 2024 Equipos de Rodaje. Todos los derechos reservados.</p>
          <p>Privacidad | Términos y condiciones</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
