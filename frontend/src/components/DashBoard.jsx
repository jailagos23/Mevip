import {
  Col,
  TabGroup,
  TabList,
  Card,
  TabPanels,
  TabPanel,
  Grid,
  Metric,
  CategoryBar,
  Divider,
  ProgressCircle,
  ProgressBar,
  Icon,
} from "@tremor/react";
import Header from "./Header";
import CustomTab from "./CustomTab";
import EvaluationCard from "./EvaluationCard";
import DataCard from "./DataCard";
import Allergy from "./Allergy";
import Pathology from "./Pathology";
import Inheritance from "./Inheritance";
import Medicine from "./Medicine";
import IconMain from "./IconMain";
import SleepCard from "./SleepCard";
import Activity from "./Activity";
import Days from "./Days";
import Food from "./Food";

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
                className="gap-x-3 gap-y-5 mx-3 my-3"
              >
                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl shadow-lg">
                    <IconMain
                      iconSrc="src/images/icono_diagnostico.png"
                      iconAlt="Icono evaluación"
                      nombre="DIAGNÓSTICO"
                    ></IconMain>
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
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <IconMain
                      nombre="DATOS"
                      iconSrc="src/images/icono_datos.png"
                      iconAlt="Icono datos"
                    ></IconMain>
                    <Divider />
                    <DataCard
                      altura={170}
                      grasa={15}
                      peso={85}
                      tipo_sangre="O+"
                    ></DataCard>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={1} numColSpanMd={1}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <IconMain
                      iconSrc="src/images/icono_alergias.png"
                      iconAlt="Icono vascular"
                      nombre="ALERGIAS"
                    ></IconMain>

                    <Divider />
                    <div className="grid grid-cols-1 gap-4 text-left">
                      <Allergy
                        mediName="Paracetamol"
                        diagAlert={1}
                        diagUrgency={3}
                      ></Allergy>

                      <Allergy
                        mediName="Miel"
                        diagAlert={0}
                        diagUrgency={2}
                      ></Allergy>

                      <Allergy
                        mediName="Pólen"
                        diagAlert={2}
                        diagUrgency={1}
                      ></Allergy>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-2 mt-6">
                      <p className="text-black">
                        Comentarios adicionales respeto a las alergias.
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <IconMain
                      iconSrc="src/images/icono_patologias.png"
                      iconAlt="Icono bacterias"
                      nombre="PATOLOGÍAS"
                    ></IconMain>
                    <Divider className="my-4" />
                    <div className="grid grid-cols-1 gap-4 text-left">
                      <Pathology patologia={"Diabetes"}></Pathology>
                      <Pathology patologia={"Síndrome de Gilbert"}></Pathology>
                      <Pathology patologia={"Hipertensión"}></Pathology>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-2 mt-6">
                      <p className="text-black">
                        Comentarios adicionales respeto a las patologías.
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <IconMain
                      iconSrc="src/images/icono_antecedentes.png"
                      iconAlt="Icono ADN"
                      nombre="ANTECEDENTES"
                    ></IconMain>
                    <Divider className="my-4" />
                    <div className="grid grid-cols-1 gap-4 text-left">
                      <Inheritance
                        patologia="Hipertensión"
                        familiar="Mamá"
                        sexo="Femenino"
                      ></Inheritance>

                      <Inheritance
                        patologia="Diabetes"
                        familiar="Abuelo (P)"
                        sexo="Masculino"
                      ></Inheritance>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-2 mt-6">
                      <p className="text-black">
                        Comentarios adicionales respeto a los antecedentes.
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl bg-gray-900 text-white p-6">
                    <IconMain
                      iconSrc="src/images/icono_tratamientos.png"
                      iconAlt="Icono Mente"
                      nombre="TRATAMIENTOS"
                    ></IconMain>
                    <Divider className="my-4" />
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-2 mt-2">
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
                    <IconMain
                      iconSrc="src/images/icono_medicamentos.png"
                      iconAlt="Icono Medicamentos"
                      nombre="MEDICAMENTOS"
                    ></IconMain>
                    <Divider className="my-4" />
                    <div className="grid grid-cols-1 gap-4 text-left">
                      <Medicine
                        medicamento="Morfina"
                        cantidad="2 ml"
                        frecuencia="12 hrs"
                        tipo={1}
                      >
                        Comentarios adicionales respecto al medicamento.
                      </Medicine>
                      <Medicine
                        medicamento="Omeprazol"
                        cantidad="2 ud"
                        frecuencia="8 hrs"
                        tipo={2}
                      >
                        Comentarios adicionales respecto al medicamento.
                      </Medicine>
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
                    iconSrc="src/images/icono_cuello.png"
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
                    iconSrc="src/images/icono_espalda.png"
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
                    iconSrc="src/images/icono_mano.png"
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
                    iconSrc="src/images/icono_pies.png"
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
                    iconSrc="src/images/icono_rodilla.png"
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
                    iconSrc="src/images/icono_cadera.png"
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
                    iconSrc="src/images/icono_cuerpo.png"
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

            <TabPanel></TabPanel>

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
                    <IconMain
                      iconSrc="src/images/icono_sueño.png"
                      iconAlt="Icono cama"
                      nombre="SUEÑO"
                    ></IconMain>
                    <SleepCard horas={2} estrellas={5}></SleepCard>
                  </Card>
                </Col>

                <Col>
                  <Card className="rounded-xl">
                    <IconMain
                      iconSrc="src/images/icono_deporte.png"
                      iconAlt="Icono deporte"
                      nombre="ACTIVIDAD"
                    ></IconMain>
                    <Divider />

                    <Activity
                      nombre="Tenis"
                      intensidad={4}
                      duracion={2}
                      frecuencia={3}
                    ></Activity>

                    <Divider className="my-4" />

                    <Activity
                      nombre="Caminar"
                      intensidad={2}
                      duracion={1}
                      frecuencia={6}
                    ></Activity>
                  </Card>
                </Col>

                <Col>
                  <Card className="rounded-xl">
                    <IconMain
                      iconSrc="src/images/icono_comida.png"
                      iconAlt="Icono alimentos"
                      nombre="ALIMENTOS"
                    ></IconMain>
                    <Divider />
                    <section className="mb-5">
                      <Food
                        nombre="Proteínas y carnes"
                        dias={2}
                        iconSrc="src/images/icono_carne.png"
                        iconAlt="Icono carne"
                      ></Food>

                      <Food
                        nombre="Lácteos y sustitutos"
                        dias={7}
                        iconSrc="src/images/icono_leche.png"
                        iconAlt="Icono leche"
                      ></Food>

                      <Food
                        nombre="Frutas y verduras"
                        dias={4}
                        iconSrc="src/images/icono_verduras.png"
                        iconAlt="Icono verduras"
                      ></Food>

                      <Food
                        nombre="Cereales y granos"
                        dias={3}
                        iconSrc="src/images/icono_cereales.png"
                        iconAlt="Icono cereales"
                      ></Food>

                      <Food
                        nombre="Aceites y grasas"
                        dias={6}
                        iconSrc="src/images/icono_aceite.png"
                        iconAlt="Icono carne"
                      ></Food>

                      <Food
                        nombre="Dulces y postres "
                        dias={2}
                        iconSrc="src/images/icono_dulces.png"
                        iconAlt="Icono dulces"
                      ></Food>

                      <Food
                        nombre="Agua y bebidas"
                        dias={7}
                        iconSrc="src/images/icono_agua.png"
                        iconAlt="Icono agua"
                      ></Food>
                    </section>
                  </Card>
                </Col>
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid
                numItems={1}
                numItemsSm={2}
                numItemsLg={4}
                className="gap-x-3 gap-y-5 mx-3 my-3"
              >
                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl shadow-lg">
                    <IconMain
                      iconSrc="src/images/icono_sueño_plus.png"
                      iconAlt="Icono sueño plus"
                      nombre="SUEÑO"
                    ></IconMain>
                    <Divider />
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-6">
                      <p className="text-black">
                        Recomendaciones en actividad.
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl shadow-lg">
                    <IconMain
                      iconSrc="src/images/icono_deporte_plus.png"
                      iconAlt="Icono deporte plus"
                      nombre="ACTIVIDAD"
                    ></IconMain>
                    <Divider />
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-6">
                      <p className="text-black">Recomendaciones en sueño.</p>
                    </div>
                  </Card>
                </Col>

                <Col numColSpan={4} numColSpanLg={2}>
                  <Card className="rounded-xl shadow-lg">
                    <IconMain
                      iconSrc="src/images/icono_comida_plus.png"
                      iconAlt="Icono alimentación plus"
                      nombre="ALIMENTACIÓN"
                    ></IconMain>
                    <Divider />
                    <div className="bg-slate-50 rounded-2xl border-2 border-cyan-600 text-justify text-lg p-3 mt-6">
                      <p className="text-black">
                        Recomendaciones en alimentación.
                      </p>
                    </div>
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
