import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, serverTimestamp, writeBatch, addDoc, getDocs, query, where } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import "./Checkout.css";
import { db } from "../../service/firebase";


const Checkout = () => {
  const [user, setUser] = useState({});
  const [valiteEmail, setValidateEmail] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const datoscComprador = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const finalizarCompra = (e) => {
    e.preventDefault();
    if (!user.name && user.phone) {
      alert("los campos son obligatorios");
    } else {
      let order = {
        user,
        item: cart,
        total: total(),
        date: serverTimestamp(),
      };
      const ventas = collection(db, "orders");
      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      {orderId !== "" ? (
        <div>
          <h2>Felicitaciones!! Tu orden fue generada!!</h2>
          <h5>Su id de registro es: {orderId}</h5>
          {/* <img src={Img} /> */}
        </div>
      ) : (
        <div className="form">
          <h2>Terminar Compra</h2>
          <h5>Completar con tus datos</h5>
          <form onSubmit={finalizarCompra}>
            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>
              <input className="form-control" onChange={datoscComprador} type="text" placeholder="Nombre Completo" name="name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Número de Telefono</label>
              <input className="form-control" onChange={datoscComprador} type="number" placeholder="+541556612354" name="phone" />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección de email</label>
              <input className="form-control" onChange={datoscComprador} type="email" placeholder="xxx@email.com" name="mail" />
            </div>
            <div className="mb-3">
              <label className="form-label">Repita su email</label>
              <input className="form-control" type="email" placeholder="xxx@email.com" name="mail" onChange={(e) => setValidateEmail(e.target.value)} />
            </div>
            <Button className="btn btn-dark" type="submit" disabled={valiteEmail !== user.mail}>
              Generar Orden
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
