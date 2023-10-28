import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState('')
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} productos`);
    setCantidadAgregada(cantidad)
  };

  console.log(cantidadAgregada);

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Detalle de: {producto.name}</h3>
      <img src={producto.img} alt={producto.name}></img>
      <p>{producto.description}</p>
      <p>${producto.price}</p>
     { cantidadAgregada === '' ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
   : <Link to='/cart' className='btn btn-secondary'>Ir al carrito</Link>}
    </div>
  );
};

export default ItemDetail;
