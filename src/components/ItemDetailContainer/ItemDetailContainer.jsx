import React, { useEffect, useState } from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebase";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  // const ItemDetailContainer = () => {
  //   const [producto, setProducto] = useState({});
  //   const [loader, setLoader] = useState(false);
  //   const { id } = useParams();

  //   useEffect(() => {
  //     setLoader(true);
  //     if (id) {
  //       const collectionProd = collection(db, "productos");
  //       const referenceToDoc = doc(collectionProd, id);

  //       getDoc(referenceToDoc)
  //         .then((res) => setProducto({ id: res.id, ...res.data() }))
  //         .catch((error) => console.log(error))
  //         .finally(() => setLoader(false));
  //     } else {
  //       // Handle the case where id is empty or undefined, e.g., redirect to an error page or show an error message.
  //       console.log("Invalid id");
  //       setLoader(false);
  //     }
  //   }, [id]); // Include `id` in the dependency array to re-run the effect whenever `id` changes.

  return (


   <div className="ItemDetailContainer">{loading ? <p>Cargando...</p> : <ItemDetail product={product} />}</div>
  )

  }

export default ItemDetailContainer;
