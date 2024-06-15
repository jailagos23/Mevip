import React from "react";
import { Divider } from "@tremor/react";

const DataCard = ({ altura, peso, grasa, tipo_sangre }) => {
  return (
    <>
      <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
        <img
          src="src/images/icono_vascular.png"
          alt="Icono vascular"
          className={
            "inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
          }
        />
        <br />
        DATOS
      </h1>
      <Divider />
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <img
            src="src/images/icono_altura.png"
            alt="Icono Altura"
            className="inline-block max-w-[50px] mb-1"
          />
          <p className="text-white text-2xl font-bold">Altura</p>
          <p className="text-cyan-300 text-xl">{altura} cm</p>
        </div>

        <div>
          <img
            src="src/images/icono_grasa.png"
            alt="Icono Grasa"
            className="inline-block max-w-[50px] mb-1"
          />
          <p className="text-white text-2xl font-bold">Grasa</p>
          <p className="text-cyan-300 text-xl">{grasa}%</p>
        </div>

        <div>
          <img
            src="src/images/icono_peso.png"
            alt="Icono Peso"
            className="inline-block max-w-[50px] mb-1"
          />
          <p className="text-white text-2xl font-bold">Peso</p>
          <p className="text-cyan-300 text-xl">{peso} kg</p>
        </div>

        <div>
          <img
            src="src/images/icono_sangre.png"
            alt="Icono corazon"
            className="inline-block max-w-[50px] mb-1"
          />
          <p className="text-white text-2xl font-bold">Sangre</p>
          <p className="text-cyan-300 text-xl">{tipo_sangre}</p>
        </div>
      </div>
    </>
  );
};

export default DataCard;
