import React, { useEffect, useState } from 'react';
import { BsCameraReelsFill } from 'react-icons/bs';
import { RiCameraLensLine } from 'react-icons/ri';
import { AiFillTool } from 'react-icons/ai';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';

const icons = [
  <BsCameraReelsFill size={40} />,
  <RiCameraLensLine size={40} />,
  <AiFillTool size={40} />,
  <FaRegLightbulb size={40} />,
  <MdMovie size={40} />,
];

const IconAnimation = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIcon((prevIcon) => (prevIcon + 1) % icons.length);
        setIsVisible(true);
      }, 1350); // La duración debe coincidir con la duración de la transición
    }, 2700); // Cambia de ícono cada 1.5 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {icons[currentIcon]}
    </div>
  );

};

export default IconAnimation;