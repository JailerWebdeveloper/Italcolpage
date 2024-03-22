import { Fragment } from "react";
import { useState } from "react";
import axios from "axios";

import Whitecard from "../../../components/Whitecard";
import {
  Legend,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ComposedChart,
} from "recharts";

const Dashmenu = () => {
  const data = [
    { name: "I1", uv: 0.05 },
    { name: "I2", uv: 0.25, pv: 24, amt: 2400 },
    { name: "I3", uv: 0.15, pv: 24, amt: 2400 },
    { name: "I4", uv: 0.01, pv: 24, amt: 2400 },
    { name: "I5", uv: 0.05, pv: 24, amt: 2400 },
    { name: "I6", uv: 0.05, pv: 24, amt: 2400 },
    { name: "I7", uv: 0.05, pv: 24, amt: 2400 },
    { name: "I8", uv: 0, pv: 24, amt: 2400 },
  ];
  const [formData, setFormData] = useState({
    rataAprendizaje: "",
    numIteraciones: "",
    errorMaximo: "",
  });

  const [File, setFile] = useState(null);

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const formatedata={
    "rataAprendizaje":Number(formData.rataAprendizaje),
    "numIteraciones":Number(formData.numIteraciones),
    "errorMaximo":Number(formData.errorMaximo),    
  }

  const archivo ={
      archivo: File
  }

  console.log(archivo)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formatedata={
      "rataAprendizaje":Number(formData.rataAprendizaje),
      "numIteraciones":Number(formData.numIteraciones),
      "errorMaximo":Number(formData.errorMaximo),    
    }
    try {
      const formDataResponse = await axios.post(
        "http://localhost:3001/API/V1/traerdatos",
        formatedata
      );

      const fileResponse = await axios.post(
        "http://localhost:3001/API/V1/subir-archivo",
        archivo
      );
      console.log("Respuesta del formulario API:", formDataResponse.data);
      console.log("Respuesta del archivo API:", fileResponse.data);
      alert("Datos enviados correctamente");
      const recibido = fileResponse.response;
      console.log(recibido);
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error al enviar datos");
    }
  };

  return (
    <Fragment>
      <div className="h-full w-full px-2 overflow-y-auto">
        <h1 className="tracking-wider text-4xl text-center font-bold antialiased">
          Entrenamiento
        </h1>
        <div className="divider divider-primary"></div>
        <div className="flex flex-col gap-2">
          <Whitecard>
            <div className="px-10">
              <form
                onSubmit={handleSubmit}
                className=" w-full  md:mx-auto bg-base-400 h-full grid grid-rows-auto gap-5 grid-cols-1 md:grid-cols-3 place-items-center place-content-start rounded-lg "
              >
                <h1 className="text-primary uppercase antialised text-5xl md:col-span-3  mx-auto text-center font-bold">
                  Ingresar matrix de Entrenamiento
                </h1>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-sm">Cargar matrix</span>
                    <span className="label-alt text-sm">
                      Solo documentos de Excel
                    </span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                    onChange={handleFileUpload}
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">
                      Ingresar la rata de aprendizaje
                    </span>
                  </div>
                  <input
                    type="text"
                    name="rataAprendizaje"
                    placeholder="0-1"
                    className="input input-primary input-bordered w-full max-w-xs"
                    onChange={handleChangeForm}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">
                      Ingresar el Numero de iteraciones
                    </span>
                  </div>
                  <input
                    type="text"
                    name="numIteraciones"
                    placeholder="NumeroIteraciones"
                    className="input input-primary input-bordered w-full max-w-xs"
                    onChange={handleChangeForm}
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">
                      Ingresar el Error Maximo permitido
                    </span>
                  </div>
                  <input
                    type="text"
                    name="errorMaximo"
                    placeholder="ErrorMaximo"
                    className="input input-primary input-bordered w-full max-w-xs"
                    onChange={handleChangeForm}
                  />
                </label>

                <div className=" mt-10 flex items-center md:w-full md:col-span-3 justify-center gap-2">
                  <button
                    type="submit"
                    className="btn md:w-2/5 btn-primary btn-outline"
                  >
                    Confirmar
                  </button>
                  <button
                    type="reset"
                    className="btn md:w-2/5 btn-error btn-outline"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </Whitecard>
          <Whitecard>
          <ComposedChart width={1000} height={190} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="uv"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </Whitecard>

        </div>
      </div>
    </Fragment>
  );
};

export default Dashmenu;
