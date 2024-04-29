import React from "react";
import "../styles/SingupPage.css";
import { Link } from "react-router-dom";
// import IMG from "../images/Logo1.png";

function LoginPage() {
    return (
      <>
        <nav>
            <div className="nav-link">
                <img src="../imagenes/Logo1.png" alt="Navbar Icon" className="navbar-icon" />
              </div>
              <div className="container">
                <button onClick={goBack}>Volver</button>
                </div>
        </nav>
        
        <div className="container">
          <h1>Regístrate</h1>
          <p>Ingresa tus datos para poder hacer una porden de personalizacion y mucho mas...</p>
          <form>
            
            <label htmlFor="correo">Correo:</label>
            <input type="email" id="correo" name="correo" required />
            
            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />
            
            <button type="submit">Enviar</button>
          </form>
        </div>
      </>
    );
  
    function goBack() {
      window.history.back();
    }
  }
  
  export default LoginPage;