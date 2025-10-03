import React from "react";
import { motion } from "framer-motion";

// como LandingPage está dentro de components/paginas,
// el resto de componentes viven un nivel arriba en /components
import NavBar from "../NavBar";
import Equipos from "../Equipos";
import Utileria from "../Utileria";
import Footer from "../Footer";
import Nosotros from "../Nosotros";
import Contacto from "../Contacto";
import WhatsAppButton from "../WhatsAppIcon";
import TextSlider from "../TextSlider";
import CustomCarousel from "../CustomCarousel";

const LandingPage = () => {
  const slides = [
    { image: `${process.env.PUBLIC_URL}/fotos-carusel/1.png`, alt: "RED Komodo-X", link: "/productos/komodo-x" },
    { image: `${process.env.PUBLIC_URL}/fotos-carusel/2.png`, alt: "Alexa Mini LF", link: "/productos/zeiss-set" },
    { image: `${process.env.PUBLIC_URL}/fotos-carusel/3.png`, alt: "Luces Arri", link: "/productos/aputure" },
    { image: `${process.env.PUBLIC_URL}/fotos-carusel/4.png`, alt: "Ópticas", link: "/productos/grip" },
  ];

  // Fade-in puro (sin desplazamiento), al estilo "Dawn".
  // Curva suave: cubic-bezier(0.2, 0.7, 0.3, 1)
        const fadeIn = {
        hidden: { opacity: 0, scale: 0.985 },   // apenas más chico
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }
        },
        };

  // helper para no repetir props
  const revealProps = {
    variants: fadeIn,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 }, // dispara cuando ~20% entra en viewport
  };

  return (
    <div id="top">
      <TextSlider
        items={[
          "Alquiler de cámaras profesionales RED, Arri y Sony",
          "Lentes de cine anamórficos y prime disponibles",
          "Luces LED, tungsteno y HMI para rodajes",
          "Utilería variada para cine y publicidad",
          "Antigüedades únicas para props de época",
          "Grip, trípodes y accesorios de rodaje",
        ]}
      />
      <WhatsAppButton />
      <NavBar />

      {/* separador para header fijo */}
      <div className="h-20" />

      {/* hero con carrusel */}
      <CustomCarousel slides={slides}>
        <a
          href="#catalogo"
          className="px-5 py-2 bg-[#006ad4] text-white font-medium rounded-full shadow-lg
                     hover:bg-[#005bb5] transition-all duration-300 text-sm tracking-wide"
        >
          Ver Catálogo
        </a>
      </CustomCarousel>

      {/* secciones con fade-in puro al scrollear */}
      <motion.section id="equipos" className="relative bg-white" {...revealProps}>
        <Equipos />
      </motion.section>

      <motion.section id="utileria" className="relative bg-gray-50" {...revealProps}>
        <Utileria />
      </motion.section>

      <motion.section id="nosotros" className="relative bg-white" {...revealProps}>
        <Nosotros />
      </motion.section>

      <motion.section id="contacto" className="relative bg-gray-50" {...revealProps}>
        <Contacto />
      </motion.section>

      <motion.section id="footer" className="relative bg-black text-white" {...revealProps}>
        <Footer />
      </motion.section>
    </div>
  );
};

export default LandingPage;
