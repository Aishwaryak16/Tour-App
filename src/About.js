import React from 'react'
import Header from './components/Header';
import './components/style.css';
import Footer from './components/Footer';

const About = () => {
  return (
    <div>
      <Header/>
      <section className='about-hero'>
       <div className='container'>
      <h1>About Us</h1>
      <div className='hero-text-wp'>
        <p>Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places outside their usual environment for personal or business/professional purposes.</p>
      </div>
      </div>

      <div className='image-container'>
        <img src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='about-image'/>
      </div>
      </section>
     
     <Footer/>
    </div>
  )
}

export default About
