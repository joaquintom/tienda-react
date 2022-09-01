import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';



function Item ({id, marca, categoria, img, precio}) {



    return  (
        
        
    <Card style={{ width: '14rem', margin:'5%', border: '0', marginTop: '80px',}}>

        <Card.Img variant="top" src={img} />
            
            <Card.Body>
                <Card.Text><p>Categoria: {categoria}</p></Card.Text>
                <Card.Title><h2>{marca}</h2></Card.Title>
                <Card.Title>$ {precio}</Card.Title>
                
                
                
                <Link to={`/detail/${id}`}> 
                <Button>Ver más</Button>
                </Link>
               

            </Card.Body>

            
      
        </Card>
            
    );
}

export default Item;
