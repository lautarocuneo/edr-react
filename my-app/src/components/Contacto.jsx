import React from "react";
import Map from "./Map";
import ContactUs from "./ContactUs";
import { FiPhone, FiMail, FiInstagram, FiMapPin } from "react-icons/fi";

const Contacto = () => {
  return (
    <section
      className="
        relative isolate overflow-clip
        bg-[#0B0B0C] text-white
        before:content-[''] before:absolute before:-top-24 before:-left-24
        before:w-[28rem] before:h-[28rem]
        before:bg-[radial-gradient(circle_at_center,rgba(42,134,226,0.18),transparent_60%)]
        after:content-[''] after:absolute after:-bottom-28 after:-right-24
        after:w-[38rem] after:h-[38rem]
        after:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]
      "
    >
      <div className="max-w-[1240px] mx-auto px-6 py-20">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-[#2A86E2] font-semibold tracking-widest">CONTACTO</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-3">
            Hacenos tu pedido y lo presupuestamos
          </h1>
          <p className="text-gray-400 mt-2">
            Respondemos rápido. También podés escribirnos por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda: Mapa + info */}
          <div className="space-y-6">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2A86E2] via-transparent to-[#2A86E2]/40">
              <div className="rounded-2xl bg-[#0B0B0C] p-5 md:p-6">
                <div className="rounded-xl overflow-hidden ring-1 ring-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                  <Map />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <Info icon={<FiMapPin />} title="Estamos en" text="Chorroarín 486, Agronomía – CABA" />
                  <Info icon={<FiMail />} title="Mail" text="contacto@equiposderodaje.com" href="mailto:contacto@equiposderodaje.com" />
                  <Info icon={<FiPhone />} title="WhatsApp" text="+54 9 11 6298 3716" href="https://wa.me/5491162983716" />
                  <Info icon={<FiInstagram />} title="Instagram" text="@equiposderodaje" href="https://www.instagram.com/equiposderodaje/" />
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario con glow seguro */}
          <div className="relative overflow-hidden isolate rounded-2xl">
            {/* Glow sin blur (no rompe ancho) */}
            
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-[#2A86E2] via-white/10 to-[#2A86E2]/50">
              <div className="rounded-2xl bg-[#0B0B0C] p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Decinos qué necesitás</h3>
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Info = ({ icon, title, text, href }) => {
  const Content = (
    <div className="flex items-start gap-3 group">
      <div className="shrink-0 mt-0.5 text-[#2A86E2]">{icon}</div>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-gray-400">{title}</p>
        <p className="text-sm text-gray-200 group-hover:text-white transition-colors">{text}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Content}
    </a>
  ) : (
    Content
  );
};

export default Contacto;
