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
              iconSrc="src/images/tab_1.png"
              altText="Icono Estado"
              label="Estado"
            />
            <CustomTab
              value={2}
              iconSrc="src/images/tab_2.png"
              altText="Icono Físico"
              label="Físico"
            />
            <CustomTab
              value={3}
              iconSrc="src/images/tab_3.png"
              altText="Icono Cerebro"
              label="Psicosocial"
            />
            <CustomTab
              value={4}
              iconSrc="src/images/tab_4.png"
              altText="Icono Estilo"
              label="Estilo"
            />

            <CustomTab
              value={5}
              iconSrc="src/images/tab_5.png"
              altText="Icono Tratamiento"
              label="Tratamiento"
            />
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid
                numItems={1}
                numItemsSm={2}
                numItemsLg={4}
                className="gap-x-3 gap-y-5 mx-3"
              >
                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl shadow-lg">
                    <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_diagnostico.png"
                        alt="Icono evaluación"
                        className={
                          "inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
                        }
                      />
                      <br />
                      EVALUACIÓN
                    </h1>
                    <Divider />
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-6">
                      <p className="text-black">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto. Lorem Ipsum ha sido el
                        texto de relleno estándar de las industrias desde el año
                        1500, cuando un impresor (N. del T. persona que se
                        dedica a la imprenta) desconocido usó una galería de
                        textos y los mezcló de tal manera que logró hacer un
                        libro de textos especimen. No sólo sobrevivió 500 años,
                        sino que tambien ingresó como texto de relleno en
                        documentos electrónicos, quedando esencialmente igual al
                        original. Fue popularizado en los 60s con la creación de
                        las hojas "Letraset", las cuales contenian pasajes de
                        Lorem Ipsum, y más recientemente con software de
                        autoedición, como por ejemplo Aldus PageMaker, el cual
                        incluye versiones de Lorem Ipsum.
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={1} numColSpanMd={1}>
                  <Card className="rounded-xl">
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
                        <p className="text-cyan-300 text-xl">175 cm</p>
                      </div>

                      <div>
                        <img
                          src="src/images/icono_grasa.png"
                          alt="Icono Grasa"
                          className="inline-block max-w-[50px] mb-1"
                        />
                        <p className="text-white text-2xl font-bold">Grasa</p>
                        <p className="text-cyan-300 text-xl">15%</p>
                      </div>

                      <div>
                        <img
                          src="src/images/icono_peso.png"
                          alt="Icono Peso"
                          className="inline-block max-w-[50px] mb-1"
                        />
                        <p className="text-white text-2xl font-bold">Peso</p>
                        <p className="text-cyan-300 text-xl">70 kg</p>
                      </div>

                      <div>
                        <img
                          src="src/images/icono_sangre.png"
                          alt="Icono corazon"
                          className="inline-block max-w-[50px] mb-1"
                        />
                        <p className="text-white text-2xl font-bold">Sangre</p>
                        <p className="text-cyan-300 text-xl">O+</p>
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={1} numColSpanMd={1}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_adn.png"
                        alt="Icono vascular"
                        className={
                          "inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
                        }
                      />
                      <br />
                      ALERGIAS
                    </h1>
                    <Divider className="my-4" />
                    <div className="grid grid-cols-1 gap-4 text-left">
                      <div className="flex items-center">
                        <img
                          src="src/images/icono_rojo.png"
                          alt="Icono triángulo rojo"
                          className="inline-block max-w-[60px] mr-2"
                        />
                        <div>
                          <p className="text-white text-2xl font-semibold">
                            Paracetamol
                          </p>
                          <p className="text-cyan-300 text-lg">Diagnosticado</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="src/images/icono_amarillo.png"
                          alt="Icono triángulo amarillo"
                          className="inline-block max-w-[60px] mr-2"
                        />
                        <div>
                          <p className="text-white text-2xl font-semibold">
                            Miel
                          </p>
                          <p className="text-cyan-300 text-lg">
                            Sin diagnóstico
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="src/images/icono_verde.png"
                          alt="Icono triángulo verde"
                          className="inline-block max-w-[60px] mr-2"
                        />
                        <div>
                          <p className="text-white text-2xl font-semibold">
                            Pólen
                          </p>
                          <p className="text-cyan-300 text-lg">
                            Sin diagnóstico
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-6">
                      <p className="text-black">
                        Comentarios adicionales respeto a las alergias.
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_bacterias.png"
                        alt="Icono vascular"
                        className={
                          "inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
                        }
                      />
                      <br />
                      PATOLOGÍAS
                    </h1>
                    <Divider className="my-4" />
                    <div className="grid grid-cols-1 gap-4 text-left">
                      <div className="flex items-center">
                        <img
                          src="src/images/icono_germen.png"
                          alt="Icono Patología"
                          className="inline-block max-w-[70px] mr-1"
                        />
                        <p className="text-white text-2xl font-semibold">
                          Diabetes
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="src/images/icono_germen.png"
                          alt="Icono Patología"
                          className="inline-block max-w-[70px] mr-1"
                        />
                        <p className="text-white text-2xl font-semibold">
                          Síndrome de Gilbert
                        </p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-6">
                      <p className="text-black">
                        Comentarios adicionales respeto a las patologías.
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_adn.png"
                        alt="Icono ADN"
                        className="inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
                      />
                      <br />
                      ANTECEDENTES
                    </h1>
                    <Divider className="my-4" />
                    <div className="grid grid-cols-1 gap-4 text-left">
                      <div className="flex items-center m-2">
                        <img
                          src="src/images/icono_germen2.png"
                          alt="Icono Hipertensión"
                          className="inline-block max-w-[60px] mr-1"
                        />
                        <div>
                          <p className="text-white text-2xl font-semibold">
                            Hipertensión
                          </p>
                          <div className="flex items-center">
                            <img
                              src="src/images/icono_mujer.png"
                              alt="Icono femenino"
                              className="inline-block max-w-[30px] ml-2 mr-1 mt-2"
                            />
                            <p className="text-pink-300 text-lg">Mamá</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center m-2">
                        <img
                          src="src/images/icono_germen2.png"
                          alt="Icono Diabetes"
                          className="inline-block max-w-[60px] mr-1"
                        />
                        <div>
                          <p className="text-white text-2xl font-semibold">
                            Diabetes
                          </p>
                          <div className="flex items-center">
                            <img
                              src="src/images/icono_hombre.png"
                              alt="Icono masculino"
                              className="inline-block max-w-[30px] mr-1 ml-2 mt-2"
                            />
                            <p className="text-cyan-300 text-lg">Abuelo (P)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-6">
                      <p className="text-black">
                        Comentarios adicionales respeto a los antecedentes.
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_iglesia.png"
                        alt="Icono vascular"
                        className={
                          "inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
                        }
                      />
                      <br />
                      RELIGION
                    </h1>
                    <Divider className="my-4" />
                    <div className="flex items-center justify-center">
                      <p className="text-yellow-400 text-3xl font-semibold">
                        Adventista
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_mente.png"
                        alt="Icono Mente"
                        className="inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
                      />
                      <br />
                      TRATAMIENTOS
                    </h1>
                    <Divider className="my-4" />
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-2">
                      <p className="text-black">
                        En este recuadro se puede registrar los tratamientos que
                        actualmente lleve a cabo el paciente, independiente de
                        su tipo.
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <h1 className="text-center font-bold text-cyan-500 text-4xl hover:text-cyan-700 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_medicina.png"
                        alt="Icono Medicamentos"
                        className="inline-block w-20 rounded-full border-4 border-cyan-600 mb-2"
                      />
                      <br />
                      MEDICAMENTOS
                    </h1>
                    <Divider className="my-4" />
                    <div className="grid grid-cols-1 gap-4 text-left">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center mt-4">
                            <img
                              src="src/images/icono_jeringa.png"
                              alt="Icono Medicamento 1"
                              className="inline-block max-w-[50px] mr-2"
                            />
                            <p className="text-cyan-400 text-2xl font-bold">
                              Morfina
                            </p>
                            <p className="text-yellow-400 text-2xl font-bold ml-2">
                              (1ml)
                            </p>
                          </div>
                          <div className="flex items-center">
                            <img
                              src="src/images/icono_reloj.png"
                              alt="Icono Reloj"
                              className="inline-block max-w-[30px] mr-2"
                            />
                            <p className="text-blue-300 text-2xl font-bold">
                              12 hrs
                            </p>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-2">
                          <p className="text-black">
                            Comentarios adicionales respeto a las alergias.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center mt-4">
                            <img
                              src="src/images/icono_pildora.png"
                              alt="Icono Medicamento 2"
                              className="inline-block max-w-[50px] mr-2"
                            />
                            <p className="text-cyan-400 text-2xl font-bold">
                              Omeprazol
                            </p>
                            <p className="text-yellow-400 text-2xl font-bold ml-2">
                              (2ud)
                            </p>
                          </div>
                          <div className="flex items-center">
                            <img
                              src="src/images/icono_reloj.png"
                              alt="Icono Reloj"
                              className="inline-block max-w-[30px] mr-2"
                            />
                            <p className="text-blue-300 text-2xl font-bold">
                              8 hrs
                            </p>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-2">
                          <p className="text-black">
                            Comentarios adicionales respeto a las alergias.
                          </p>
                        </div>
                      </div>
                    </div>
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
                className="gap-x-3 gap-y-5 mx-3"
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
                      <strong>Nivel de discapacidad actual</strong>
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
                      <strong>Nivel de discapacidad actual</strong>
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
                      <strong>General</strong>
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
                      <strong>Laboral</strong>
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
                      <strong>Alto rendimiento</strong>
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
                      <strong>Nivel de discapacidad actual</strong>
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
                    label="KOOS"
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

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="FIQ"
                    iconSrc="src/images/cuerpo_icono.png"
                    iconAlt="Icono torso"
                    hayDolencia={0}
                    descripcion="Fibromialgia"
                  >
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacidad moderada</strong>
                    </h1>
                  </EvaluationCard>
                </Col>
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid
                numItems={1}
                numItemsSm={2}
                numItemsMd={3}
                numItemsLg={4}
                className="gap-x-3 gap-y-5 mx-3"
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
                      <strong>Nivel de discapacidad actual</strong>
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
                      <strong>Nivel de discapacidad actual</strong>
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
                      <strong>General</strong>
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
                      <strong>Laboral</strong>
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
                      <strong>Alto rendimiento</strong>
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
                      <strong>Nivel de discapacidad actual</strong>
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
                    label="KOOS"
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

                <Col numColSpan={1} numColSpanLg={1}>
                  <EvaluationCard
                    label="FIQ"
                    iconSrc="src/images/cuerpo_icono.png"
                    iconAlt="Icono torso"
                    hayDolencia={0}
                    descripcion="Fibromialgia"
                  >
                    <h1 className="text-cyan-400 text-3xl mt-2">
                      <strong>Incapacidad moderada</strong>
                    </h1>
                  </EvaluationCard>
                </Col>
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
                  <Card className="rounded-xl">
                    <h1 className="text-center font-bold text-orange-400 text-4xl hover:text-orange-600 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_cama.png"
                        alt="Icono sueño"
                        className={
                          "inline-block w-20 rounded-full border-4 border-orange-400 mb-2"
                        }
                      />
                      <br />
                      SUEÑO
                    </h1>
                    <Divider>
                      <h1 className="text-orange-300 text-lg">
                        <strong>Horas de sueño promedio</strong>
                      </h1>
                    </Divider>
                    <Metric className="mb-2">6.5/semana</Metric>
                    <CategoryBar
                      values={[50, 30, 30]}
                      colors={["rose", "yellow", "green"]}
                      markerValue={33}
                      className="mb-5"
                    />
                    <Divider>
                      <h1 className="text-orange-300 text-lg">
                        <strong>Calidad del sueño</strong>
                      </h1>
                    </Divider>
                    <Metric>6/10</Metric>
                  </Card>
                </Col>
                <Col>
                  <Card className="rounded-xl">
                    <h1 className="text-center font-bold text-green-400 text-4xl hover:text-green-600 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_alcohol.png"
                        alt="Icono cigarro"
                        className={
                          "inline-block w-20 rounded-full border-4 border-green-400 mb-2"
                        }
                      />
                      <br />
                      CONSUMO
                    </h1>
                    <Divider>
                      <h2 className="text-green-300 text-lg text-center">
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
                  <Card className="rounded-xl">
                    <h1 className="text-center font-bold text-blue-400 text-4xl hover:text-blue-600 transition duration-300 cursor-pointer hover:translate-y-0.5 mt-2">
                      <img
                        src="src/images/icono_pastillas.png"
                        alt="Icono medicamentos"
                        className={
                          "inline-block w-20 rounded-full border-4 border-blue-400 mb-2"
                        }
                      />
                      <br />
                      MEDICINA
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
