import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { GiSteampunkGoggles } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-8'>
      <div className='max-w-[1240px] mx-auto px-4 text-center'>
        <img src={`${process.env.PUBLIC_URL}/logoedr.png`} alt="Logoedr" className='mx-auto h-24 w-auto mb-6' />
        <div className='flex justify-center space-x-6 mb-6'>
          <FaFacebookSquare size={30} className='hover:text-[#2A86E2] transition-colors duration-300'/>
          <FaInstagram size={30} className='hover:text-[#2A86E2] transition-colors duration-300'/>
          <GiSteampunkGoggles size={30} className='hover:text-[#2A86E2] transition-colors duration-300'/>
        </div>
        <div className='flex justify-center'>
          <div>
            <h6 className='font-medium text-gray-50 mb-2 hover:text-[#2A86E2] transition-colors duration-300'>Home</h6>
            <ul className='flex items-center justify-center gap-4'>
              <li className='py-2 text-sm hover:text-[#2A86E2] transition-colors duration-300'>Rodaje</li>
              <li className='py-2 text-sm hover:text-[#2A86E2] transition-colors duration-300'>Utilería</li>
              <li className='py-2 text-sm hover:text-[#2A86E2] transition-colors duration-300'>Equipo</li>
              <li className='py-2 text-sm hover:text-[#2A86E2] transition-colors duration-300'>Contacto</li>
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
