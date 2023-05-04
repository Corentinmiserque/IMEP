import React, { useState } from 'react';
import Intro from './intro';
import StudyCategory from './Study-category';
import HeroArea1 from './HeroArea1';
import Teachers from './Teachers';
import HeroArea2 from './HeroArea2';
import HeroArea3 from './HeroArea3';
function Body() {



  return (
    <>
      <main>
        <Intro/>
        <StudyCategory/>
        <HeroArea1/>
        <Teachers/>
        <HeroArea2/>
        <HeroArea3/>
      </main>
      
    </>
  );
}

export default Body;
