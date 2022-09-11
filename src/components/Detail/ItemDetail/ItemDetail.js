
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal'
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css';



const ItemDetail = ({id, marca, descripcion,  categoria, img, precio, stock, initial}) => {

     const [addedToCart, setAddedToCart] = useState(false);
     const [smShow, setSmShow] = useState(false);

     const productData = {id, marca, descripcion, categoria, img, precio, stock};
  
       

        const onAddItems = () =>{
            setAddedToCart(true);
            
         }
        
         const showModal=()=>{
            setSmShow(true)
            setTimeout(()=>{
            setSmShow(false)
        },1000)
        }

    return(
     <>
              <Container className="productDetail">
              <Row>

              <Col m={6}>
              <Card.Img variant="top" style={{width:'70%', margin: '10px',}} src={img} />
              </Col>

              <Col m={6} className="colDetail">
              <Card.Title><h1>{marca}</h1></Card.Title> 
              <Card.Text><p>{descripcion}</p></Card.Text>
              
              <Card.Text><h4>$ {precio}</h4></Card.Text>
              <Card.Text><p>stock: {stock}</p></Card.Text>
             

                
    { addedToCart ? 
      <div>
      <Link to="/cart"><Button style={{width:'30%', margin: '10px'}}>Ir al carrito</Button></Link>
      <Link to="/"><Button variant="outline-dark" style={{width:'30%', margin: '10px'}}>Seguir Comprando</Button></Link>
      </div>

      : (
            <ItemCount stock={stock} initial={initial} productData={productData} onAddToCart={onAddItems} onAddShowModal={showModal} />

      )}


        <Modal
        size="m"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body>Agregaste <span>{marca} ({categoria})</span> a tu compra</Modal.Body>
      </Modal>

      </Col>

              
              </Row>
              </Container> 
  </>
    )
  }

export default ItemDetail;