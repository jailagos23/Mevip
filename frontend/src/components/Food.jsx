import React from "react";
import Days from "./Days";

const Food = ({ nombre, dias, iconSrc, iconAlt }) => {
  return (
    <>
      <div className="grid grid-cols-1 items-center text-center">
        <div className="flex flex-col items-center mb-8">
          <img
            src={iconSrc}
            alt={iconAlt}
            className="inline-block w-[45px] mb-1"
          />
          <p className="text-cyan-500 text-2xl font-bold">{nombre}</p>
          <p className="text-yellow-300 text-lg font-bold">{dias} días / sem</p>
          <Days days={dias}></Days>
        </div>
      </div>
    </>
  );
};

export default Food;
