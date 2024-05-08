import React from "react";
import "../styles/Personalizacion.css";
// import IMG from "../images/Logo1.png";

export function PersonalizacionPage() {
    return (
      <>
        <nav>
        <div className="nav-link">
                <img src="../imagenes/Logo1.png" alt="Navbar Icon" className="navbar-icon" />
        </div>
        <div className="container">
          <button onClick={goBack}>Volver al inicio</button>
          <button type="submit">Guardar</button>
        </div>
        </nav>
  
        <div className="container">
        <h2>Personalización</h2>
        <form>
          <div className="personalizacion-row">
            <label htmlFor="shirtSize">Talla de Camisa:</label>
            <select id="shirtSize" name="shirtSize">
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>

            <label htmlFor="shirtColor">Color de Camisa:</label>
            <select id="shirtColor" name="shirtColor">
              <option value="black">Negro</option>
              <option value="white">Blanco</option>
              <option value="red">Rojo</option>
              <option value="purple">Morado</option>
            </select>
          </div>

          {/* Add other personalization options here */}
          <button type="submit">Guardar</button>
        </form>
      </div>
    </>
  );

  function goBack() {
    window.history.back();
  }
}