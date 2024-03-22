import { Fragment } from "react";
import Whitecard from "../../../components/Whitecard";
import { Legend,Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area ,ComposedChart } from "recharts";
const data = 
[
  {name: 'I1', uv:0.05},
  {name: 'I2', uv:0.25, pv: 24, amt: 2400},
  {name: 'I3', uv:0.15, pv: 24, amt: 2400},
  {name: 'I4', uv:0.01, pv: 24, amt: 2400},
  {name: 'I5', uv:0.05, pv: 24, amt: 2400},
  {name: 'I6', uv:0.05, pv: 24, amt: 2400},
  {name: 'I7', uv:0.05, pv: 24, amt: 2400},
  {name: 'I8', uv:0, pv: 24, amt: 2400},
]
const Dashmenu = () => {
  return (
    <Fragment>
      <h1 className="tracking-wider text-4xl text-center font-bold antialiased">
        Resultados
      </h1>
      <div className="divider divider-primary"></div>
      <div className="grid grid-cols-1 grid-rows-1 gap-2">
        <Whitecard>

        <ComposedChart width={1000} height={500} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="uv" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
</ComposedChart>
        </Whitecard>
      </div>
    </Fragment>
  );
};

export default Dashmenu;
