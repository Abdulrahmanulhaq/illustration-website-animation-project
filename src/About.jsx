import React from 'react';
import Common from './Common'; 
import web from '../src/images/3.gif'; 
const About = () => {
  return ( 
  <>
    <Common 
    name="This is Animated website will change your" 
    imgsrc={web} 
    visit="/contact" 
    btname="Contact Now"/>
  </>
  );
}

export default About;