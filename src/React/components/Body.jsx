import React, { useState } from 'react';
import Intro from './intro';
import StudyCategory from './Study-category';
import HeroArea1 from './HeroArea1';
import Teachers from './Teachers';
import HeroArea2 from './HeroArea2';
import Event from './Event';
import News from './New';
import HeroArea3 from './HeroArea3';
import AlumniCarousel from './Alumni';
import Number from './Number';
import Social from './Social';
import Footer from './footer';


function Body() {



  return (
    <>
      <main>

        <Intro/>
        <StudyCategory/>
        <HeroArea1/>
        <Number/>
        <AlumniCarousel/>
        <Teachers/>
        <HeroArea2/>
        <Event/>
        <News/>
        <HeroArea3/>
        <Social/>
        <Footer/>
      </main>
     
   
      
      
    </>
  );
}

export default Body;
