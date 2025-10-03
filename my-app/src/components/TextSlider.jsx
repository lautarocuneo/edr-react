import React from "react";

const TextSlider = ({ items }) => {
  return (
    <div className="relative z-40 w-full overflow-hidden bg-black h-8 flex items-center">
      <div className="flex whitespace-nowrap animate-slide-slow">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex">
            {items.map((text, i) => (
              <span
                key={i}
                className="mx-24 text-xs text-white tracking-wider font-normal"
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
