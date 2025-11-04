import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LandingPage from "./components/paginas/LandingPage";
import CatalogPage from "./components/paginas/CatalogPage";
import ProyectosPage from "./components/paginas/ProyectosPage";
import Utileria from "./components/paginas/Utileria"; // 👈 nueva landing

// ——— Scroll arriba en cada navegación (sin romper anchors #hash)
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // si hay #ancla, dejá que el browser haga su trabajo
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

// ——— Rutas animadas (para que funcione exit entre páginas)
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/utileria" element={<Utileria />} /> {/* 👈 nueva ruta */}
          {/* (opcional) 404:
          <Route path="*" element={<LandingPage />} /> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
