

import { useEffect, useState } from "react";
import {getProducts, getProductsByCategory} from "../../../Data/Data"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const  ItemListContainer = () => {

   const [products, setProducts] = useState([]);
   const {categoryId} = useParams();
      

      useEffect(() => {

         if(!categoryId){

            getProducts().then(products => {
               setProducts(products)
                  })
         }     
        else{
         getProductsByCategory(categoryId).then(products =>{
            setProducts(products)
         })
        }
   
 }, [categoryId])
            
      return  (
                    
             <div>
                <ItemList products={products}/>

             </div>
            );



       }

 
export default ItemListContainer;