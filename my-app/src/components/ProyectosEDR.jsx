import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ProyectosEDR.css"; // usa clases pedr-*

const proyectos = [
  {
    image: "/fotos-proyectos-landing/3.png",
    title: "Videoclips",
    subtitle: "Producción audiovisual integral",
    link: "/videoclips",
  },
  {
    image: "/fotos-proyectos-landing/1.png",
    title: "Películas",
    subtitle: "Rodajes en estudio y exteriores",
    link: "/peliculas",
  },
  {
    image: "/fotos-proyectos-landing/2.png",
    title: "Series",
    subtitle: "Iluminación y cámara profesional",
    link: "/series",
  },
  {
    image: "/fotos-proyectos-landing/4.png",
    title: "Junkets",
    subtitle: "Dirección cinematográfica",
    link: "/junkets",
  },
];

// TODAS tus fotos
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
  "/fotos-junkets/504007642_18516714304053310_3380497637013766334_n.webp",
  "/fotos-junkets/510959016_18516717178053310_471987786545082455_n.webp",
  "/fotos-junkets/516379145_18519680062053310_4585512911050619365_n.webp",
  "/fotos-junkets/516748245_18519680278053310_1495768751993454558_n.webp",
  "/fotos-junkets/521865234_18521488780053310_2438374760045929077_n.webp",
  "/fotos-junkets/527571870_18524604298053310_2079690771975684606_n.webp",
  "/fotos-junkets/527578134_18524218243053310_1774153146600541039_n.webp",
  "/fotos-junkets/529704883_18525336904053310_7218648846254408889_n.webp",
  "/fotos-junkets/530316052_18525335863053310_8875891018052062999_n.webp",
  "/fotos-junkets/534833031_18526885852053310_98281404210506380_n.webp",
  "/fotos-junkets/541959818_18530712166053310_8449443615522460092_n.webp",
  "/fotos-junkets/544346388_18531578683053310_6368362067933925550_n.webp",
  "/fotos-junkets/544909476_18530492779053310_9024061331574552522_n.webp",
  "/fotos-junkets/545128887_18531578983053310_5442948539464643433_n.webp",
  "/fotos-junkets/545246462_2220852741759732_2227850355813749048_n.jpg",
  "/fotos-junkets/547901706_18532402006053310_710874642627253009_n.webp",
  "/fotos-junkets/549573382_18532482127053310_1119165645007676439_n.webp",
  "/fotos-junkets/550355604_18532481833053310_3101005047708063670_n.webp",
  "/fotos-junkets/550679425_18533103151053310_5474140825300125585_n.webp",
  "/fotos-junkets/551502152_18533103811053310_5300392079738324149_n.webp",
  "/fotos-junkets/552806713_18534268975053310_4291798376626626237_n.webp",
  "/fotos-junkets/553047006_18534271039053310_7246936794402907111_n.webp",
  "/fotos-junkets/553136468_18534268489053310_6729681214803276683_n.webp",
  
];

function useMarqueeDistance() {
  const containerRef = useRef(null);
  const firstSetRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !firstSetRef.current) return;

    const measure = () => {
      // Ancho EXACTO del primer set (todas las cards + gaps)
      const rect = firstSetRef.current.getBoundingClientRect();
      setDistance(Math.ceil(rect.width)); // redondeo para evitar subpíxeles que “salten”
    };

    // Medimos al montar
    measure();

    // Re-medimos al resize
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
  const { containerRef, firstSetRef, distance } = useMarqueeDistance();


  // Velocidad: cuanto más chico el número, más rápido (px/s)
  const SPEED_PX_PER_SEC = 70; // podés subir/bajar a gusto

  // Duración = distancia (un set) / velocidad
  const durationSec = distance > 0 ? (distance / SPEED_PX_PER_SEC) : 8; // fallback 8s

  return (
    <section className="bg-[#0B0B0C] text-gray-200 py-24 overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight text-left">
          PROYECTOS REALIZADOS
        </h2>

        {/* Grilla principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {proyectos.map((p, i) => (
            <a
              key={i}
              href={p.link}
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
            </a>
          ))}
        </div>

        {/* Carrusel infinito real */}
        <div
          className="pedr-container"
          ref={containerRef}
        >
          <div
            className="pedr-track"
            style={{
              // animamos exactamente la distancia de UN set
              "--pedr-distance": `${distance}px`,
              "--pedr-duration": `${durationSec}s`,
            }}
          >
            {/* Primer set (lo medimos) */}
            <div className="pedr-set" ref={firstSetRef}>
              {fotosProyectos.map((foto, idx) => (
                <div key={`a-${idx}`} className="pedr-item">
                  <img src={foto} alt={`Proyecto ${idx + 1}`} draggable="false" />
                </div>
              ))}
            </div>

            {/* Segundo set (clon para el loop) */}
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
