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

function Body() {



  return (
    <>
      <main>
        <Intro/>
        <StudyCategory/>
        <HeroArea1/>
        <AlumniCarousel/>
        <Teachers/>
        <HeroArea2/>
        <Event/>
        <News/>
        <HeroArea3/>
      </main>
      
    </>
  );
}

export default Body;
