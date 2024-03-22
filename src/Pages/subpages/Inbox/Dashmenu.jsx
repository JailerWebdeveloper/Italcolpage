import { Fragment } from "react";
import { useState, useEffect } from "react";
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
  LineChart,
  ComposedChart,
} from "recharts";

const Dashmenu = () => {


  const [arreglo, setarreglo] = useState({});
  const [formData, setFormData] = useState({
    rataAprendizaje: "",
    numIteraciones: "",
    errorMaximo: "",
  });

  const[grafo,setgrafo]=useState([])
  const[iteracion, setiteracion]=useState([])

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formatedata = {
      rataAprendizaje: Number(formData.rataAprendizaje),
      numIteraciones: Number(formData.numIteraciones),
      errorMaximo: Number(formData.errorMaximo),
    };

    const archivo = {
      archivo: File,
    };

    try {
      const formDataResponse = await axios.post(
        "http://localhost:3001/API/V1/traerdatos",
        formatedata
      );

      const fileResponse = await axios.post(
        "http://localhost:3001/API/V1/subir-archivo",
        archivo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const mamada = await axios.get(
        "http://localhost:3001/API/V1/obtener-archivo"
      );
      const respuesta = await axios.get(
        "http://localhost:3001/API/V1/Procesos"
      );
      setarreglo(respuesta.data);
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error al enviar datos");
    }
  };

  const handleentrenar = async () => {
    const respuesta = await axios.get("http://localhost:3001/API/V1/Solucion");
    if (respuesta.status === 200) {
      const exportardatos = await axios.get(
        "http://localhost:3001/API/V1/Exportardatos"
      );
      setiteracion(exportardatos.data.erroresIteracion)

      const nuevoGrafo = exportardatos.data.erroresIteracion.map((element, index) => ({
        name: index,
        ErrorIteracion: element,
        ErrorMaximo: arreglo.errorMaximo
      }));
  
      setgrafo(nuevoGrafo);
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
                  Ingresar matriz de Entrenamiento
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
                    name="archivo"
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
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Patrones</th>
                    <th>Entradas</th>
                    <th>Salidas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-base-200">
                    <th></th>
                    <td>{arreglo.Patrones}</td>
                    <td>{arreglo.entradas}</td>
                    <td>{arreglo.salidas}</td>
                  </tr>
                  ;
                </tbody>
              </table>
            </div>
            <button
              onClick={handleentrenar}
              className={`btn btn-success w-full ${
                arreglo.Patrones == undefined ? "btn-disabled" : ""
              } `}
            >
              Entrenar
            </button>
          </Whitecard>
          <Whitecard>
            <ComposedChart
              width={1100}
              height={250}
              data={grafo}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="ErrorMaximo" stroke="#8884d8" />
              <Line type="monotone" dataKey="ErrorIteracion" stroke="#82ca9d" />
            </ComposedChart>
          </Whitecard>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashmenu;
