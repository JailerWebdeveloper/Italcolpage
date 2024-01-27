import { Fragment } from "react";


const Agenda = () => {
    return ( 
        <Fragment>
            <h1 className="tracking-wider text-4xl text-center font-bold antialiased">
                Agenda
            </h1>
            <div className="divider divider-primary"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <h2 className="text-2xl font-bold tracking-wide antialiased">
                        Agenda
                    </h2>
                    <div class="divider divider-primary">Informacion</div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-5">
                    <h2 className="text-2xl font-bold tracking-wide antialiased">
                        Visitas
                    </h2>
                    <div class="divider divider-primary">Pendientes</div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-5">
                    <h2 className="text-2xl font-bold tracking-wide antialiased">
                        Clientes
                    </h2>
                    <div class="divider divider-primary">Lista</div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-5">
                    <h2 className="text-2xl font-bold tracking-wide antialiased">
                        Metas
                    </h2>
                    <div class="divider divider-primary">Metricas</div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Agenda;