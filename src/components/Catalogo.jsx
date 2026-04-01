import React from "react";
import ProductoItem from "./ProductoItem";

// 1. Corregimos las rutas (usando ./ y barras /)
import camisa from "./camisa.png";
import pantalon from "./pantalon.png";
import zapatos from "./zapatos.png";
import corbata from "./corbata.jpg";

import "./Catalogo.css"; 

const Catalogo = () => {
    const productos = [
        { id: 1, nombre: 'Camisa', precio: 20.99, imagen: camisa },
        { id: 2, nombre: 'Pantalón', precio: 20.22, imagen: pantalon },
        { id: 3, nombre: 'Zapatos', precio: 21.22, imagen: zapatos },
        // 2. Corregimos el nombre de la variable (era corbata, no crobata)
        { id: 4, nombre: 'Corbata', precio: 23.22, imagen: corbata }
    ];

    return (
        <>
            <h2 className="catalogo-title">Catálogo de Productos</h2>
            {productos.length === 0 ? (
                <p> No hay productos disponibles en el catálogo</p>
            ) : (
                <div className='productos'>
                    {productos.map((producto) => (
                        <ProductoItem key={producto.id} producto={producto} />
                    ))}
                </div>
            )}
        </>
    );
}

export default Catalogo;