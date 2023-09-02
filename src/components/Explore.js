import React, { useEffect, useState } from 'react';
import axios from "axios";
import './style.css';
import { Link } from 'react-router-dom';


const Explore = () => {
const [data, setData] = useState([]);

useEffect(()=>{
    axios.get('http://localhost:3030/destinations').then((response)=>{
        console.log(response)
        setData(response.data);
        
    }).catch((error)=>{
        console.log(error)
    })
}, [])

  return (
    <div>
        <section className='explore-sec'>
            <div className='container'>
            <h2>Explore</h2>
            <div className='hero-text-wp'>
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.</p>
            </div>

            <div className='explore-container mt-5'>
            <div className='row' >
           
                
                {
                    Object.values(data).map((item,index)=>{
                        return(
                            <div className='col col-lg-4 col-md-6 col-sm-12 col-12' key={index}>
                                    <div className='card items-card mb-4'>
                                        <img src={item.images} className='item-image' />
                                        <h4>{item.name}</h4>
                                        <p className='text-dark'>{item.description}</p>
                                        <Link to={'/contact-us'}>Explore</Link>
                                    </div>
                                     </div>
                        )
                    })
                }
               
                </div>

            </div>
            </div>
       

        </section>
      
    </div>
  )
}

export default Explore;
