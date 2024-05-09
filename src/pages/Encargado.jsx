import React, { useState } from "react";
import "../styles/EncargadoPage.css"; // Archivo CSS para estilos específicos

function EncargadoPage() {
  // Lista de órdenes y diseñadores (solo para propósitos de demostración, puedes obtenerla de tu base de datos)
  const [ordenes, setOrdenes] = useState([
    { id: 1, cliente: "Cliente 1", estado: "Pendiente", diseñoId: null },
    { id: 2, cliente: "Cliente 2", estado: "Pagado", diseñoId: null },
    { id: 3, cliente: "Cliente 3", estado: "En proceso", diseñoId: 1 },
    { id: 4, cliente: "Cliente 4", estado: "Enviado", diseñoId: 2 }
  ]);

  const [diseñadores] = useState([
    { id: 1, nombre: "Diseñador 1" },
    { id: 2, nombre: "Diseñador 2" },
    { id: 3, nombre: "Diseñador 3" }
  ]);

  // Función para cambiar el estado de una orden
  const cambiarEstadoOrden = (id, nuevoEstado) => {
    setOrdenes(ordenes.map(ord => (ord.id === id ? { ...ord, estado: nuevoEstado } : ord)));
  };

  // Función para asignar diseñador a una orden
  const asignarDiseñador = (id, diseñadorId) => {
    setOrdenes(ordenes.map(ord => (ord.id === id ? { ...ord, diseñoId: diseñadorId } : ord)));
  };

  return (
    <div className="encargado-page">
      <h1>Panel del Encargado</h1>
      <div>
        <h2>Órdenes</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Diseño</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map(ord => (
              <tr key={ord.id}>
                <td>{ord.id}</td>
                <td>{ord.cliente}</td>
                <td>{ord.estado}</td>
                <td>{ord.diseñoId ? diseñadores.find(d => d.id === ord.diseñoId).nombre : "N/A"}</td>
                <td>
                  <button className="btn-proceso" onClick={() => cambiarEstadoOrden(ord.id, "En proceso")}>En Proceso</button>
                  <button className="btn-enviado" onClick={() => cambiarEstadoOrden(ord.id, "Enviado")}>Enviado</button>
                  <select className="select-diseñador" onChange={(e) => asignarDiseñador(ord.id, parseInt(e.target.value))}>
                    <option value="">Seleccionar Diseñador</option>
                    {diseñadores.map(diseñador => (
                      <option key={diseñador.id} value={diseñador.id}>{diseñador.nombre}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EncargadoPage;
