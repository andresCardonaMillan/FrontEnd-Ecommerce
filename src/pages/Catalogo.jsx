import React, { useState } from "react";
import "../styles/Catalogo.css";
import Descripcion from "../components/Descripcion";
import { data } from '../data.jsx';
// import { Link } from "react-router-dom";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  const onAddProduct = product => {
    if (allProducts.find(item => item.id === product.id)) {
      const products = allProducts.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const handleButtonClick = () => {
    setButtonVisible(false);
    setShowDescription(true);
  };

  return (
    <div className='container-items'>
      {data.map(product => (
        <div className={`item ${expandedItem === product.id ? 'expanded' : ''}`} key={product.id}>
          <figure id='figure'>
            <img style={{userSelect: 'none'}} src={product.img} alt={product.nameProduct} />
          </figure>
          <div className='info-product'>
            <h2>{product.nameProduct}</h2>
            <p className='price'>${product.price}</p>
            {showDescription && <Descripcion nombre={product.nameProduct} descripcion={product.descripcion} />} {/* Renderiza Descripcion si showDescription es true */}
            {buttonVisible && (
              <button onClick={() => { onAddProduct(product); }}>
                Añadir al carrito
              </button>
            )}
            <button onClick={() => setExpandedItem(expandedItem === product.id ? null : product.id)}>
              Ver mas...
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};