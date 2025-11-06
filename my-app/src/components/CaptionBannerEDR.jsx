import React from "react";

const CaptionBannerEDR = () => {
  return (
    <section className="relative overflow-visible bg-[#0B0B0C] text-gray-200 py-10 sm:py-12 md:py-14">
      {/* Halos (desbordan la sección sin cortarse) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 z-0 w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at center, rgba(42,134,226,0.18), transparent 60%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 z-0 w-[18rem] sm:w-[22rem] h-[18rem] sm:h-[22rem] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,238,0.12), transparent 60%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
        <div
          className="rounded-xl p-[1px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,134,226,.6), rgba(42,134,226,.1) 30%, transparent 60%, rgba(42,134,226,.4))",
          }}
        >
          <div className="rounded-xl text-center bg-[#0B0B0C] px-5 sm:px-7 py-8 sm:py-9 ring-1 ring-white/5">
            <h3 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#2A86E2] uppercase">
              Equipos de Rodaje
            </h3>

            <h2 className="mt-2 mb-4 text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem] font-bold text-white leading-snug">
              Rental de equipos, utilería y servicio de dirección
            </h2>

            <div className="space-y-3 sm:space-y-4 text-[13.5px] sm:text-[14.5px] leading-relaxed">
              <p>
                Nacimos para que{" "}
                <span className="text-white font-semibold">lo técnico no te frene</span>.
                Vos te enfocás en la historia; nosotros nos ocupamos del set.
              </p>

              <p>
                Ofrecemos{" "}
                <span className="text-white font-semibold">
                  cámaras, luces, grip, ópticas, audio, energía y utilería
                </span>{" "}
                con{" "}
                <span className="text-[#2A86E2] font-semibold">asistencia técnica y servicio de dirección de fotografía, </span> testeo previo y logística.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaptionBannerEDR;
