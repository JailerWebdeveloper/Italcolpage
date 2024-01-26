import { Fragment } from "react";
import Whitecard from "../../../components/Whitecard";
import {
  MdCalendarMonth,
  MdCoPresent,
  MdDiversity1,
  MdInsertChartOutlined,
} from "react-icons/md";

const Dashmenu = () => {
  return (
    <Fragment>
      <h1 className="tracking-wider text-4xl text-center font-bold antialiased">
        Dashboard
      </h1>
      <div className="divider divider-primary"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Whitecard centered>
          <MdCalendarMonth className="text-6xl text-primary" />
          <h2 className="text-2xl font-bold tracking-wide antialiased">
            Agenda
          </h2>
          <div class="divider divider-primary">Informacion</div>
        </Whitecard>

        <Whitecard centered>
          <MdDiversity1 className="text-6xl text-primary" />
          <h2 className="text-2xl font-bold tracking-wide antialiased">
            Visitas
          </h2>
          <div class="divider divider-primary">Pendientes</div>
        </Whitecard>

        <Whitecard centered>
          <MdCoPresent className="text-6xl text-primary" />
          <h2 className="text-2xl font-bold tracking-wide antialiased">
            Clientes
          </h2>
          <div class="divider divider-primary">Lista</div>
        </Whitecard>

        <Whitecard centered>
          <MdInsertChartOutlined className="text-6xl text-primary" />
          <h2 className="text-2xl font-bold tracking-wide antialiased">
            Metas
          </h2>
          <div class="divider divider-primary">Metricas</div>
        </Whitecard>
      </div>
    </Fragment>
  );
};

export default Dashmenu;
