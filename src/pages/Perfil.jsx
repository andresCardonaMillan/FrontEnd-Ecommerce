import React, { useState } from "react";
import "../styles/Perfil.css";
// import IMG from "../images/Logo1.png";

export function Perfil() {
    const [userData, setUserData] = useState({
        name: 'Juan Pérez',
        city: 'Cali',
        address: 'Calle 123',
        email: 'juan@example.com',
        imagen: ""
    });

    const [userOrders] = useState([
        { id: 1, date: '2024-05-09', total: 50 },
        { id: 2, date: '2024-05-07', total: 70 },
        { id: 3, date: '2024-05-05', total: 100 }
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
    <>
      <div className="container">
        <h1>Perfil de usuario</h1>

        <form>
          <div className="profile-image">
            <img src={userData.imagen || ""} alt="Imagen de perfil" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
                <h3>Datos del usuario:</h3>
                <p>Nombre: {userData.name}</p>
                <p>Ciudad: {userData.city}</p>
                <p>Dirección: {userData.address}</p>
                <p>Correo electrónico: {userData.email}</p>
            </div>

            <h3>Órdenes realizadas:</h3>
            <ul>
                {userOrders.map(order => (
                    <li key={order.id}>
                        Orden ID: {order.id}, Fecha: {order.date}, Total: {order.total}
                    </li>
                ))}
            </ul>
        </form>
      </div>
    </>
  );
}