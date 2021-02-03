import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar2() {
  const [ setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    
      <nav className='logo'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         <i class="fas fa-gifts"/> Orchid Fragrances   
        </Link>

        <ul className="social-logo">
          <li className='nav-item'>
            <Link to='/www.facebook.com' className='social-icon'>
             <i class="fab fa-facebook"></i>
            </Link>
          </li>         
          
          <li className='nav-item'>
            <Link
              to='/products'
              className='social-icon'
              onClick={closeMobileMenu}
            >
              <i class="fab fa-twitter"></i>
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/products'
              className='social-icon'
              onClick={closeMobileMenu}
            >
            <i class="fab fa-instagram"></i>
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='www.twitter.com'
              className='social-icon'
              onClick={closeMobileMenu}
            >
              <i class="fab fa-twitter"></i>
            </Link>
          </li>
       
         
         
        </ul>
       
       
      </nav>
    
  );
}

export default Navbar2;