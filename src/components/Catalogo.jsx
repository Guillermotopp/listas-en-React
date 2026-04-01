import React, { Fragment } from "react";
import "./Catalogo.css"; 

const Catalogo = () => {
    const productos = [
        { id: 1, nombre: 'Camiseta', precio: 20.99 },
        { id: 2, nombre: 'Pantalon', precio: 20.22 },
        { id: 3, nombre: 'Zapatos', precio: 21.22 },
        { id: 4, nombre: 'Corbata', precio: 23.22 }
    ];

    return (
        <>
            <h2 className="catalogo-title">Catálogo de Productos</h2>
            {productos.length === 0 ?
            (<p> No hay productos disponibles en el catálogo</p>

            ) : (
                
            
                <ul className="md3-list">
                    {productos.map((producto) => (
                        <li key={producto.id} className="md3-list-item">
                            <div className="md3-list-content">
                                <span className="md3-item-name">{producto.nombre}</span>
                            </div>
                            <span className="md3-item-price">${producto.precio}</span>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Catalogo;