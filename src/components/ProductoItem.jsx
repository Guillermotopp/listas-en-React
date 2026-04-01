import React from 'react';
import "./Catalogo.css"; 

// Estandarizamos el nombre a ProductoItem
const ProductoItem = ({ producto }) => {
    return (
        /* La key está aquí adentro, en el elemento HTML devuelto */
        <li key={producto.id} className="md3-list-item">
            <div className="md3-list-content">
                <span className="md3-item-name">{producto.nombre}</span>
            </div>
            <span className="md3-item-price">${producto.precio}</span>
        </li>
    );
}

export default ProductoItem;