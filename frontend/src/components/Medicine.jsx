import React from "react";

const Medicine = ({ medicamento, frecuencia, cantidad, tipo, children }) => {
  const getImageSrc = () => {
    if (tipo === 1) {
      return "src/images/icono_jeringa.png";
    } else if (tipo === 2) {
      return "src/images/icono_pastillas.png";
    } else {
      return "src/images/icono_verde.png";
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center mt-4">
          <img
            src={getImageSrc()}
            alt="Icono Medicamento 1"
            className="inline-block max-w-[50px] mr-2"
          />
          <p className="text-cyan-400 text-2xl font-bold">{medicamento}</p>
          <p className="text-yellow-400 text-2xl font-bold ml-2">
            ({cantidad})
          </p>
        </div>
        <div className="flex items-center">
          <img
            src="src/images/icono_reloj.png"
            alt="Icono Reloj"
            className="inline-block max-w-[30px] mr-2"
          />
          <p className="text-blue-300 text-2xl font-bold">{frecuencia}</p>
        </div>
      </div>
      <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-2 mt-2">
        <p className="text-black">{children}</p>
      </div>
    </div>
  );
};

export default Medicine;
