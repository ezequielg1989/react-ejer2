import React from "react";
import "../assets/css/Tabla.css";
import Tabla2 from "./Tabla2";
const Tabla = () => {
  return (
    <div>
      <div className="row">
        <div className="titulares">
          <h3>titulo</h3>
        </div>
        <div className="titulares">
          <h3>rating</h3>
        </div>
        <div className="titulares">
          <h3>genero</h3>
        </div>
        
      </div>
      <Tabla2  titulo={"hola"} rating={"7"} generos={["terror","ficcion"]}/>
    </div>
  );
};

export default Tabla;
