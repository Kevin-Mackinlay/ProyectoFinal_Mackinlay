import React, { useEffect, useState } from 'react'
import { getItem } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState({})

    useEffect(()=>{
getItem()
.then((res)=> setProductos(res))
.catch((error)=> console.log(error))
    },[])

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer