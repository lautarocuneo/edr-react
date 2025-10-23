import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/paginas/LandingPage";
import CatalogPage from "./components/paginas/CatalogPage";
import ProyectosPage from "./components/paginas/ProyectosPage"; // 👈 import del nuevo componente

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} /> {/* 👈 nueva ruta */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
