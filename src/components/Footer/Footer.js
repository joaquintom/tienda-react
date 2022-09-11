import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import logo from '../../components/NavBar/logo-climbing.png';
import phone from '../../components/Footer/phone-call.png';
import mail from '../../components/Footer/email.png';

import './Footer.css';


function Footer () {

    return (

        <div className="containerFooter">
            <Col m={4}> 
                <Link to="/">
                    <img src={logo} alt="logo climbing"/>
                </Link>
                <p>Tienda de articulos para escalada.</p>
            </Col>
            
            <Col m={4}> 
            <strong>Categorías</strong>
            <div className="categoryFooter">
            <Link className="nav-link" to='/categoria/arnes'>Arnes</Link>
            <Link className="nav-link" to='/categoria/zapatillas'>Zapatillas</Link>
            <Link className="nav-link" to='/categoria/cuerdas'>Cuerdas</Link>
            </div>
           
            </Col>
            
            <Col m={4}> 
                <strong>Contacto</strong> 
                <div className="contactFooter">
            
                    <p className="mail"> <a href= "mailto:joaquin.tommasi@gmail.com"><img src={mail} width="25px"/></a></p>

                    <p className="phone"><a href="https://wa.me/+5491173613158"><img src={phone} width="25px"/></a></p>

                </div>
                
            </Col>

        </div>
    )
}

export default Footer;