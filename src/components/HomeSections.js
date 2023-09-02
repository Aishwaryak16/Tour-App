import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import Explore from './Explore';
import Footer from './Footer';

const HomeSections = () => {
  return (
    <div>
      <section className='deals-section'>
        <div className='container'>
        <h2> DEALS & DISCOUNTS </h2>
        <div className='hero-text-wp'>
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</p>
            <Link to='/about'><button className='btn btn-primary'> Know more</button></Link>
            </div>
        <div className='row deals-container mt-5'>
           <div className='col col-lg-4 col-md-6 col-sm-12 col-12 deals-items-wrapper'>
               <Link to='' className='image-1-wp mb-5'>
                  <img src="https://images.pexels.com/photos/5227440/pexels-photo-5227440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='deals' className='deal-img-1'/>
                  
               <div className='deal-overlay-card'>
                <h3>Deal 1</h3>
                    <p className='deal-link'> Check the deal </p>
               </div>
               </Link>

           </div>

           <div className='col col-lg-4 col-md-6 col-sm-12 col-12 deals-items-wrapper'>
               <Link to='/contact-us' className='image-1-wp mb-5'>
                  <img src='https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='deals' className='deal-img-1'/>
                  <div className='deal-overlay-card'>
                  <h3>Deal 2</h3>
                    <p className='deal-link'> Check the deal </p>
               </div>
               </Link>
           </div>

           <div className='col col-lg-4 col-md-6 col-sm-12 col-12 deals-items-wrapper'>
               <Link to='/contact-us' className='image-1-wp mb-5'>
                  <img src='https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='deals' className='deal-img-1'/>
                  <div className='deal-overlay-card'>
                  <h3>Deal 3</h3>
                    <p className='deal-link'> Check the deal </p>
               </div>
               </Link>
           </div>

           <div className='col col-lg-4 col-md-6 col-sm-12 col-12 deals-items-wrapper'>
               <Link to='/contact-us' className='image-1-wp mb-5'>
                  <img src='https://images.pexels.com/photos/8241135/pexels-photo-8241135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='deals' className='deal-img-1'/>
                  <div className='deal-overlay-card'>
                  <h3>Deal 4</h3>
                    <p className='deal-link'> Check the deal </p>
               </div>
               </Link>
           </div>

           <div className='col col-lg-4 col-md-6 col-sm-12 col-12 deals-items-wrapper'>
               <Link to='/contact-us' className='image-1-wp mb-5'>
                  <img src='https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='deals' className='deal-img-1'/>
                  <div className='deal-overlay-card'>
                  <h3>Deal 5</h3>
                    <p className='deal-link'> Check the deal </p>
               </div>
               </Link>
           </div>

           <div className='col col-lg-4 col-md-6 col-sm-12 col-12 deals-items-wrapper'>
               <Link to='/contact-us' className='image-1-wp mb-5'>
                  <img src='https://images.pexels.com/photos/5227440/pexels-photo-5227440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='deals' className='deal-img-1'/>
                  <div className='deal-overlay-card'>
                  <h3>Deal 6</h3>
                    <p className='deal-link'> Check the deal </p>
               </div>
               </Link>
           </div>
           


        </div>
        </div>
      </section>


      <section className='tour-type-section'>
        <div className='container'> 
           <h2>TOUR TYPE</h2>

           <div className='hero-text-wp'>
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</p>
            </div>


            <div>
                <div className='card-container'>
                    <div className='row'>
                        <div className='col col-lg-4 col-sm-12 col-12 mb-3'>
                            <div className='card'>
                                <h3>Type 1</h3>
                                <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.</p>
                            </div>
                        </div>
                        <div className='col col-lg-4 col-sm-12 col-12 mb-3'>
                            <div className='card'>
                            <h3>Type 2</h3>
                                <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.</p>
                            </div>
                        </div>
                        <div className='col col-lg-4 col-sm-12 col-12'>
                            <div className='card'>
                            <h3>Type 3</h3>
                                <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>


      <section className='info-section'>
        <div className='container'>
            <div className='info-container'>
                <div className='row'>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='info-content mb-4'>
                    <h2 className='h2-white text-left'>Discover A Mesmerizing Nature Landscape & Stunning Culture</h2>
                    <p className='text-left'>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.</p>
                </div>
                    </div>

                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='info-content'>
                    <img src='https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='deals' className='deal-img-1'/>
                </div>
                    </div>
                </div>

                
            </div>
        </div>
      </section>

      <Explore/>
      <Footer/>
    </div>
  )
}

export default HomeSections;
