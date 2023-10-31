import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {id, name, price}
    addItem(item, quantity);
  };

  return (
    <div className="ItemDetail">
      <h3>Detalle de: {name}</h3>
      <img src={img} alt={name} />
      <p>{description}</p>
      <p>${price}</p>
      {quantityAdded === "" ? (
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart" className="btn btn-secondary">
          Ir al carrito
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
