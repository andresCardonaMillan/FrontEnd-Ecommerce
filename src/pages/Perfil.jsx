import React, { useState } from "react";
import "../styles/Perfil.css";

export function Perfil() {
  const [userData, setUserData] = useState({
    name: "Juan Pérez",
    city: "Cali",
    address: "Calle 123",
    email: "juan@example.com",
    imagen: "",
  });

  const [userOrders] = useState([
    { id: 1, date: "2024-05-09", total: 50 },
    { id: 2, date: "2024-05-07", total: 70 },
    { id: 3, date: "2024-05-05", total: 100 },
  ]);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({ ...userData, imagen: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="container">
      <h1 className="profile-title">Perfil de usuario</h1>

      <div className="profile-section">
        <div className="user-data">
          <h3>Datos del usuario:</h3>
          <table>
            <tbody>
              <tr>
                <td>Nombre:</td>
                <td>{userData.name}</td>
              </tr>
              <tr>
                <td>Ciudad:</td>
                <td>{userData.city}</td>
              </tr>
              <tr>
                <td>Dirección:</td>
                <td>{userData.address}</td>
              </tr>
              <tr>
                <td>Correo electrónico:</td>
                <td>{userData.email}</td>
              </tr>
            </tbody>
          </table>
          <button type="button" onClick={() => document.getElementById('fileInput').click()}>Cambiar foto de perfil</button>
          <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </div>
        <div className="profile-image">
          <img src={userData.imagen || "/imagenes/profile_usericon.png"} alt="Imagen de perfil" />
        </div>
      </div>

      <h3>Órdenes realizadas:</h3>
      <table className="order-list-table">
        <thead>
          <tr>
            <th>Orden ID</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {userOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td id="order-details">
                <p>Fecha: {order.date}</p>
                <p>Total: {order.total}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
