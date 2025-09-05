import React, { useState } from "react";

export default function Newbtnn() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative w-20 h-7 rounded-full transition-colors duration-300 flex items-center m-40`}
      style={{
        backgroundColor: isDark ? "#374151" : "#ffffff", // gray-700 : white
        boxShadow: "inset 2px 2px 2px #babecc, inset -2px -2px 2px #ffffff",
      }}
    >
      {/* Knob */}
      <div
        className={`absolute top-1 w-6 h-5 rounded-full shadow-md transform transition-transform duration-300`}
        style={{
          backgroundColor: isDark ? "#facc15" : "#d4eafa", // yellow-400 : custom blue
          transform: isDark ? "translateX(48px)" : "translateX(4px)", // moves knob
        }}
      ></div>

      {/* Moon icon */}
      <span className="absolute left-2 top-0.5 text-[20px] text-gray-200">
        <ion-icon name="moon-outline"></ion-icon>
      </span>

      {/* Sun icon */}
      <span className="absolute right-2 top-0.5 text-[20px] text-yellow-400">
        <ion-icon name="sunny-outline"></ion-icon>
      </span>
    </button>
  );
}