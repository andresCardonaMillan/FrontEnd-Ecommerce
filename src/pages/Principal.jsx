import React from "react";
import "../styles/Principal.css";
// import IMG from "../images/camisa-fondo.png";
import { Link } from "react-router-dom";

function Principal() {
  return (
    <>
      <div>
        <section className="hero">
          <div className="content">
            <h2>!BIENVENIDO¡</h2>
            <p>
            Libera tu creatividad y expresa tu estilo único con nuestra
            plataforma de creación de productos y camisetas personalizadas.
            </p>
          </div>
          <div className="hero-personalizacion">
            <h3>Crea tu propio diseño</h3>
            <li className="Personalizacionstuff">

            <Link to ="/PersonalizacionPage"> 
              <img src="../imagenes/Personalizacion.png" alt="" className="Pa-icon" />
            </Link>

          </li>
          </div>
        </section>
        {/* Imagen contenedor */}
        <section className="img-content">
          <img src="/imagenes/camisa-fondo1.png" alt="Imagen de fondo" />
        </section>
        {/* Sobre mi */}
        <section className="about">
          <h2>Sobre nosotros</h2>
          <p>Texto sobre la empresa o la organización.</p>
          <ul>
            <li>
              <h3>Título 1</h3>
              <p>Descripción breve del contenido 1.</p>
            </li>
            <li>
              <h3>Título 2</h3>
              <p>Descripción breve del contenido 2.</p>
            </li>
            <li>
              <h3>Título 3</h3>
              <p>Descripción breve del contenido 3.</p>
            </li>
          </ul>
        </section>
        <section className="OPTIONS">
          <ul>
            <li>
            <button>
              <img src="/imagenes/Grupo-camisetas1.png"></img>
            </button>
            </li>
            <li>
            <button>
              <img src="/imagenes/Grupo-camisetas2.png"></img>
            </button>
            </li>
          </ul>

          </section>
        {/* Seccion Mas vendidos */}
        <section className="services">
          <h2>Mas vendidos</h2>
          <ul>
            <li>
              <h3>VideoJuegos</h3>
              <button>
                <img src="/imagenes/camiseta-videojuegos.jpg" alt="Camisa Videojuegos" />
              </button>
            </li>
            <li>
              <h3>Anime</h3>
              <button>
                <img src="/imagenes/camiseta-anime.jpg" alt="Camisa Videojuegos" />
              </button>
            </li>
            <li>
              <h3>Peliculas</h3>
              <button>
                <img src="/imagenes/camiseta-pelicula.jpg" alt="Camisa Videojuegos" />
              </button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Principal;
