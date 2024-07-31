import React from 'react';

const FancyButton = ({ text = "ARS MACHINA ARGENTINA", color = "#e2862a", hoverColor = "#2A86E2" }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 rounded-full shadow-md group`}
      style={{ borderColor: color, color: color }}
    >
      <span
        className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform translate-x-full bg-black group-hover:translate-x-0"
        style={{ backgroundColor: hoverColor }}
      ></span>
      <span className="relative">{text}</span>
    </button>
  );
};

export default FancyButton;