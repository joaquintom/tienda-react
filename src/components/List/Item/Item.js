

import Card from 'react-bootstrap/Card';


import {Link} from 'react-router-dom';
import './Item.css'


function Item ({id, marca, categoria, img, precio}) {



    return  (
        
        <div className="containerItem">
            <Card className="CardStyle">
                <div > 
                    <Link to={`/detail/${id}`}> 
                        <Card.Img variant="top" src={img} />
                    </Link>
                    
                    <Card.Body>
                    
                            <Card.Text><p>Categoria: {categoria}</p></Card.Text>
                            <Card.Title><h2>{marca}</h2></Card.Title>
                            <Card.Title>$ {precio}</Card.Title>

                    </Card.Body>
                </div>
            </Card>
        
        </div>
    );
}

export default Item;

