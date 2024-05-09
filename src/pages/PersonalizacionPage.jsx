import React, { useState } from "react";
import "../styles/Personalizacion.css";
import { data } from '../data.jsx';

export function PersonalizacionPage() {
    const imageId2 = data.find(item => item.id === 2);
    const [textInput, setTextInput] = useState("");
    const [redValue, setRedValue] = useState(0);
    const [greenValue, setGreenValue] = useState(0);
    const [blueValue, setBlueValue] = useState(0);
    const [shirtSize, setShirtSize] = useState("");

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleColorChange = (event) => {
        const { name, value } = event.target;
        if (name === "red") {
            setRedValue(value);
        } else if (name === "green") {
            setGreenValue(value);
        } else if (name === "blue") {
            setBlueValue(value);
        }
    };

    const handleSizeChange = (event) => {
        setShirtSize(event.target.value);
    };

    const handleAddImage = () => {
        // Lógica para agregar una imagen
    };

    return (
        <>
            <nav>
                <div className="container">
                    <button onClick={goBack}>Volver al inicio</button>
                    <button type="submit">Guardar</button>
                </div>
            </nav>

            <div className="container">
                <h2>Personalización</h2>
                {/* Mostrar la imagen */}
                {imageId2 && (
                            <div className="personalizacion-row">
                                <img src={imageId2.img} alt={imageId2.nameProduct} />
                            </div>
                        )}
                <form className="personalizacion-form">
                    <div className="personalizacion-column">
                        <div className="personalizacion-row">
                            <label>Talla de Camisa:</label>
                            <div className="size-grid">
                                <div>
                                    <input type="radio" name="shirtSize" value="XS" id="sizeXS" checked={shirtSize === "XS"} onChange={handleSizeChange} />
                                    <label htmlFor="sizeXS">XS</label>
                                </div>
                                <div>
                                    <input type="radio" name="shirtSize" value="L" id="sizeL" checked={shirtSize === "L"} onChange={handleSizeChange} />
                                    <label htmlFor="sizeL">S</label>
                                </div>
                                <div>
                                    <input type="radio" name="shirtSize" value="S" id="sizeS" checked={shirtSize === "S"} onChange={handleSizeChange} />
                                    <label htmlFor="sizeS">M</label>
                                </div>
                                <div>
                                    <input type="radio" name="shirtSize" value="XL" id="sizeXL" checked={shirtSize === "XL"} onChange={handleSizeChange} />
                                    <label htmlFor="sizeXL">L</label>
                                </div>
                                <div>
                                    <input type="radio" name="shirtSize" value="M" id="sizeM" checked={shirtSize === "M"} onChange={handleSizeChange} />
                                    <label htmlFor="sizeM">XL</label>
                                </div>
                                <div>
                                    <input type="radio" name="shirtSize" value="XXL" id="sizeXXL" checked={shirtSize === "XXL"} onChange={handleSizeChange} />
                                    <label htmlFor="sizeXXL">XXL</label>
                                </div>
                            </div>
                        </div>

                        <div className="personalizacion-row">
                            <label htmlFor="shirtColor">Color de Camisa:</label>
                            <div className="color-picker">
                                <div className="color-input">
                                    <label htmlFor="red">Rojo:</label>
                                    <input type="range" id="red" name="red" min="0" max="255" value={redValue} onChange={handleColorChange} />
                                    <span id="red-value">{redValue}</span>
                                </div>
                                <div className="color-input">
                                    <label htmlFor="green">Verde:</label>
                                    <input type="range" id="green" name="green" min="0" max="255" value={greenValue} onChange={handleColorChange} />
                                    <span id="green-value">{greenValue}</span>
                                </div>
                                <div className="color-input">
                                    <label htmlFor="blue">Azul:</label>
                                    <input type="range" id="blue" name="blue" min="0" max="255" value={blueValue} onChange={handleColorChange} />
                                    <span id="blue-value">{blueValue}</span>
                                </div>
                                <div className="color-preview" style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}></div>
                            </div>
                        </div>

                        {/* Botón para agregar imagen */}
                        <div className="personalizacion-row">
                            <button type="button" onClick={handleAddImage}>Agregar imagen</button>
                        </div>
                    </div>

                    <div className="personalizacion-column">
                        {/* Textarea para ingresar texto */}
                        <div className="personalizacion-row">
                            <label htmlFor="shirtText">Enviar Comentarios:</label>
                            <textarea
                                id="shirtText"
                                name="shirtText"
                                rows="4"
                                cols="50"
                                value={textInput}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );

    function goBack() {
        window.history.back();
    }
}
