import React, { useEffect, useState } from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProductos] = useState({});
  const [loader, setLoader] = useState(false)
  const { id } = useParams();


  useEffect(() => {
    setLoader(true)
    getItem(id)
      .then((res) => setProductos(res))
      .catch((error) => console.log(error))
      .finally(()=> setLoader(false))
  }, []);

  return(
<div>
    {loader ? <p>Cargando...</p> : <ItemDetail producto={producto}/>}
</div>

  ) 
};

export default ItemDetailContainer;
