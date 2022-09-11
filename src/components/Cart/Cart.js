
import React, {useContext} from 'react';
//import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cart.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { CartContext } from '../../Context/CartContext';

import DB from '../../Api/firebaseConfig';

import { collection, doc, setDoc, updateDoc, increment } from "firebase/firestore";


export default function Cart () {

    //Uso useContext para acceder a los valores que me provee el contexto
    const {cart, removeFromCart, removeAll, totalCart} = useContext(CartContext)
   

    const createOrder = () => {
        const itemsForDB = cart.map(product => ({
          id: product.id,
          title: product.categoria,
          price: product.precio
        }));
    
        let order = {
          buyer: {
            name: "Eduardo",
            email: "eduardo@gmaill.com",
            phone: "123456789"
          },
          
          items: itemsForDB,
      
        }; 

    const orderInFirestore = async () => {
        
        const newOrderRef = doc (collection(DB, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }

      orderInFirestore()
      .then(result => { alert('Su orden ha sido creada. Order ID: ' + result.id) })
      cart.forEach(async (product) =>{
        const productRef = doc(DB, "productList", product.id) 
        await updateDoc(productRef, {
            stock: increment(-product.contador),
        });
    });
    removeAll()

    .catch(err => console.log(err));
     

}

    return  (

        <div>
                
            <h1 className="titleCart">MI CARRITO</h1>
           

            <Container> 
            
                { cart == "" ? (
                <div>
                <p>El carrito está vacío.</p>
                <Button as={Link} to="/">Ver Productos</Button>
                </div>
            ) : (
                <>
              
            <Row className="btnCartHeader">
                    <Col m={3}>
                        <Button variant="primary" as={Link} to="/" >Seguir comprando</Button>
                    </Col>
                    
                    <Col m={8}></Col>

                    <Col m={1}>
                    <Button variant="outline-dark" onClick={removeAll}>Vaciar Carrito</Button>
                    </Col>
                
            </Row>
              

            <Row className="rowCart">
                            
                 <Col m={3}>Producto</Col>
                 <Col m={3}>Categoría</Col>
                 <Col m={2}>Cantidad</Col>
                 <Col m={2}>Precio</Col>
                 <Col m={1}> $ Sub Total</Col>
                 <Col m={1}></Col>
                        
             </Row>
                { cart.map((product) => {

                    return (
                            
                        <div>

                            <Container className="productInCart">
                                <Row >

                                       <Col m={3}>
                                            <Link to={`/detail/${product.id}`}>
                                            <img src={product.img} width="80px" ></img>
                                            </Link>
                                       </Col>

                                        <Col m={3}>
                                            {product.categoria}
                                        </Col>

                                        <Col m={2}>
                                            {product.contador}
                                            
                                        </Col>

                                        <Col m={2}>
                                        {`$ ${product.precio}`}
     
                                        </Col>
                                      
                                        <Col m={1}>
                                            {`$ ${ product.contador * product.precio }`}                                          
                                        </Col>

                                        <Col m={1}>
                                            <Button variant="secondary" onClick={() => removeFromCart(product.id)}>Eliminar</Button>
                                        </Col>
                                        
                                    
                                </Row>
                            </Container>
                            
                            </div>
                           
                            )
                        })}
                        
                        </> 
                    )

                 }
            </Container>
                             
            
            { cart == "" ? (
                            <></>
                                ) : (
                                    <div>
                                        <Container >
                                            <Row className="EndBuy">
                                                
                                                <Col m={5}></Col>
                                                
                                                <Col m={3}>
                                                <p className="totalCart">Precio Total: ${totalCart}</p>
                                                </Col>
                                                
                                                <Col m={3}>
                                                <Button onClick={createOrder} variant="dark" className="btnEndBuy">
                                                Finalizar Compra
                                                </Button>
                                                </Col>
                                                    
                                            </Row>
                                        </Container>

                                        

                                    </div>
            )}
         
                          
        </div>   
    )
}