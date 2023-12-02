import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
   <>
   <nav className='main-nav'>
   
        <div className='logo'>
           <a href='#'> <h2>
                <span>G</span>urukripa
                <span>C</span>areerInstitute
            </h2>
            </a>
        </div>
    
    <div className='menu-link'>
        <ul>
            <li>
                <a href='#'>About Us</a>
            </li>
            <li>
                <a href='#'>Our System</a>
            </li>
            <li>
                <a href='#'>Our Programs</a>
            </li>
            <li>
                <a href='#'>E-Learning</a>
            </li>
            <li>
                <a href='#'>Academics</a>
            </li>
            <li>
                <a href='#'>Student Portal</a>
            </li>
            <li>
                <a href='#'>Enquire Now</a>
            </li>
        </ul>
    </div>
    
   </nav>
   
   </>
  );
};

export default Navbar
