import React, { useState, useEffect } from 'react';

const ScrollHandle = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Función que maneja el evento de scroll
    function handleScroll() {
      // Obtener la posición actual del scroll
      const currentScrollY = window.scrollY;

      // Comparar la posición actual con la última posición
      if (currentScrollY < lastScrollY) {
        // Usuario está haciendo scroll hacia arriba
        setShowNavBar(true);
      } else {
        // Usuario está haciendo scroll hacia abajo
        setShowNavBar(false);
      }

      // Actualizar la última posición del scroll
      setLastScrollY(currentScrollY);
    }

    // Agregar el event listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependencia para que el efecto se ejecute cuando 'lastScrollY' cambie

  return (
    <nav className={`navbar ${showNavBar ? 'visible' : 'hidden'}`}>
      <h1>My NavBar</h1>
    </nav>
  );
};

export default ScrollHandle;
