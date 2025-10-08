// src/components/paginas/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";

import NavBar from "../NavBar";
import Footer from "../Footer";
import Contacto from "../Contacto";
import WhatsAppButton from "../WhatsAppIcon";

import CustomCarousel from "../CustomCarousel";
import Nosotros from "../Nosotros";
import Servicios from "../Servicios";


const LandingPage = () => {
  const slides = [
    { image: `${process.env.PUBLIC_URL}/fotos-carusel/1.png`, alt: "RED Komodo-X", link: "/productos/komodo-x" },
    { image: `${process.env.PUBLIC_URL}/fotos-carusel/2.png`, alt: "Alexa Mini LF", link: "/productos/zeiss-set" },
    { image: `${process.env.PUBLIC_URL}/fotos-carusel/3.png`, alt: "Luces Arri", link: "/productos/aputure" },
    { image: `${process.env.PUBLIC_URL}/fotos-carusel/4.png`, alt: "Ópticas", link: "/productos/grip" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.985 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }
    },
  };

  const revealProps = {
    variants: fadeIn,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div id="top" className="bg-gray-900">
      
      <WhatsAppButton />
      <NavBar />

      <div className="h-20" />

      <CustomCarousel slides={slides} />
      
      <motion.section {...revealProps}>
        <Servicios />
      </motion.section>


      <motion.section id="nosotros" {...revealProps}>
        <Nosotros />
      </motion.section>

      <motion.section id="contacto" className="relative bg-gray-800" {...revealProps}>
        <Contacto />
      </motion.section>

      <motion.section id="footer" className="relative bg-black text-white" {...revealProps}>
        <Footer />
      </motion.section>
    </div>
  );
};

export default LandingPage;