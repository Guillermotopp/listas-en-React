import React from 'react';
import "./Catalogo.css"; 

const ProductoItem = ({ producto }) => {
    // Desestructuramos las propiedades para un código más limpio
    const { nombre, precio, imagen } = producto;

    return (
        <div className='card'>
            {/* Contenedor principal: Imagen + Textos */}
            <div className='item'>
                {/* Imagen del producto */}
                <img 
                    src={imagen} 
                    alt={`Vista previa de ${nombre}`} 
                />

                {/* Contenedor secundario: Nombre arriba, Precio abajo */}
                <div className="item-text-content">
                    <h2>{nombre}</h2>   
                    <p>${precio.toFixed(2)}</p>
                </div>
            </div>

            {/* Botón comprar: Se centrará gracias al align-self: center del CSS */}
            <button type="button">
                Comprar
            </button>
        </div>
    );
}

export default ProductoItem;