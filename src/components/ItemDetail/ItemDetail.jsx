import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} productos`);
    setQuantityAdded(quantity)
  };

 

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Detalle de: {product.name}</h3>
      <img src={product.img} alt={product.name}></img>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* { quantityAdded !== 0 ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
   : <Link to='/cart' className='btn btn-secondary'>Ir al carrito</Link>} */}
      {quantityAdded !== 0 ? (
        <Link to="/cart" className="btn btn-secondary">
          Ir al carrito
        </Link>
      ) : (
        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
