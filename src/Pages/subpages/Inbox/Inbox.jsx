import { useState } from "react";
import axios from "axios";

export default function Inbox() {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataResponse = await axios.post("http://localhost:3001/API/V1/traerdatos", formData);

      const fileResponse = await axios.post("http://localhost:3001/API/V1/subir-archivo", File);
      console.log("Respuesta del formulario API:", formDataResponse.data);
      console.log("Respuesta del archivo API:", fileResponse.data);
      alert("Datos enviados correctamente");
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error al enviar datos");
    }
  };

  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="md:w-4/5 w-full md:px-10 md:mx-auto bg-base-400 h-full grid grid-rows-auto gap-5 grid-cols-1 md:grid-cols-3 place-items-center place-content-start rounded-lg p-2"
      >
        <h1 className="text-primary uppercase antialised text-5xl md:col-span-3 my-10 mx-auto text-center font-bold">
          Ingresar matrix inicial
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-sm">Cargar matrix</span>
            <span className="label-alt text-sm">Solo documentos de Excel</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            onChange={handleFileUpload}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingresar la rata de aprendizaje</span>
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
            type="number"
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
          <button type="reset" className="btn md:w-2/5 btn-error btn-outline">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
