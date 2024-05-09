import React, { useState } from 'react';
import "../styles/Ordenes.css";

export function Orden() {

    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const [ciudad, setCiudad] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [numeroContacto, setNumeroContacto] = useState('');

    const handleMostrarMensaje = (event) => {
        event.preventDefault();
        if (ciudad && correo && direccion && codigoPostal && numeroContacto) {
            setMostrarMensaje(true);
        } else {
            window.alert('Por favor, complete todos los campos antes de continuar.');
        }
    };

    const handleComprar = () => {
        //Aqui va la logia de mandar los datos al servidor
        window.location.reload();
    };

    return(
        <>
        <nav>
            <div className="navlink2">
                <img src="../imagenes/Logo1.png" alt="Navbar Icon" className="navbaricon3" />
              </div>
              <div className="container">
                <button onClick={goBack}>Volver</button>
                </div>
        </nav>
        
        <div className="container">
          <h1>Rellena los siguientes campos</h1>
          <form>
        <div className="CiudadContainer">
          <label htmlFor="Ciudad">Elige tu ciudad</label>
            <select id="Ciudad" name="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
              <option value="">Seleccionar Ciudad</option>
              <option value="Cali">Cali</option>
              <option value="Medellin">Medellin</option>
              <option value="Bogota">Bogota</option>
            </select>
        </div>

            <label htmlFor="Correo">Correo Electronico:</label>
            <input type="text" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

            <label htmlFor="Direccion">Direccion:</label>
            <input type="text" id="nombre" name="nombre" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
            
            <label htmlFor="codigoPostal">Codigo Postal:</label>
            <input type="text" id="codigoPostal" name="codigoPostal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} required />

            <label htmlFor="NumeroContacto">Numero de contacto:</label>
            <input type="text" id="NumeroContacto" name="NumeroContacto" value={numeroContacto} onChange={(e) => setNumeroContacto(e.target.value)} required />


            <button type="submit" onClick={handleMostrarMensaje} disabled={!ciudad || !correo || !direccion || !codigoPostal || !numeroContacto}>Continuar</button>
            {mostrarMensaje && (
                <div className="mensaje-emergente">
                Le llegará un recibo a su correo el cual debe cancelar para que su pedido se envíe
                <button onClick={handleComprar}>Comprar</button>
                </div>
            )}
            
            </form>
        </div>
      </>
    );
    
    function goBack() {
        window.history.back();
    }
}
