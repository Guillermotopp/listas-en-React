import React from "react";
import "./Catalogo.css"; 

const Catalogo = () => {
    const productos = [
        { id: 1, nombre: 'Camiseta', precio: 20.99 },
        { id: 2, nombre: 'Pantalon', precio: 20.22 },
        { id: 3, nombre: 'Zapatos', precio: 21.22 },
        { id: 4, nombre: 'Corbata', precio: 23.22 }
    ];

    return (
        <div className="catalogo-container">
            <h2 className="catalogo-title">Catálogo de Productos</h2>
            <ul className="md3-list">
                {productos.map((producto, index) => (
                    /* Mantenemos la key={index} para tu clase de mañana */
                    <li key={index} className="md3-list-item">
                        <div className="md3-list-content">
                            <span className="md3-item-name">{producto.nombre}</span>
                        </div>
                        <span className="md3-item-price">${producto.precio}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catalogo;