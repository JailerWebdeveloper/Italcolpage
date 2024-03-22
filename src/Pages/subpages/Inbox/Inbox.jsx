import { Fragment, useState } from "react";
import axios from "axios";
import Whitecard from "../../../components/Whitecard";

export default function Inbox() {
  const [file, setFile] = useState(null);
  const [resultado, setResultado] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const fileResponse = await axios.post(
        "http://localhost:3001/API/V1/simulacion",
        file
      );
      console.log("Respuesta del archivo API:", fileResponse.data);
      setResultado(fileResponse.data);
      alert("Datos enviados correctamente");
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error al enviar datos");
    }
  };

  return (
    <Fragment>
      <div className="h-full w-full px-2 overflow-y-auto">
        <h1 className="tracking-wider text-4xl text-center font-bold antialiased">
          Simulacion
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
                  Ingresar Matrix de simulacion
                </h1>
                <label className="form-control col-span-3 w-full max-w-xs">
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
          {resultado && (
            <Whitecard>
              <p className="text-black text-center">
                El resultado es: {resultado}
              </p>
            </Whitecard>
          )}
        </div>
      </div>
    </Fragment>
  );
}
