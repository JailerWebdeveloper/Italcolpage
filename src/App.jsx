import { Fragment } from "react";
import { BrowserRouter,Route,Routes ,Link, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import "./App.css";
import Inbox from "../src/Pages/subpages/Inbox/Inbox.jsx";
import Dashmenu from "./Pages/subpages/Inbox/Dashmenu.jsx";
import Agenda from "./Pages/subpages/Agenda.jsx";
function App() {  

  return (  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/Dashboard" />} />
       <Route path="/Dashboard/*" element={<Dashboard />} >
       <Route path="" element={<Dashmenu/>} />
        <Route path="inbox" element={<Inbox/>} />
        <Route path="menu" element={<Dashmenu/>} />
        <Route path="Agenda" element={<Agenda/>} />
       </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
