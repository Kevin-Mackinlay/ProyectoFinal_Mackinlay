import React from "react";
import Item from "../Item/Item";
const ItemList = ({ productos }) => {
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
      {productos.map((prod) => <Item key={prod.id} prod={prod} /> 
      
      )}
    </div>
  );
};

export default ItemList;
