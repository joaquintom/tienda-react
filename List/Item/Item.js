

import Card from 'react-bootstrap/Card';


import {Link} from 'react-router-dom';
import './Item.css'


function Item ({id, marca, img, precio}) {



    return  (
        
        <div className="containerItem">
            <Card className="CardStyle">
                <div > 
                    <Link to={`/detail/${id}`}> 
                        <Card.Img variant="top" src={img} />
                    </Link>
                    
                    <Card.Body>
                
                            <Card.Title><h4>{marca}</h4></Card.Title>
                            <Card.Title><p>$ {precio}</p></Card.Title>

                    </Card.Body>
                </div>
            </Card>
        
        </div>
    );
}

export default Item;

