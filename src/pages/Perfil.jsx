import React from "react";
import React, { useState } from "react";
import "../styles/Perfil.css";
// import IMG from "../images/Logo1.png";

export function Perfil() {
  const [userData, setUserData] = useState({
    nombre: "",
    correo: "",
    celular: "",
    ciudad: "",
    departamento: "",
    direccion: "",
    imagen: "", // Añadir propiedad para la imagen de perfil
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

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
      <nav>
        <div className="navlink">
          <img src="../imagenes/Logo1.png" alt="Navbar Icon" className="navbaricon2" />
        </div>
      </nav>

      <div className="container">
        <h1>Editar Perfil</h1>
        <p>Actualiza tus datos para mantener tu información al día.</p>

        <form>
          <div className="profile-image">
            <img src={userData.imagen || ""} alt="Imagen de perfil" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={userData.nombre}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={userData.correo}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="celular">Celular:</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={userData.celular}
            onChange={handleInputChange}
          />

          <label htmlFor="ciudad">Ciudad:</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={userData.ciudad}
            onChange={handleInputChange}
          />

          <label htmlFor="departamento">Departamento:</label>
          <input
            type="text"
            id="departamento"
            name="departamento"
            value={userData.departamento}
            onChange={handleInputChange}
          />

          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={userData.direccion}
            onChange={handleInputChange}
          />

          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </>
  );
}

