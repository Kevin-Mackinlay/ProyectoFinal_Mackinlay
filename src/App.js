import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
// import { addDoc, collection } from "firebase/firestore";
import { db } from "./service/firebase";
// import { list } from "./mock/data";
import Checkout from "./components/Checkout/Checkout";

function App() {
 
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Todos nuestros productos"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos a categoria: "} />} />
            <Route path="/item/:Id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
