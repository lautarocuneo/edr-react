import React from "react";
import "./ProductCarousel.css";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1616469829510-733d9d89d5fa?auto=format&fit=crop&w=1200&q=80",
    title: "Cámaras",
    link: "#camaras",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581093808360-1e7b89c2c8d1?auto=format&fit=crop&w=1200&q=80",
    title: "Luces",
    link: "#luces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617005081984-388a564d42e2?auto=format&fit=crop&w=1200&q=80",
    title: "Grip",
    link: "#grip",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621803172688-2d4a7f6d0d1a?auto=format&fit=crop&w=1200&q=80",
    title: "Trípodes",
    link: "#tripodes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606813902873-3f75f3d44384?auto=format&fit=crop&w=1200&q=80",
    title: "Ópticas",
    link: "#opticas",
  },
];

const ProductCarousel = () => {
  return (
    <section className="bg-[#0B0B0C] py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          EQUIPOS
        </h2>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[...products, ...products].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="carousel-item group"
              draggable="false"
            >
              <img
                src={item.image}
                alt={item.title}
                className="carousel-image"
              />
              <div className="carousel-overlay group-hover:opacity-100"></div>

              {/* Texto principal (categoría) */}
              <div className="carousel-text">
                <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-wide uppercase">
                  {item.title}
                </h3>
              </div>

              {/* Hover “Ver más” */}
              <div className="carousel-hover">
                <p className="text-[#2A86E2] text-sm sm:text-base font-medium">
                  Ver más →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
