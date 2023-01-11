import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/NavBar/Nav'
import PediYa from "./pages/PediYa";
import GustoBurgerClub from "./pages/GustoBurgerClub";
import Home from "./Components/Home/Home";
import Menu from "./pages/Menu";
import Sucursales from "./pages/Sucursales";
import TrabajaAca from "./pages/TrabajaAca";
import Nosotros from "./pages/Nosotros";
import Dashboard from "./pages/Dashboard";
import Form from "./Components/Form/Form";
import Detail from "./Components/Detail/Detail";
import Perfil from "./Components/Perfil/Perfil";
import AdminProvisorio from "./pages/AdminProvisorio";
import Historial from './Components/Historial/Historial'
import Carrito from "./Components/Carrito/Carrito";
import SenGrid from "./Components/SendGrid/SenGrid";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        {/* hasta que tengamos la seccion del admin vamos a estar trabajando aca */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sendgrid" element={<SenGrid />} />
        <Route exact path="/carrito" element={<Carrito />} />
        <Route exact path="/historial" element={<Historial />} />
        <Route exact path="/adminProvisorio" element={<AdminProvisorio />} />
        <Route exact path="/create" element={<Form />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/pediya" element={<PediYa />} />
        <Route exact path="/gustoburgerclub" element={<GustoBurgerClub />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/products/:id" element={<Detail />} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/sucursales" element={<Sucursales />} />
        <Route exact path="/trabajaaca" element={<TrabajaAca />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;
