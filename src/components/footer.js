import React from 'react'

import facebook from '../images/fb.jpg'
import lin from '../images/ln.jpg'
import tw from '../images/twitter.jpg'
import instagram from '../images/insta.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container} from 'react-bootstrap'
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
     <div className="sb__footer-links"> 
        <div className='sb__footer-links-div'>
        <h4>Phone:8875124365 </h4>
        <a href='#'>
            <p>Career Plan</p>
        </a>
        <a href='#'>
            <p>About Us</p>
        </a>
        <a href='#'>
            <p>Enquiry</p>
        </a>
         </div>
         <div className="sb__footer-links-div">
            <h4>Address</h4>
            <a href="#">
                <p>Gurukripa Career Institute, Piprali Road, Sikar</p>
            </a>
         </div>

         {/* <Container>
            <div>
                <a href="https://facebook.com"></a>
                 </div>
         </Container> */}
          <div className="socialmedia">
            
            <a href='https://twitter.com/gcisikar'>
            <p><img src={tw} alt=''/></p>
            </a>
            <a href="https://www.linkedin.com/school/gcisikar/"><p><img src={lin} alt=''/></p></a>
             </div> 
    </div>
    </div>
    </div>
  )
}

export default Footer
