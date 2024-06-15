import React from "react";
import IntensityBar from "./IntensityBar";

const Activity = ({ nombre, intensidad, duracion, frecuencia }) => {
  return (
    <section>
      <h2 className="text-cyan-400 text-2xl font-bold text-center mb-2">
        {nombre}
      </h2>
      <IntensityBar intensidad={intensidad}></IntensityBar>
      <div className="grid grid-cols-2 text-center mt-5 gap-x-12">
        <div className="flex flex-col items-center">
          <img
            src="src/images/icono_calendario.png"
            alt="Icono calendario"
            className="inline-block w-[50px] mb-1"
          />
          <p className="text-white text-md font-bold">
            {frecuencia} días / sem
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="src/images/icono_cronometro.png"
            alt="Icono reloj"
            className="inline-block w-[50px] mb-1"
          />
          <p className="text-white text-md font-bold">{duracion} horas</p>
        </div>
      </div>
    </section>
  );
};

export default Activity;
