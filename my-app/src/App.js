import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Equipos from "./components/Equipos";
import Utileria from "./components/Utileria";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import WhatsAppButton from "./components/WhatsAppIcon";

function App() {
  return (
    <div id = "top">
      <WhatsAppButton/>
      <NavBar/>
      <Hero/>
      <section id="equipos">
        <Equipos/>
      </section>
      <section id="utileria">
        <Utileria/>
      </section>
      <section id="nosotros">
        <Nosotros/>
      </section>
      <section id="contacto">
        <Contacto/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
