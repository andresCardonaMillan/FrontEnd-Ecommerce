import React, { useState } from 'react';

export function Perfil() {
    const [userData] = useState({
        name: 'Juan Pérez',
        city: 'Cali',
        address: 'Calle 123',
        email: 'juan@example.com'
    });

    const [userOrders] = useState([
        { id: 1, date: '2024-05-09', total: 50 },
        { id: 2, date: '2024-05-07', total: 70 },
        { id: 3, date: '2024-05-05', total: 100 }
    ]);

    return (
        <div>
            <h2>Perfil de usuario</h2>
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
        </div>
    );
}


