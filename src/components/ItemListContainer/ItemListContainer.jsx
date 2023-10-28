import React, { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const list = [
    { id: "01", name: "Zapatillas", stock: 10, price: 20000, description: "lorem lorem lorem", img: '../images/zapas.avif' },
    { id: "02", name: "Remeras", stock: 10, price: 20000, description: "lorem lorem lorem", img: '../images/remera.jpg' },
  ];

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      let error = false;

      setTimeout(() => {
        if (error) {
          reject("No hay data");
        } else {
          resolve(list);
        }
      }, 3000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  });

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} productos`);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
