// src/components/ProyectosEDR.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProyectosEDR.css";

const proyectos = [
  {
    image: "/fotos-proyectos-landing/3.png",
    title: "Videoclips",
    subtitle: "Producción audiovisual integral",
    link: "videoclips",
  },
  {
    image: "/fotos-proyectos-landing/1.png",
    title: "Cine",
    subtitle: "Rodajes en estudio y exteriores",
    link: "cine",
  },
  {
    image: "/fotos-proyectos-landing/2.png",
    title: "Series",
    subtitle: "Iluminación y cámara profesional",
    link: "series",
  },
  {
    image: "/fotos-proyectos-landing/4.png",
    title: "Junkets",
    subtitle: "Dirección cinematográfica",
    link: "junkets",
  },
];

const fotosProyectos = [
  "/fotos-junkets/489330238_18502234945053310_1313690475477092462_n.webp",
  "/fotos-junkets/491443443_18503070091053310_9148684906650339044_n.webp",
  "/fotos-junkets/496056494_18507637813053310_7155046492470142612_n.webp",
  "/fotos-junkets/496317224_18507638476053310_85331670240803590_n.webp",
  "/fotos-junkets/496424251_18508431823053310_7862029291009745842_n.webp",
  "/fotos-junkets/497290969_18508432414053310_2517191177628914827_n.webp",
  "/fotos-junkets/500414487_18510605185053310_2630236673198688016_n.webp",
  "/fotos-junkets/500466215_18510606325053310_7516431282796104215_n.webp",
  "/fotos-junkets/500648749_18510605719053310_2720011274011124748_n.webp",
];

function useMarqueeDistance() {
  const containerRef = useRef(null);
  const firstSetRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !firstSetRef.current) return;
    const measure = () => {
      const rect = firstSetRef.current.getBoundingClientRect();
      setDistance(Math.ceil(rect.width));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(firstSetRef.current);
    ro.observe(containerRef.current);
    window.addEventListener("load", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", measure);
    };
  }, []);

  return { containerRef, firstSetRef, distance };
}

const ProyectosEDR = () => {
  const navigate = useNavigate();
  const { containerRef, firstSetRef, distance } = useMarqueeDistance();
  const SPEED_PX_PER_SEC = 70;
  const durationSec = distance > 0 ? distance / SPEED_PX_PER_SEC : 8;

  const handleClick = (anchor) => {
    // Navegamos a /proyectos y pasamos el destino en estado
    navigate("/proyectos", { state: { scrollTo: anchor } });
  };

  return (
    <section className="bg-[#0B0B0C] text-gray-200 py-12 overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight text-left">
          PROYECTOS REALIZADOS
        </h2>

        {/* Globos de categorías */}
        <div className="proyectos-grid">
          {proyectos.map((p, i) => (
            <div
              key={i}
              onClick={() => handleClick(p.link)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {p.title}
                  </h3>
                  <p className="text-[#2A86E2] text-sm font-light">
                    {p.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carrusel infinito */}
        <div className="pedr-container" ref={containerRef}>
          <div
            className="pedr-track"
            style={{
              "--pedr-distance": `${distance}px`,
              "--pedr-duration": `${durationSec}s`,
            }}
          >
            <div className="pedr-set" ref={firstSetRef}>
              {fotosProyectos.map((foto, idx) => (
                <div key={`a-${idx}`} className="pedr-item">
                  <img src={foto} alt={`Proyecto ${idx + 1}`} draggable="false" />
                </div>
              ))}
            </div>
            <div className="pedr-set">
              {fotosProyectos.map((foto, idx) => (
                <div key={`b-${idx}`} className="pedr-item">
                  <img src={foto} alt={`Proyecto ${idx + 1}`} draggable="false" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectosEDR;
