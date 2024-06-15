import React from "react";

const Pathology = ({ patologia }) => {
  return (
    <div className="flex items-center">
      <img
        src="src/images/icono_germen.png"
        alt="Icono Patología"
        className="inline-block max-w-[70px] mr-1"
      />
      <p className="text-white text-2xl font-semibold">{patologia}</p>
    </div>
  );
};

export default Pathology;
