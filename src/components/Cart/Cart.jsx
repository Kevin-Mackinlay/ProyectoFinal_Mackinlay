import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem.jsx";
import Button from "react-bootstrap/Button";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div>
      {cart.length ? (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p>Total a pagar: ${total()}</p>
          <div>
            <Button className="btn btn-danger" onClick={clearCart}>
              Vaciar Carrito
            </Button>
            <Link to="/checkout" className="btn btn-secondary">
              Terminar Compra
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h3> Carrito está vacio</h3>
          <Link to="/" className="btn btn-dark secondary">
            Ir a comprar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
