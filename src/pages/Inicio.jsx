import React from "react";
import "../styles/Inicio.css";
import { Link } from "react-router-dom";


export function Inicio() {
    return(
        <div className="container-inicio">
            <h1>Elige tu perfil:</h1>
            <div className="Diseñador">
                <Link to="/Diseñador" className="text">
                    <button>Diseñador</button>
                </Link>
            </div>
            <div className="Cliente">
                <Link to="/Inicio" className="text">
                    <button>Cliente</button>
                </Link>
            </div>
            <div className="Encargado">
                <Link to="/Encargado" className="text">
                    <button>Encargado</button>
                </Link>
            </div>
        </div>
    );
}