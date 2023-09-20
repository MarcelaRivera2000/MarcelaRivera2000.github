import React from "react";
import {Routes,Route,} from "react-router-dom";
import './App.css';
import Navbar from "./componentes/Navbar/NavbarC"
import Paginaprincipal from "./Pages/PaginaPrincipal/Paginaprincipal";
import Catalogo from './Pages/catalogo/Catalogo'; 

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/proyecto" exact element={<Paginaprincipal/>}/>
        <Route path="/catalogo" element={<Catalogo/>}/>
      </Routes>
    </>
  );
}

export default App;

