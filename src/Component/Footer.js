import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaRunning } from "react-icons/fa";

export default function footer() {
  return (
    <footer>
    <div className="footer">
      <div className="yes">
        <p className="copyright">Copyright &copy: 2022, Website Design by <span className='red'>Gym</span>Rat<FaRunning/></p>
      </div>
      

  <div className='links'>
<h2>Get Conncted:</h2>

<div className='footer-links'>

<a className= 'change' href='https://twitter.com/'>
<FaTwitter/>
</a>


<a className= 'change' href='https://instagram.com/'>
<FaInstagram/>
</a>

<a className= 'change' href='https://linkedin.com/'>
<FaLinkedin/>
</a>

<a className= 'change' href='https://facebook.com/'>
<FaFacebook/>
</a>

</div>
</div>


      <div className="signup">
        <h2>Subscribe to recive updates on monthly deals!</h2>
        <h3>You can unsubscribe anytime</h3>
        <div className='input-areas'>

            <form>
            <input
            type = "email" 
            name="email" 
            placeholder= "Your email"
            className="footer-input"
            />

  <button className='footer-email-btn'>
      Subscribe
  </button>

</form>
</div>


        </div>
            </div>
       
    
  </footer>
  )
}

