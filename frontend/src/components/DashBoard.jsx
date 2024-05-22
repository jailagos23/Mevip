import {
  Col,
  TabGroup,
  TabList,
  Tab,
  Card,
  TabPanels,
  TabPanel,
  Grid,
  Metric,
  CategoryBar,
  Divider,
  Badge,
  BadgeDelta,
  ProgressCircle,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  ProgressBar,
} from "@tremor/react";
import Header from "./Header";
import CustomTab from "./CustomTab";
import EvaluationCard from "./EvaluationCard";

const DashBoard = () => {
  return (
    <main class="main">
      <>
        <Header
          nombre={"Jaime Benjamín Lagos Ruminot"}
          edad={23}
          alt={178}
          peso={78}
        ></Header>

        <TabGroup>
          <TabList defaultValue={1} className="mt-1 justify-center">
            <CustomTab
              value={1}
              iconSrc="src/images/doctor_icono.png"
              altText="Icono Doctor"
              label="Evaluación"
            />
            <CustomTab
              value={2}
              iconSrc="src/images/encuesta_icono.png"
              altText="Icono Encuesta"
              label="Físico"
            />
            <CustomTab
              value={3}
              iconSrc="src/images/cerebro_icono.png"
              altText="Icono Evaluación"
              label="Psicosocial"
            />
            <CustomTab
              value={4}
              iconSrc="src/images/pesas_icono.png"
              altText="Icono Evaluación"
              label="Estilo de vida"
            />
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid
                numItems={1}
                numItemsSm={2}
                numItemsLg={4}
                className="gap-x-3 gap-y-5"
              >
                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl shadow-lg">
                    <h1
                      className="text-center font-bold text-pink-400 text-4xl hover:text-gray-400 transition duration-200 cursor-pointer hover:translate-y-0.5 p-2"
                      style={{ WebkitTextStroke: "1.1px black" }}
                    >
                      <img
                        src="src/images/evaluacion_icono.png"
                        alt="Icono evaluación"
                        className="inline-block w-10 h-10 mr-2"
                      />
                      EVALUACIÓN
                    </h1>
                    <Divider />
                    <div className="bg-slate-50 rounded-xl text-justify text-md px-6 py-3 font-bold mt-2 shadow-inner">
                      <p className="text-cyan-">
                        Paciente presenta cuadro de dolor crónico ubicado en la
                        rodilla
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl">
                    <h1
                      className="text-center font-bold text-pink-400 text-4xl hover:text-gray-400 transition duration-200 cursor-pointer hover:translate-y-0.5 p-2"
                      style={{ WebkitTextStroke: "1.1px black" }}
                    >
                      <img
                        src="src/images/peso_icono.png"
                        alt="Icono evaluación"
                        className="inline-block w-10 h-10"
                      />{" "}
                      BIOMÉTRICO
                    </h1>
                    <Divider />
                  </Card>
                </Col>
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid
                numItems={1}
                numItemsSm={2}
                numItemsMd={3}
                numItemsLg={4}
                className="gap-x-3 gap-y-5"
              >
                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="NDI"
                    iconSrc="src/images/cuello_icono.png"
                    iconAlt="Icono cuello"
                    hayDolencia={0}
                    descripcion="Cuello"
                  >
                    <h1 className="text-cyan-400 text-lg mb-4">
                      <strong>Nivel de discapacidad</strong>
                    </h1>
                    <ProgressCircle value={54} size="xl">
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500">
                        54%
                      </span>
                    </ProgressCircle>
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacidad moderada</strong>
                    </h1>
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="OSWESTRY"
                    iconSrc="src/images/espalda_icono.png"
                    iconAlt="Icono espalda"
                    hayDolencia={1}
                    descripcion="Espalda"
                  >
                    <h1 className="text-cyan-300 text-lg mb-4">
                      <strong>Nivel de discapacidad</strong>
                    </h1>
                    <ProgressCircle value={18} size="xl">
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500">
                        18%
                      </span>
                    </ProgressCircle>
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacidad leve</strong>
                    </h1>
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="QUICKDASH"
                    iconSrc="src/images/mano_icono.png"
                    iconAlt="Icono mano"
                    hayDolencia={1}
                    descripcion="Exremidades superiores"
                  >
                    <h1 className="text-red-500 text-lg">
                      <strong>Discapacidad — General</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">4.2 pts (75%)</span>{" "}
                      <span className="text-lg font-bold">5</span>
                    </p>
                    <ProgressBar
                      value={75}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-red-500 text-lg">
                      <strong>Discapacidad — Laboral</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">1.5 pts (30%)</span>{" "}
                      <span className="text-lg font-bold">5</span>
                    </p>
                    <ProgressBar
                      value={30}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-red-500 text-lg">
                      <strong>Discapacidad — Alto rendimiento</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">2.4 pts (48%)</span>{" "}
                      <span className="text-lg font-bold">5</span>
                    </p>
                    <ProgressBar
                      value={48}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="LEFS"
                    iconSrc="src/images/pie_icono.png"
                    iconAlt="Icono pie"
                    hayDolencia={1}
                    descripcion="Extremidades inferiores"
                  >
                    <h1 className="text-cyan-400 text-lg mb-4">
                      <strong>Nivel de discapacidad</strong>
                    </h1>
                    <ProgressCircle value={75} size="xl">
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500">
                        75%
                      </span>
                    </ProgressCircle>
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacitado</strong>
                    </h1>
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="OSWESTRY"
                    iconSrc="src/images/espalda_icono.png"
                    iconAlt="Icono espalda"
                    hayDolencia={1}
                    descripcion="Espalda"
                  >
                    <h1 className="text-cyan-400 text-lg mb-4">
                      <strong>Nivel de discapacidad</strong>
                    </h1>
                    <ProgressCircle value={18} size="xl">
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500">
                        18%
                      </span>
                    </ProgressCircle>
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacidad leve</strong>
                    </h1>
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="QUICKDASH"
                    iconSrc="src/images/pierna_icono.png"
                    iconAlt="Icono pierna"
                    hayDolencia={1}
                    descripcion="Rodillas"
                  >
                    <h1 className="text-green-500 text-lg">
                      <strong>Síntomas</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">43 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={75}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-green-500 text-lg">
                      <strong>Dolor</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">78 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={30}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-green-500 text-lg">
                      <strong>Actividades cotidianas</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">34 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={48}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-green-500 text-lg">
                      <strong>Deportivo — Recreacional </strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">55 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={48}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-green-500 text-lg">
                      <strong>Calidad de vida</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">97 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={48}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="WOMAC"
                    iconSrc="src/images/coxis_icono.png"
                    iconAlt="Icono coxis"
                    hayDolencia={1}
                    descripcion="Artrosis de cadera y/o rodilla"
                  >
                    <h1 className="text-red-500 text-lg">
                      <strong>Dolor percibido</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">11.6 pts (58%)</span>{" "}
                      <span className="text-lg font-bold">20</span>
                    </p>
                    <ProgressBar
                      value={58}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-red-500 text-lg">
                      <strong>Capacidad funcional</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">8.3 pts (41.5%)</span>{" "}
                      <span className="text-lg font-bold">20</span>
                    </p>
                    <ProgressBar
                      value={41.5}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                  </EvaluationCard>
                </Col>
                <Card className="text-center rounded-xl">
                  <h1 className="text-center font-bold text-white text-4xl hover:text-gray-400 transition duration-200 cursor-pointer hover:translate-y-1 p-2">
                    {" "}
                    <img
                      src="src/images/cuerpo_icono.png"
                      alt="Icono cuerpo"
                      className="inline-block w-20 rounded-full border-8 border-green-500"
                    />{" "}
                    <br />
                    FIQ{" "}
                  </h1>
                  <BadgeDelta
                    deltaType="unchanged"
                    isIncreasePositive={true}
                    className="p-2 font-bold"
                  >
                    Sin dolencia registrada
                  </BadgeDelta>
                  <Divider className="font-bold">Fibromialgia</Divider>
                  <Accordion>
                    <AccordionHeader className="text-md font-bold">
                      Ver resultados
                    </AccordionHeader>
                    <AccordionBody className="mt-4">
                      <Metric>Sin dolencia registrada</Metric>
                    </AccordionBody>
                  </Accordion>
                </Card>
                <Col numColSpan={1} numColSpanLg={1}></Col>
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid
                numItems={1}
                numItemsSm={2}
                numItemsMd={3}
                numItemsLg={4}
                className="gap-x-3 gap-y-5"
              >
                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="NDI"
                    iconSrc="src/images/cuello_icono.png"
                    iconAlt="Icono cuello"
                    hayDolencia={0}
                    descripcion="Cuello"
                  >
                    <h1 className="text-cyan-400 text-lg mb-4">
                      <strong>Nivel de discapacidad</strong>
                    </h1>
                    <ProgressCircle value={54} size="xl">
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500">
                        54%
                      </span>
                    </ProgressCircle>
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacidad moderada</strong>
                    </h1>
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="OSWESTRY"
                    iconSrc="src/images/espalda_icono.png"
                    iconAlt="Icono espalda"
                    hayDolencia={1}
                    descripcion="Espalda"
                  >
                    <h1 className="text-cyan-300 text-lg mb-4">
                      <strong>Nivel de discapacidad</strong>
                    </h1>
                    <ProgressCircle value={18} size="xl">
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500">
                        18%
                      </span>
                    </ProgressCircle>
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacidad leve</strong>
                    </h1>
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="QUICKDASH"
                    iconSrc="src/images/mano_icono.png"
                    iconAlt="Icono mano"
                    hayDolencia={1}
                    descripcion="Exremidades superiores"
                  >
                    <h1 className="text-red-500 text-lg">
                      <strong>Discapacidad — General</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">4.2 pts (75%)</span>{" "}
                      <span className="text-lg font-bold">5</span>
                    </p>
                    <ProgressBar
                      value={75}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-red-500 text-lg">
                      <strong>Discapacidad — Laboral</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">1.5 pts (30%)</span>{" "}
                      <span className="text-lg font-bold">5</span>
                    </p>
                    <ProgressBar
                      value={30}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-red-500 text-lg">
                      <strong>Discapacidad — Alto rendimiento</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">2.4 pts (48%)</span>{" "}
                      <span className="text-lg font-bold">5</span>
                    </p>
                    <ProgressBar
                      value={48}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="LEFS"
                    iconSrc="src/images/pie_icono.png"
                    iconAlt="Icono pie"
                    hayDolencia={1}
                    descripcion="Extremidades inferiores"
                  >
                    <h1 className="text-cyan-400 text-lg mb-4">
                      <strong>Nivel de discapacidad</strong>
                    </h1>
                    <ProgressCircle value={75} size="xl">
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500">
                        75%
                      </span>
                    </ProgressCircle>
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacitado</strong>
                    </h1>
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="OSWESTRY"
                    iconSrc="src/images/espalda_icono.png"
                    iconAlt="Icono espalda"
                    hayDolencia={1}
                    descripcion="Espalda"
                  >
                    <h1 className="text-cyan-400 text-lg mb-4">
                      <strong>Nivel de discapacidad</strong>
                    </h1>
                    <ProgressCircle value={18} size="xl">
                      <span className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500">
                        18%
                      </span>
                    </ProgressCircle>
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacidad leve</strong>
                    </h1>
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="QUICKDASH"
                    iconSrc="src/images/pierna_icono.png"
                    iconAlt="Icono pierna"
                    hayDolencia={1}
                    descripcion="Rodillas"
                  >
                    <h1 className="text-green-500 text-lg">
                      <strong>Síntomas</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">43 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={75}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-green-500 text-lg">
                      <strong>Dolor</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">78 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={30}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-green-500 text-lg">
                      <strong>Actividades cotidianas</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">34 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={48}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-green-500 text-lg">
                      <strong>Deportivo — Recreacional </strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">55 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={48}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-green-500 text-lg">
                      <strong>Calidad de vida</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">97 pts</span>{" "}
                      <span className="text-lg font-bold">100</span>
                    </p>
                    <ProgressBar
                      value={48}
                      color="green-500"
                      className="mb-7 mt-1"
                    />
                  </EvaluationCard>
                </Col>

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="WOMAC"
                    iconSrc="src/images/coxis_icono.png"
                    iconAlt="Icono coxis"
                    hayDolencia={1}
                    descripcion="Artrosis de cadera y/o rodilla"
                  >
                    <h1 className="text-red-500 text-lg">
                      <strong>Dolor percibido</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">11.6 pts (58%)</span>{" "}
                      <span className="text-lg font-bold">20</span>
                    </p>
                    <ProgressBar
                      value={58}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                    <h1 className="text-red-500 text-lg">
                      <strong>Capacidad funcional</strong>
                    </h1>
                    <p className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold">0</span>{" "}
                      <span className="text-xl font-bold">8.3 pts (41.5%)</span>{" "}
                      <span className="text-lg font-bold">20</span>
                    </p>
                    <ProgressBar
                      value={41.5}
                      color="red-300"
                      className="mb-7 mt-1"
                    />
                  </EvaluationCard>
                </Col>
                <Card className="text-center rounded-xl">
                  <h1 className="text-center font-bold text-white text-4xl hover:text-gray-400 transition duration-200 cursor-pointer hover:translate-y-1 p-2">
                    {" "}
                    <img
                      src="src/images/cuerpo_icono.png"
                      alt="Icono cuerpo"
                      className="inline-block w-20 rounded-full border-8 border-green-500"
                    />{" "}
                    <br />
                    FIQ{" "}
                  </h1>
                  <BadgeDelta
                    deltaType="unchanged"
                    isIncreasePositive={true}
                    className="p-2 font-bold"
                  >
                    Sin dolencia registrada
                  </BadgeDelta>
                  <Divider className="font-bold">Fibromialgia</Divider>
                  <Accordion>
                    <AccordionHeader className="text-md font-bold">
                      Ver resultados
                    </AccordionHeader>
                    <AccordionBody className="mt-4">
                      <Metric>Sin dolencia registrada</Metric>
                    </AccordionBody>
                  </Accordion>
                </Card>
                <Col numColSpan={1} numColSpanLg={1}></Col>
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid
                numItems={1}
                numItemsSm={2}
                numItemsMd={3}
                numItemsLg={3}
                className="gap-x-3 gap-y-5"
              >
                <Col numColSpan={1} numColSpanLg={1}>
                  <Card>
                    <h1 className="text-center font-bold text-orange-400 text-4xl hover:text-orange-600 transition duration-200 cursor-pointer">
                      {" "}
                      <img
                        src="src/images/icono_dormir.png"
                        alt="Icono Sueño"
                        className="inline-block w-10 h-10 mr-2"
                      />
                      Sueño
                    </h1>
                    <Divider />
                    <h1 className="text-orange-300 text-lg mt-2">
                      <strong>Horas de sueño promedio</strong>
                    </h1>
                    <Metric className="mb-2">6.5/semana</Metric>
                    <CategoryBar
                      values={[50, 30, 30]}
                      colors={["rose", "yellow", "green"]}
                      markerValue={33}
                      className="mb-5"
                    />
                    <h1 className="text-orange-300 text-lg">
                      <strong>Calidad del sueño</strong>
                    </h1>
                    <Metric>6/10</Metric>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <h1 className="text-center font-bold text-green-400 text-4xl hover:text-green-600 transition duration-200 cursor-pointer">
                      {" "}
                      <img
                        src="src/images/cigarro_icono.png"
                        alt="Icono consumo"
                        className="inline-block w-10 h-10"
                      />{" "}
                      Consumo{" "}
                    </h1>

                    <Divider>
                      <h2 className="text-green-300 text-lg text-center mt-2">
                        <strong>Fumar</strong>
                      </h2>
                    </Divider>
                    <div className="mb-5">
                      <h3 class>
                        {" "}
                        <span className="text-white text-md font-bold">
                          🚬 Cigarro
                        </span>{" "}
                        |{" "}
                        <span className="text-red-300 text-md font-bold">
                          3/semana
                        </span>{" "}
                        |{" "}
                        <span className="text-white text-md font-bold">
                          3 uds
                        </span>
                      </h3>
                      <h3>
                        {" "}
                        <span className="text-white text-md font-bold">
                          🚬 Tabaco
                        </span>{" "}
                        |{" "}
                        <span className="text-red-300 text-md font-bold">
                          3/semana
                        </span>{" "}
                        |{" "}
                        <span className="text-white text-md font-bold">
                          {" "}
                          2 uds{" "}
                        </span>
                      </h3>
                      <h3>
                        {" "}
                        <span className="text-white text-md font-bold">
                          🚬 Marihuana
                        </span>{" "}
                        |{" "}
                        <span className="text-red-300 text-md font-bold">
                          3/semana
                        </span>{" "}
                        |{" "}
                        <span className="text-white text-md font-bold">
                          {" "}
                          0.7 g
                        </span>
                      </h3>
                    </div>

                    <Divider>
                      <h1 className="text-green-300 text-lg text-center">
                        <strong>Alcohol</strong>
                      </h1>
                    </Divider>
                    <div className="mb-5">
                      <h3>
                        {" "}
                        <span className="text-white text-md font-bold">
                          🍸 Whiskey
                        </span>{" "}
                        |{" "}
                        <span className="text-red-200 text-md font-bold">
                          1/semana
                        </span>{" "}
                        |{" "}
                        <span className="text-white text-md font-bold">
                          2 vasos
                        </span>
                      </h3>
                      <h3>
                        {" "}
                        <span className="text-white text-md font-bold">
                          🍸 Ron
                        </span>{" "}
                        |{" "}
                        <span className="text-red-200 text-md font-bold">
                          1/semana
                        </span>{" "}
                        |{" "}
                        <span className="text-white text-md font-bold">
                          1 vaso
                        </span>
                      </h3>
                      <h3>
                        {" "}
                        <span className="text-white text-md font-bold">
                          🍸 Cerveza
                        </span>{" "}
                        |{" "}
                        <span className="text-red-200 text-md font-bold">
                          1/semana
                        </span>{" "}
                        |{" "}
                        <span className="text-white text-md font-bold">
                          1 vaso
                        </span>
                      </h3>
                    </div>

                    <Divider>
                      <h1 className="text-green-300 text-lg text-center">
                        <strong>Drogas</strong>
                      </h1>
                    </Divider>
                    <div className="mb-5">
                      <h3>
                        {" "}
                        <span className="text-white text-md font-bold">
                          💉 Cocaína
                        </span>{" "}
                        |{" "}
                        <span className="text-red-200 text-md font-bold">
                          1/mes
                        </span>{" "}
                        |{" "}
                        <span className="text-white text-md font-bold">
                          0.2g
                        </span>
                      </h3>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <h1 className="text-center font-bold text-blue-400 text-4xl hover:text-blue-600 transition duration-200 cursor-pointer">
                      {" "}
                      <img
                        src="src/images/medicamentos_icono.png"
                        alt="Icono medicamentos"
                        className="inline-block w-10 h-10"
                      />{" "}
                      Medicamentos{" "}
                    </h1>
                    <Divider />
                    <h3 className="mt-2">
                      {" "}
                      <span className="text-white text-md font-bold">
                        💊 Clonazepam
                      </span>{" "}
                      |{" "}
                      <span className="text-red-200 text-md font-bold">
                        8hrs
                      </span>{" "}
                      |{" "}
                      <span className="text-cyan-200 text-md font-bold">
                        2 uds
                      </span>{" "}
                      |{" "}
                      <span className="text-yellow-200 text-md font-bold">
                        2 semanas
                      </span>
                    </h3>
                    <h3>
                      {" "}
                      <span className="text-white text-md font-bold">
                        💊 Clonazepam
                      </span>{" "}
                      |{" "}
                      <span className="text-red-200 text-md font-bold">
                        8hrs
                      </span>{" "}
                      |{" "}
                      <span className="text-cyan-200 text-md font-bold">
                        2 uds
                      </span>{" "}
                      |{" "}
                      <span className="text-yellow-200 text-md font-bold">
                        2 semanas
                      </span>
                    </h3>
                    <h3>
                      {" "}
                      <span className="text-white text-md font-bold">
                        💊 Clonazepam
                      </span>{" "}
                      |{" "}
                      <span className="text-red-200 text-md font-bold">
                        8hrs
                      </span>{" "}
                      |{" "}
                      <span className="text-cyan-200 text-md font-bold">
                        2 uds
                      </span>{" "}
                      |{" "}
                      <span className="text-yellow-200 text-md font-bold">
                        2 semanas
                      </span>
                    </h3>
                    <h3>
                      {" "}
                      <span className="text-white text-md font-bold">
                        💊 Clonazepam
                      </span>{" "}
                      |{" "}
                      <span className="text-red-200 text-md font-bold">
                        8hrs
                      </span>{" "}
                      |{" "}
                      <span className="text-cyan-200 text-md font-bold">
                        2 uds
                      </span>{" "}
                      |{" "}
                      <span className="text-yellow-200 text-md font-bold">
                        2 semanas
                      </span>
                    </h3>
                  </Card>
                </Col>
              </Grid>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </>
    </main>
  );
};

export default DashBoard;
