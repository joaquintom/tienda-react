
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getProductById} from '../../../Data/Data';
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer () {

    
    const [product, setProduct] = useState();
    const {productId} = useParams();


    useEffect(() => {
           getProductById(productId)
           .then(product => {
            setProduct(product)
           })
           .catch(error => {
            console.log(error)
           })

        }, [productId])
    

    return(


        <div>
            
        <ItemDetail {...product}></ItemDetail>
      
        </div>
    )
}