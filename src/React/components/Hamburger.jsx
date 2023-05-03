import React, { useState } from 'react';

function Hamburger({ handleHamburgerClick }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    handleHamburgerClick();
  }
  
  return (
    <section className={`hamburger ${show ? 'show-hamburger' : ''}`} onClick={handleClick}>
      <span className='menu-hamburger'></span>
      <span className='menu-hamburger'></span>
      <span className='menu-hamburger'></span>
    </section>
  )
}

export default Hamburger;
