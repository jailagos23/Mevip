import React from "react";
import { Tab } from "@tremor/react";

const TabPerso = (nombre, posTab, srcImg, altImg) => {
  return (
    <Tab
      value={posTab}
      className="hover:-translate-y-1 hover:border-none focus:border-none"
    >
      <img src={srcImg} alt={altImg} className="inline-block w-7 h-7" />{" "}
      <h1 className="text-center font-bold hover:text-red-600 transition duration-200 sm:text-lg text-md">
        {" "}
        {nombre}{" "}
      </h1>
    </Tab>
  );
};

export default TabPerso;
