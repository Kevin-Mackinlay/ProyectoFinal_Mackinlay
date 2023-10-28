import React, { useState } from "react";
import { useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../mock/data";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (categoryId) {
          setProductos(res.filter((item) => item.category === categoryId));
        } else {
          setProductos(res);
        }
      })
      .catch((error) => console.log(error))
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
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
