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
        <section class="about">
          <h2>Sobre nosotros</h2>
          <p>
            Somos una tienda virtual que ofrece una amplia
            gama de camisetas personalizadas y otros productos,
            utilizando técnicas de impresión de alta calidad para 
            plasmar tus ideas y diseños únicos en cada prenda..</p>
          <ul>
            <li class="about-box">
            <h3>Mision</h3>
              <p>Ser la tienda virtual líder en la creación de camisetas personalizadas y otros productos, ofreciendo a nuestros clientes una experiencia de compra única y satisfactoria, donde la creatividad y la calidad se unen para crear productos que reflejen su estilo personal.</p>
             </li>
            <li class="about-box">
              <h3>Vision</h3>
                <p>Convertirnos en una marca reconocida a nivel mundial por nuestra innovación, calidad y compromiso con la satisfacción del cliente, ofreciendo una amplia gama de productos personalizados que permitan a las personas expresarse libremente a través de la moda.</p>
            </li>
          </ul>
        </section>

        <section className="OPTIONS">
          <div class="options-header">
            <h2>Categorias</h2>
          </div>
          <ul>
            <li>
            <button>
              <img src="/imagenes/Grupo-camisetas1.png" alt="mascosas"></img>
            </button>
            </li>
            <li>
            <button>
              <img src="/imagenes/Grupo-camisetas2.png" alt="camisas"></img>
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
            <li>
              <h3>Música</h3>
              <button>
              <img src="/imagenes/camisaRock.png" alt="Camisa Música" />
              </button>
            </li>
            <li>
              <h3>Series</h3>
              <button>
              <img src="/imagenes/camisaSeries.png" alt="Camisa Serie" />
              </button>
            </li>
            <li>
              <h3>Deporte</h3>
              <button>
              <img src="/imagenes/camisaDeporte.png" alt="Camisa Deporte" />
            </button>
            </li>
            
          </ul>
        </section>
      </div>
    </>
  );
}

export default Principal;
