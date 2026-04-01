import React from "react";
// Corregimos la importación para usar PascalCase (ProductoItem con 'I' mayúscula)
import ProductoItem from "./ProductoItem";
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
            {productos.length === 0 ? (
                <p> No hay productos disponibles en el catálogo</p>
            ) : (
                <ul className="md3-list">
                    {productos.map((producto) => (
                        /* Sin la key aquí, tal como lo pediste por fines didácticos */
                        <ProductoItem producto={producto} />
                    ))}
                </ul>
            )}
        </>
    );
}

export default Catalogo;