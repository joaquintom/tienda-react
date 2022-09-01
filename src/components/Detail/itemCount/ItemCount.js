
import "./itemCount.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import Button from 'react-bootstrap/Button';


function ItemCount({ stock, onAddToCart, onAddShowModal, productData }) {
  const [contador, setContador] = useState(1);
  const [cantStock, setCantStock] = useState(stock);

  const {addProductCart} = useContext(CartContext);

  const productDataCount = {...productData, contador}


  useEffect(()=>{
    setCantStock(stock)
  },[stock])

  function agregarItem() {
    if (cantStock >= 1) {
      setContador(contador + 1);
      setCantStock(cantStock - 1);
    }
  }
  function quitarItem() {
    if (contador > 1) {
      setContador(contador - 1);
      setCantStock(cantStock + 1);
    }
  }
  function addToCart() {
    if (contador >= 1) {
      setCantStock(cantStock - contador);
      setCantStock(cantStock);
      onAddToCart();
      onAddShowModal();
    }
    
  }

  return (
       
       <div className="itemCount">
         
          <div className="btnItemCount">
              
                <input
                  type="button"
                  value={"-"}
                  className="btnCal"
                  onClick={quitarItem}
                />
                
                <input
                  type="number"
                  value={contador}
                  className="itemAddCont"
                  readOnly
                />
                
                <input
                  type="button"
                  value={"+"}
                  className="btnCal"
                  onClick={agregarItem}
                />
              
              </div>
              
              <div className="comprar">
              <Button className="btnComprar"
              onClick={()=>{
                addToCart();
                console.log('agregado')
                addProductCart({...productDataCount})
              }}
              >Comprar
              
              </Button>
          </div>

        </div>
  );
}

export default ItemCount;