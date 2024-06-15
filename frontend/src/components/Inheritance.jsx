import React from "react";

const Inheritance = ({ patologia, familiar, sexo }) => {
  return (
    <div className="flex items-center m-2">
      <img
        src="src/images/icono_germen2.png"
        alt="Icono germen"
        className="inline-block max-w-[60px] mr-1"
      />
      <div>
        <p className="text-white text-2xl font-semibold">{patologia}</p>
        <div className="flex items-center">
          {sexo === "Femenino" ? (
            <>
              <img
                src="src/images/icono_mujer.png"
                alt="Icono femenino"
                className="inline-block max-w-[30px] ml-2 mr-1 mt-2"
              />
              <p className="text-pink-300 text-lg">{familiar}</p>
            </>
          ) : (
            <>
              <img
                src="src/images/icono_hombre.png"
                alt="Icono masculino"
                className="inline-block max-w-[30px] ml-2 mr-1 mt-2"
              />
              <p className="text-cyan-300 text-lg">{familiar}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inheritance;
