import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Equipos from "./components/Equipos";
import Utileria from "./components/Utileria";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Equipos/>
      <Utileria/>
      <Footer/>
    </div>
  );
}

export default App;
