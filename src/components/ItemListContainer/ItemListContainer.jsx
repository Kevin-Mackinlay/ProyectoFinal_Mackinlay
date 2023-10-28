import React, { useState } from "react";
import { useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../mock/data";


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
 
 

  useEffect(() => {
    getProducts()
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  });

 
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
     
    </div>
  );
};

export default ItemListContainer;
