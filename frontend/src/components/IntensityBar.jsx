import React from "react";

const IntensityBar = ({ intensidad }) => {
  const getIntensity = () => {
    if (intensidad === 1) {
      return "src/images/barra_nivel_1.png";
    } else if (intensidad === 2) {
      return "src/images/barra_nivel_2.png";
    } else if (intensidad === 3) {
      return "src/images/barra_nivel_3.png";
    } else if (intensidad === 4) {
      return "src/images/barra_nivel_4.png";
    } else {
      return "src/images/barra_nivel_5.png";
    }
  };

  const IntensityText = () => {
    if (intensidad === 1) {
      return (
        <p className="text-green-400 text-lg font-bold text-center">
          Sin intensidad
        </p>
      );
    } else if (intensidad === 2) {
      return (
        <p className="text-yellow-400 text-lg font-bold text-center">
          Intensidad leve
        </p>
      );
    } else if (intensidad === 3) {
      return (
        <p className="text-orange-400 text-lg font-bold text-center">
          Intensidad moderada
        </p>
      );
    } else if (intensidad === 4) {
      return (
        <p className="text-red-400 text-lg font-bold text-center">
          Intensidad alta
        </p>
      );
    } else {
      return (
        <p className="text-purple-400 text-lg font-bold text-center">
          Intensidad muy alta
        </p>
      );
    }
  };
  return (
    <>
      <img src={getIntensity()} className="w-[300px] mx-auto"></img>
      {IntensityText()}
    </>
  );
};

export default IntensityBar;
