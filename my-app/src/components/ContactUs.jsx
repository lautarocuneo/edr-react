import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

const SERVICE_ID = "service_1dw7ben";
const TEMPLATE_ID = "template_820lu4r";
const PUBLIC_KEY = "8QXXbqKW4AeEFVYV0"; // guardalo en .env si querés

const ContactUs = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({
        type: "ok",
        msg: "¡Mensaje enviado! Te respondemos a la brevedad.",
      });
      formRef.current?.reset();
    } catch (err) {
      setStatus({
        type: "error",
        msg: "No pudimos enviar el mensaje. Probá de nuevo o escribinos por WhatsApp.",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
      <Field name="user_name" label="Nombre" icon={<FiUser />} placeholder="Tu nombre" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          name="user_email"
          type="email"
          label="Email"
          icon={<FiMail />}
          placeholder="tu@correo.com"
          required
        />
        <Field
          name="user_phone"
          label="Teléfono (opcional)"
          icon={<FiPhone />}
          placeholder="+54 9 ..."
        />
      </div>
      <Field
        as="textarea"
        name="message"
        label="Pedido / Detalle"
        icon={<FiMessageCircle />}
        placeholder="Contanos qué equipos necesitás, fechas, locación…"
        rows={5}
        required
      />

      {status.msg && (
        <div
          className={`text-sm rounded-md px-3 py-2 border ${
            status.type === "ok"
              ? "bg-[#2A86E2]/15 text-[#7fb6ff] border-[#2A86E2]/30"
              : "bg-[#e2862a]/10 text-[#ffc99e] border-[#e2862a]/30"
          }`}
        >
          {status.msg}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2A86E2] hover:bg-[#1f6fbc] disabled:opacity-60 disabled:cursor-not-allowed transition-colors px-4 py-3 font-semibold"
      >
        <FiSend />
        {loading ? "Enviando…" : "Enviar"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Al enviar aceptás nuestros Términos & Política de Privacidad.
      </p>
    </form>
  );
};

const Field = ({
  as,
  label,
  name,
  icon,
  placeholder,
  rows = 1,
  type = "text",
  required = false,
}) => {
  const Component = as === "textarea" ? "textarea" : "input";
  return (
    <label className="relative block">
      {/* Icono */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        {icon}
      </span>

      {/* Input */}
      <Component
        name={name}
        type={type}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full bg-[#0B0B0C] border border-white/10 focus:border-[#2A86E2] focus:ring-2 focus:ring-[#2A86E2]/20 rounded-xl pl-10 pr-3 py-3 outline-none text-sm text-gray-200 placeholder-gray-500 ${
          as === "textarea" ? "min-h-[140px]" : ""
        }`}
      />

      {/* Label flotante */}
      <span className="absolute -top-2 left-2 bg-[#0B0B0C] px-2 text-[11px] tracking-widest uppercase text-gray-400">
        {label}
      </span>
    </label>
  );
};

export default ContactUs;
