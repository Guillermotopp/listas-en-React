import React from "react";
const Catalogo = () => {
    const productos = [
        {
            id: 1,
            nombre: 'Camiseta',
            precio: 20.99
        },
        {   id: 2,
            nombre: 'Pantalon',
            precio: 20.22
        },
        {   id: 3,
            nombre: 'zapatos',
            precio: 21.22
        },
        {   id: 4,
            nombre: 'corbata',
            precio: 23.22
        }
        
    ];

    return (
        <>
            <h2> Catálogo de Productos </h2>
            <ul>
                {productos.map(
                    (producto) => (
                        <li> {producto.id}: {producto.nombre} - $ {producto.precio} </li>
                    )
                )}
                
            </ul>
        </>
    );
}
export default Catalogo;