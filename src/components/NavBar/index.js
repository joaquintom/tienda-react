
//NavBar
import React from 'react';
import logo from './logo-climbing.png';
import CartWidget from './CartWidget/CartWidget';
import {Link} from 'react-router-dom'


 
export default function NavBar () {
    
    return (
         
 <nav className="navbar  navbar-expand-lg bg-light">
   
     <div className="container">
                <Link to="/">
                <img src={logo} alt="logo climbing" />
                </Link>
        
        <div className="collapse  navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Inicio </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/categoria/arnes'>Arnes</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/categoria/zapatillas'>Zapatillas</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/categoria/cuerdas'>Cuerdas</Link>
                    </li>
                    <li className="nav-item">
                    <CartWidget/>
                    </li>
                    
                </ul>
              
        </div>
                    
    </div>
   
</nav>

        
    )
}