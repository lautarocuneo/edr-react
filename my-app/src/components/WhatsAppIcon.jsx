// WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el ícono de WhatsApp

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/63601006" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 ease-in-out z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
