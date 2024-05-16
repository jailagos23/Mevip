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
    <>
      <Card>
        <div className="h-32 bg-cyan-600 flex items-center rounded-xl">
          <div className="flex-2 p-4 hidden sm:block">
            <img
              src="src/images/foto_perfil.png"
              alt="Foto de perfil"
              className="w-full max-w-[85px] h-auto rounded-3xl"
            />
          </div>

          <div className="flex-1 p-4">
            <p className="text-white font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:text-xl sm:text-lg text-md">
              {nombre}
            </p>
            <p className="text-black font-bold md:text-xl sm:text-lg text-md">
              {edad} años
            </p>
          </div>

          {/* <div className="flex-1">
            <p className="cursor-pointer">
              <span className="font-bold italic sm:text-md text-sm">
                Altura
              </span>{" "}
              <strong className="text-white sm:text-md text-sm">
                {" "}
                {alt} cm
              </strong>
            </p>
            <p className="cursor-pointer">
              <span className="font-bold italic sm:text-md text-sm">Peso</span>{" "}
              <strong className="text-white sm:text-md text-sm">
                {" "}
                {peso} kg
              </strong>
            </p>
            <p className="cursor-pointer">
              <span className="font-bold italic sm:text-md text-sm">IMC</span>{" "}
              <strong className="text-white sm:text-md text-sm">
                {" "}
                {IMC_cal}
              </strong>
            </p>
            <p className="cursor-pointer">
              <span className="font-bold italic sm:text-md text-sm">Grasa</span>
              <strong className="text-white sm:text-md text-sm">
                {" "}
                {grasa} %
              </strong>
            </p>
          </div> */}

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
              alt="Logo MEVIP"
              className="w-full max-w-[95px] sm:max-w-[95px] h-auto mr-3 block md:hidden"
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Header;
