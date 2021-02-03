import React, { useState } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
         
    } else {
      setDropdown(true); 
      
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
          
    } else {
      setDropdown2(true);    
    }
  };


  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
     }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);

    }
  };

  return (
    
      <nav className='navbar'>
       
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-item'  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link  to='/services' className='nav-links'  onClick={closeMobileMenu}>
               Men <i className='fas fa-caret-down'/>
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/WhoWeAre'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Who We Are
            </Link>
          </li>

                    
         <li className='nav-item'  onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} >
            <Link  to='/services' className='nav-links'  onClick={closeMobileMenu}>
              Women <i className='fas fa-caret-down'/>
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>


          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-link'
              onClick={closeMobileMenu}
            >
              Log In 
            </Link>
          </li>         

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='sign'
              onClick={closeMobileMenu}
            >
              Sign Up 
            </Link>
          </li>
          
          
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>

       
        
      </nav>
    
  );
}

export default Navbar;