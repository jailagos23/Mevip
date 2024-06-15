import React from "react";
import { Card } from "@tremor/react";

const Header = ({
  nombre = "--",
  edad = "--",
  alt = "--",
  peso = "--",
  grasa = "--",
}) => {
  const IMC_cal = parseFloat(peso / alt ** 0.02).toFixed(2);

  return (
    <Card>
      <div className="h-32 bg-cyan-600 flex items-center rounded-xl p-3 shadow-lg">
        <div className="flex-2 ml-4">
          <img
            src="src/images/foto_perfil.png"
            alt="Foto de perfil"
            className="w-full max-w-[105px] h-auto rounded-3xl border-4 border-white shadow-md"
          />
        </div>

        <div className="flex-1 p-4">
          <div>
            <p className="text-white font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:text-2xl sm:text-xl text-lg bg-black bg-opacity-40 px-2 py-1 rounded-md inline-block">
              {nombre}
            </p>
          </div>
          <div className="mt-1">
            <p className="text-white font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:text-2xl text-lg sm:text-xl bg-black bg-opacity-25 px-2 py-1 rounded-md inline-block">
              {edad} años
            </p>
          </div>
        </div>

        <div className="opacity-50 flex-2">
          <img
            src="src/images/logo.png"
            alt="Logo MEVIP"
            className="w-full max-w-[180px] sm:max-w-[250px] h-auto mr-2 hidden md:block"
          />
        </div>

        <div className="opacity-50 flex-2">
          <img
            src="src/images/logo2.png"
            alt="Logo MEVIP pequeño"
            className="w-full max-w-[95px] sm:max-w-[95px] h-auto mr-3 hidden sm:block md:hidden"
          />
        </div>
      </div>
    </Card>
  );
};

export default Header;
