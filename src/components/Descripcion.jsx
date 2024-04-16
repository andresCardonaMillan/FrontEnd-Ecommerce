import React from "react";

function Producto(props) {
  return (
    <div className="container">
      <div className="container-comentario">
        <h1>{props.nombre}</h1>
        <p>{props.descripcion}</p>
      </div>
      <div className="contaimer_img">
        
      </div>
    </div>
  );
}

export default Producto;
