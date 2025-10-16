import React from "react";

/**
 * CaptionBannerEDR
 * - Caja “glass” con borde en gradiente
 * - Halos en radial-gradient (sin blur → no generan overflow ni scroll)
 * - Texto enfocado en Equipos de Rodaje
 */
const CaptionBannerEDR = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0C] text-gray-200 md:py-0">
      {/* Halos dentro del viewport (sin blur) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle at center, rgba(42,134,226,0.18), transparent 60%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,238,0.12), transparent 60%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12 relative">
        {/* Borde en gradiente con 1px usando wrapper */}
        <div
          className="rounded-2xl p-[1px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,134,226,.6), rgba(42,134,226,.1) 30%, transparent 60%, rgba(42,134,226,.4))",
          }}
        >
          <div className="rounded-2xl text-center bg-[#0B0B0C] px-6 md:px-10 py-8 md:py-10 ring-1 ring-white/5">
            {/* Kicker */}
            <h3 className="text-[12px] md:text-xs font-semibold tracking-[0.22em] text-[#2A86E2] uppercase">
              Equipos de Rodaje
            </h3>

            {/* Título */}
            <h2 className="mt-2 mb-5 text-2xl md:text-[26px] font-extrabold text-white leading-tight">
              Rental de equipos, utilería y servicio de dirección
            </h2>

            {/* Cuerpo */}
            <div className="space-y-4 md:space-y-5 text-[15px] md:text-[16px] leading-relaxed">
              <p>
                Nacimos para que{" "}
                <span className="text-white font-semibold">lo técnico no te frene</span>. Vos
                te enfocás en la historia; nosotros nos ocupamos del set.
              </p>

              <p>
                Ofrecemos{" "}
                <span className="text-white font-semibold">
                  cámaras, luces, grip, ópticas, audio, energía y utilería
                </span>{" "}
                con{" "}
                <span className="text-[#2A86E2] font-semibold">asistencia técnica</span>,
                testeo previo y logística.
              </p>

              <p>
                Armamos <span className="text-white font-semibold">paquetes a medida</span>,
                presupuestos claros y soporte en set para que todo sea{" "}
                <span className="text-white font-semibold">plug &amp; play</span> desde el
                primer cuadro.
              </p>

              <p>
                Nuestra misión es{" "}
                <span className="text-white font-semibold">
                  facilitar la realización técnica
                </span>{" "}
                para que las ideas fluyan sin fricciones y la creatividad se concentre en lo
                más importante:{" "}
                <span className="text-[#2A86E2] font-semibold">contar historias que dejen huella</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaptionBannerEDR;
