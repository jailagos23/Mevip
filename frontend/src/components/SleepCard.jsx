import React from "react";
import { Card, Divider, CategoryBar, Metric } from "@tremor/react";
import IconMain from "./IconMain";
import StartLikert from "./StartLikert";

const SleepCard = ({ horas, estrellas }) => {
  return (
    <>
      <Divider className="my-4">
        <h1 className="text-white text-lg mb-1">
          <strong>Horas promedio</strong>
        </h1>
      </Divider>
      <h1 className="text-center font-bold text-cyan-500 text-3xl">
        {horas} h / semana
      </h1>
      <CategoryBar
        values={[33, 33, 34]}
        colors={["rose", "yellow", "green"]}
        markerValue={47}
        className="mt-3 mb-10"
      />
      <Divider className="my-4">
        <h1 className="text-white text-lg">
          <strong>Calidad</strong>
        </h1>
      </Divider>
      <h1 className="text-center font-bold text-cyan-500 text-3xl mb-2">
        {estrellas} / 5
      </h1>
      <StartLikert
        estrellas={{ estrellas }}
        className="items-center"
      ></StartLikert>
    </>
  );
};

export default SleepCard;
