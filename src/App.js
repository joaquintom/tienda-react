
import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Cart, NavBar} from './components';
import {Footer} from './components';

import {ItemListContainer} from './components';
import {ItemDetailContainer}from './components';

import CartContextProvider from './Context/CartContext';


function App() {
  
    
  return (
        
    <div className='App'>
      
        <BrowserRouter>  
            <CartContextProvider>
                  <NavBar/>
                    
                        <Routes>              
                            <Route path='/' element={<ItemListContainer/>}/>
                            <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
                            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
                            <Route path='/cart' element= {<Cart/>}/>
                            
                      </Routes>
                      <Footer/>
              </CartContextProvider>
           
          </BrowserRouter>
          
         
      </div>
  );
}

export default App;
