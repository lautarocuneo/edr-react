import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/paginas/LandingPage";
import CatalogPage from "./components/paginas/CatalogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
