import React, { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos");

    getDocs(collectionRef)
      .then((res) => {
        const list = res.docs.map((producto) => {
          return {
            id: producto.id,
            ...producto.data(),
          };
        });
        setProductos(list);
      })
      .catch((error) => {
        console.error("Firestore Error:", error);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="d-flex flex-direction-row justify-content-center">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h1>
            {greeting} <span>{categoryId && categoryId}</span>
          </h1>
          <ItemList products={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
