import React from "react";
import "../styles/LoginPage.css";
// import IMG from "../images/Logo1.png";

export function LoginPage() {
    return (
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
          <h1>Regístrate</h1>
          <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            
            <label htmlFor="correo">Correo:</label>
            <input type="email" id="correo" name="correo" required />
            
            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />
            
            <button type="submit">Crear</button>
          </form>
        </div>
      </>
    );
  
    function goBack() {
      window.history.back();
    }
  }
  