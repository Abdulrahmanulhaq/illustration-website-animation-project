import React from 'react';
import Common from './Common'; 
import web from '../src/images/2.gif'; 


const Home = () => {
  
  return ( 
    <>
    
  
    <Common 
        name="We make your drawing come to" 
        imgsrc={web}
        visit="/contact" 
        btname="Get Started"/>
    
  </>
  );
}

export default Home;