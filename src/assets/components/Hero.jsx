import React from 'react';
import '../css/style.css';

const Hero = () => {
    return (
        <>

        <section id="hero">
              <video loop  autoplay="autoplay" muted  type="video/mp4" src="https://cdn.shopify.com/videos/c/o/v/8521d40d020d456591b58d8c5ba59079.mp4"></video>

              <div className="container h-100">
                 <div className="row h-100 align-items-center text-center">
                     <div className="contains">
                        <h1>Invest in yourself.</h1>
                        <p>IMPROVE YOUR WORKSPACE WELLBEING</p>
                     </div>
                 </div>
              </div>
              
        </section>


        

        
       </>



    );
};

export default Hero;