import React from "react";

const Allergy = ({ mediName, diagAlert, diagUrgency }) => {
  const getImageSrc = () => {
    if (diagUrgency === 3) {
      return "src/images/icono_rojo.png";
    } else if (diagUrgency === 2) {
      return "src/images/icono_amarillo.png";
    } else {
      return "src/images/icono_verde.png";
    }
  };

  return (
    <div className="flex items-center">
      <img
        src={getImageSrc()}
        alt="Icono triangulo de color"
        className="inline-block max-w-[60px] mr-2"
      />
      <div>
        <p className="text-white text-2xl font-semibold">{mediName}</p>
        {diagAlert === 1 ? (
          <p className="text-cyan-300 text-lg">Diagnosticado</p>
        ) : (
          <p className="text-cyan-300 text-lg">No diagnosticado</p>
        )}
      </div>
    </div>
  );
};

export default Allergy;
