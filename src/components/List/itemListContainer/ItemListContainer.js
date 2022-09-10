
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import DB from '../../../Api/firebaseConfig';

const  ItemListContainer = () => {

   const [products, setProducts] = useState([]);
   const {categoryId} = useParams();

      console.log(products)
      
      
      useEffect(() => {

            
         const colRef = collection(DB, 'productos');
        
         if (categoryId) {
            const colSelectRef = query(colRef, where("categoria", "==", categoryId));
            getDocs(colRef)
              .then((res) => {
                setProducts(res.docs.map((product) => ({ id: product.id, ...product.data() })));
              })
            getDocs(colSelectRef)
              .then((res) => {
                setProducts(res.docs.map((product) => ({ id: product.id, ...product.data() })));
              })
          } else {
            getDocs(colRef)
              .then((res) => {
                setProducts(res.docs.map((product) => ({ id: product.id, ...product.data() })));
              })
          }
        }, [categoryId]);
        
        


      return  (
                    

             <div>

                <ItemList products={products} />

             </div>
            )};
            
 
export default ItemListContainer;


