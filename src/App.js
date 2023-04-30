import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './coordi/Sidebar';
import Dashboard from './coordi/pages/Dashboard';
import Autre from './coordi/pages/Dashboard';
import Equipement from './coordi/pages/Equipement';
import AddEquipement from './coordi/pages/Equ/AddEquipement';
import EditEquipement from './coordi/pages/Equ/EditEquipement';
import Login from './login/Login';
import Clients from './coordi/pages/Clients';
import Reclamation from './coordi/pages/Réclamation';
import Technicien from './coordi/pages/Technicien';
import  Menu  from './login/Menu';
import Dashboard2 from './manager/pages/Dashboard2'
import Sidebar2 from './manager/Sidebar2'
import Alertes from './manager/pages/Alertes'
import Report from './manager/pages/Report'
import  Navbarr from './technicien/Navbarr'
import Tab from './technicien/Tab';
import Addclient from './coordi/pages/client/Addclient';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRoutes />} />
        <Route path="/coord/*" element={<CoordRoutes />} />
        <Route path="/gest/*" element={<ManagRoutes />} />
        <Route path="/tech/*" element={<TechRoutes />} />

      </Routes>
    </BrowserRouter>
  );
};
const TechRoutes = () => {
    return (
      <>
        <Navbarr/>
        <Tab/>
        
      </>
    );
  };
const LoginRoutes = () => {
  return (
    <>
      <Menu/>
      <Login/>
      
    </>
  );
};
const CoordRoutes = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/client" element={<Clients />} />
          <Route exact path="/addclient" element={<Addclient/>} />
          <Route path="/rapports" element={<Report />} />
          <Route path="/equipement" element={<Equipement />} />
          <Route exact path="/addequ" element={<AddEquipement />} />
          <Route exact path="/editequ" element={<EditEquipement />} />
          <Route path="/reclamation" element={<Reclamation />} />
          <Route path="/technicien" element={<Technicien/>} />
        </Routes>
      </Sidebar>
    </>
  );
};
const ManagRoutes = () => {
    return (
      <>
        <Sidebar2>
          <Routes>
            <Route path="/" element={<Dashboard2 />} />
            <Route path="/1" element={<Clients />} />
            <Route path="/alertes" element={<Alertes/>} />
            <Route path="/rapports" element={<Report />} />
            <Route path="/5" element={<Reclamation />} />
            <Route path="/4" element={<Technicien/>} />
          </Routes>
        </Sidebar2>
      </>
    );
  };
export default App;
