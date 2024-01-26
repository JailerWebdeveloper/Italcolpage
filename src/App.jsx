import { Fragment } from "react";
import { BrowserRouter,Route,Routes ,Link, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import "./App.css";
import Inbox from "./Pages/subpages/Inbox/inbox.jsx";
import Dashmenu from "./Pages/subpages/Inbox/Dashmenu.jsx";
function App() {  

  return (  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/Dashboard" />} />

       <Route path="/Dashboard/*" element={<Dashboard />} >
        <Route path="inbox" element={<Inbox/>} />
        <Route path="menu" element={<Dashmenu/>} />
       </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
