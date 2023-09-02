import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section>
        <div className='hero-container'>
          <div className='container'>
          <h1>Begin your beautiful Journey!!</h1>
            <div className='hero-text-wp'>
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</p>
            </div>

            <div className='btn-wp'>
              <Link to='/contact-us'> <button className='btn sign-up-btn'>Contact Us</button></Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero
