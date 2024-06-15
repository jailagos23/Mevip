import React from "react";

const IconMain = ({ iconSrc, iconAlt, nombre }) => {
  return (
    <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
      <img
        src={iconSrc}
        alt={iconAlt}
        className="inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
      />
      <br />
      {nombre}
    </h1>
  );
};

export default IconMain;
