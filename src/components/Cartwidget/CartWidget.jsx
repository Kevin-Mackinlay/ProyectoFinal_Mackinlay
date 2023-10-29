import {AiOutlineShoppingCart} from 'react-icons/ai'
import Badge from 'react-bootstrap/Badge'
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
  const {cartQuantity} = useContext(CartContext)
  return (
    <div className="d-flex justify-context-around aling-items-center">
      <AiOutlineShoppingCart fontSize={"1.5rem"} />
       {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div>
  );
};

export default CartWidget;
