import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import "./CartItem.css";




const CartItem = ({ item }) => {
  const { deleteItem } = useContext(CartContext);
  return (
    <div className="CartItem">
      <img src={item.img} alt={item.name} className="img_carrito" />
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: {item.quantity * item.price}</p>
      <Button className="btn btn-danger x" onClick={() => deleteItem(item.id)}>
        X
      </Button>
    </div>
  );
};

export default CartItem;
