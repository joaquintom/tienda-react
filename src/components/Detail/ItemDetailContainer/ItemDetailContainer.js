
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getDoc, doc} from 'firebase/firestore'
import DB from '../../../Api/firebaseConfig'

export default function ItemDetailContainer () {

    
    const [product, setProduct] = useState();
    const {productId} = useParams();
   
  
    useEffect(() => {
      const dbFirebase = doc (DB, "productos", productId);
      getDoc(dbFirebase)
        .then((res) => setProduct({ id: res.id, ...res.data() }))
        .catch((err) => console.log(err))
    
    }, [productId]);


    return(
        
        <div>
         
        <ItemDetail {...product}></ItemDetail>
        
        </div>
    )
}


