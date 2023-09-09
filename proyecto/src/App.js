import React, { useState } from "react";
import './App.css';
import {Navbar, Nav, Button} from 'react-bootstrap';
import NavbarC from "./componentes/Navbar/NavbarC.js"
import Carrousel from "./componentes/Carrusel/Carrusel.js"

function App() {
  return (
    <div className="App">
      <NavbarC/>
      <Carrousel/>
      <div className="fondo">
        <br/>
        <h1>hola</h1>
      </div>
    </div>
  );
}

export default App;

