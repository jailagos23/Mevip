import React from "react";
import {
  Card,
  BadgeDelta,
  Divider,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@tremor/react"; // Asegúrate de importar correctamente estos componentes

const EvaluationCard = ({
  label,
  iconSrc,
  iconAlt,
  hayDolencia,
  descripcion,
  children,
}) => {
  return (
    <Card className="text-center rounded-xl p-3">
      <h1 className="text-center font-bold text-white text-4xl hover:text-cyan-600 transition duration-200 cursor-pointer hover:translate-y-0.5 p-2">
        <img
          src={iconSrc}
          alt={iconAlt}
          className={
            hayDolencia === 1
              ? "inline-block w-20 rounded-full border-4 border-green-500 shadow-green"
              : "inline-block w-20 rounded-full border-4 border-red-500 shadow-red"
          }
        />
        <br />
        {label}
      </h1>

      <BadgeDelta
        deltaType={hayDolencia === 1 ? "increase" : "decrease"}
        isIncreasePositive={hayDolencia === 1 ? "true" : "false"}
        className="p-2 font-bold"
      >
        {hayDolencia === 1 ? "Existe dolencia" : "Sin dolencia registrada"}
      </BadgeDelta>

      <Divider>
        <h1 className="text-cyan-500 font-bold text-md">{descripcion}</h1>
      </Divider>

      <Accordion>
        <AccordionHeader className="bg-cyan-600 bg-opacity-50 hover:bg-cyan-700">
          <h1 className="text-md font-bold text-white">Resultados</h1>
        </AccordionHeader>
        <AccordionBody className="mt-4">{children}</AccordionBody>
      </Accordion>
    </Card>
  );
};

export default EvaluationCard;
