import React from "react";
import "./ProyectosEDR.css";

const proyectos = [
  {
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    title: "Videoclips",
    subtitle: "Producción audiovisual integral",
    link: "/videoclips",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Películas",
    subtitle: "Rodajes en estudio y exteriores",
    link: "/peliculas",
  },
  {
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    title: "Series",
    subtitle: "Iluminación y cámara profesional",
    link: "/series",
  },
  {
    image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80",
    title: "Documentales",
    subtitle: "Cobertura de producción completa",
    link: "/documentales",
  },
];

// 🔵 Carrusel de fotos de proyectos
const fotosProyectos = [
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1581093808360-1e7b89c2c8d1?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1616469829510-733d9d89d5fa?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1621803172688-2d4a7f6d0d1a?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1606813902873-3f75f3d44384?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1621803172688-2d4a7f6d0d1a?auto=format&fit=crop&w=400&q=60",
];

const ProyectosEDR = () => {
  return (
    <section className="bg-[#0B0B0C] text-gray-200 py-24 overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight text-left">
          PROYECTOS REALIZADOS
        </h2>

        {/* 🧱 Grilla principal (4 rectángulos verticales) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {proyectos.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Imagen vertical 3:4 */}
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-bold mb-1">{p.title}</h3>
                  <p className="text-[#2A86E2] text-sm font-light">{p.subtitle}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 🎞 Carrusel infinito de miniaturas cuadradas */}
        <div className="carousel-container">
          <div className="carousel-track">
            {[...fotosProyectos, ...fotosProyectos].map((foto, idx) => (
              <div key={idx} className="carousel-item">
                <img src={foto} alt={`Proyecto ${idx + 1}`} draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectosEDR;
