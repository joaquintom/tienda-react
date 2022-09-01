
import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
     //almacenar el carrito
    const [cart, setCart] = useState([]);
    const [cantInCart, setCantInCart] = useState(0)
    const [totalCart, setTotalCart] = useState(0)

    const isInCart = (id) => {
        const productInCart = cart.find((productInCart) => productInCart.id === id);
        if(productInCart) return true;
        return false;
    }
    
    const addProductCart = (product) => {
        setCantInCart(cantInCart + product.contador);
        setTotalCart(totalCart + product.contador * product.precio)
         if(isInCart(product.id)){
             const newCart= cart.map((productInCart) => {
                 if(productInCart.id === product.id){
                      return {...productInCart, 
                         contador: productInCart.contador + product.contador}
                }else{
                     return productInCart;
                }
        
        });
        setCart(newCart);
        }else {
        setCart([...cart, product])
        }
    };
       
    
    const removeFromCart = (id) => {
        setCart (cart.filter((product) => product.id !== id));
        const productRemoved = cart.find(product => product.id===id);
        setCantInCart(cantInCart - productRemoved.contador)
        setTotalCart(totalCart - productRemoved.contador * productRemoved.precio)
    }

    const removeAll = () => {
        setCart([]);
        setCantInCart(0);
        setTotalCart(0);
    }


    return(

            <CartContext.Provider value={{cart, isInCart, addProductCart, removeFromCart, removeAll, cantInCart, totalCart}}>
             {children}    
            </CartContext.Provider>
    );
}

export default CartContextProvider;