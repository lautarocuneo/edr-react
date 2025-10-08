// src/components/ProductSlider.jsx
import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Iconos para las flechas

const ProductSlider = ({ title, products }) => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Ajusta este valor para más o menos scroll
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl inline-block border-b-2 border-blue-500 pb-2">
            {title}
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Flecha izquierda */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 p-3 rounded-full 
                        text-white text-xl z-10 focus:outline-none transition-opacity duration-300
                        ${isHovering ? 'opacity-100' : 'opacity-0'} md:opacity-100`}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          {/* Contenedor del slider */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4" // 'scrollbar-hide' requiere un plugin de Tailwind
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-none w-64 md:w-80 h-56 snap-center bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 p-3 rounded-full 
                        text-white text-xl z-10 focus:outline-none transition-opacity duration-300
                        ${isHovering ? 'opacity-100' : 'opacity-0'} md:opacity-100`}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;