
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Item from "../Item/Item";
import './ItemList.css';

export default function ItemList (props)  {

      return (

      <div>
         
      <Container fluid className="container">
          <Row>

         { 
         props.products.map( (product) =>{

         return (

         <Col className="itemCol">
             <Item 
             id={product.id} 
             marca={product.marca} 
             categoria={product.categoria} 
             img={product.img} 
             precio={product.precio}
             stock={product.stock}
             initial={product.initial} 
             />  
          </Col>
                )
                
            })
          }

        </Row>
        </Container>
    </div>

   )
}

