import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { GiSteampunkGoggles } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-[#181818] via-[#1a1a1a] to-[#181818] h-full text-gray-200 py-8'>
      <div className='max-w-[1240px] mx-auto px-4 text-center'>
        <img src={`${process.env.PUBLIC_URL}/logoedr.png`} alt="Logoedr" className='mx-auto h-24 w-auto mb-6' />
        <div className='flex justify-center space-x-6 mb-6'>
          <a href="https://www.facebook.com/profile.php?id=100067727385586" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={30} className='hover:text-[#2A86E2] transition-colors duration-300'/>
          </a>
          <a href="https://www.instagram.com/equiposderodaje/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className='hover:text-[#2A86E2] transition-colors duration-300'/>
          </a>
          <a href="https://www.instagram.com/ars_machina_argentina/" target="_blank" rel="noopener noreferrer">
            <GiSteampunkGoggles size={30} className='hover:text-[#e2862a] transition-colors duration-300'/>
          </a>
        </div>
        <div className='flex justify-center'>
          <div>
            <h6 className='font-medium text-gray-50 mb-2 hover:text-[#2A86E2] transition-colors duration-300'>
              <a href="#top">Home</a>
            </h6>
            <ul className='flex items-center justify-center gap-4'>
              <li className='py-2 text-sm hover:text-[#2A86E2] transition-colors duration-300'>
                <a href="#equipos">Rodaje</a>
              </li>
              <li className='py-2 text-sm hover:text-[#2A86E2] transition-colors duration-300'>
                <a href="#utileria">Utilería</a>
              </li>
              <li className='py-2 text-sm hover:text-[#2A86E2] transition-colors duration-300'>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li className='py-2 text-sm hover:text-[#2A86E2] transition-colors duration-300'>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center mt-8'>
        <p className='text-sm text-gray-500'>&copy; 2024 Equipos de Rodaje. Todos los derechos reservados.</p>
        <p className='text-sm text-gray-500'>Privacidad | Términos y condiciones</p>
      </div>
    </footer>
  );
}

export default Footer;
