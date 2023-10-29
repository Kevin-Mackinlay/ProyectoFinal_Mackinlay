import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, category, description, img, name, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
const { addItem} = useContext(CartContext)

  const onAdd = (quantity) => {
  
    setQuantityAdded(quantity)
    const item = {id, name, price}
    addItem(item, quantity)
  };

 

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Detalle de: {name}</h3>
      <img src={img} alt={name}></img>
      <p>{description}</p>
      <p>${price}</p>
      {/* { quantityAdded !== 0 ? <ItemCount initial={1} stock={stock} onAdd={onAdd} />
   : <Link to='/cart' className='btn btn-secondary'>Ir al carrito</Link>} */}
      {quantityAdded > 0 ? (
        <Link to="/cart" className="btn btn-secondary">
          Ir al carrito
        </Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
