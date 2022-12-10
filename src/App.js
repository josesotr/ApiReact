import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./componentes/Card";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState ()
  const obtenerValorMoneda = async (tipo_moneda) => {
    try {
      //se llama a la APi
      const respuesta = await fetch("https://mindicador.cl/api/");
      const data = await respuesta.json();
      return data[tipo_moneda].valor;
    } catch (error) {
      alert(error.message);
    }
    return (
      <div className="contenedor">
      <Header tituloReact="Mi Indicador" />
      <img
        className="imagen"
        src="https://www.ninetynine.com/wp-content/uploads/2020/02/inflacion.png"
        alt="indicador uno"
      />
      <Card textoImagen="Indicador económico" description="Un indicador económico es un tipo de dato económico, de carácter estadístico. Gracias a este dato, podemos realizar un análisis sobre la situación económica, tanto pasada como presente y futura, de un territorio." />
      <Footer pie_de_pagina="El mundo económico" pie_de_pagina_description="Te invitamos al mundo de los indicadores económicos" />
    <di></di>
    </div>
    );
  }
}

export default App;
