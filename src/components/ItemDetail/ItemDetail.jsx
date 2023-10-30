import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './ItemDetail.css'
// const ItemDetail = ({ producto}) => {
//     const [quantityAdded, setQuantityAdded] = useState(0)
// const { addItem} = useContext(CartContext)

//   const onAdd = (quantity) => {

//     setQuantityAdded(quantity)
//     const item = {producto}
//     addItem(item, quantity)
//   };

const ItemDetail = ({ id, name, img, price, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
      img,
    };
    addItem(item, quantity);
  };

  return (
    <div className="ItemDetail">
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
