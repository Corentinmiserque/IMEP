import React, { useState } from 'react';

function Hamburger() {
  const [show, setShow] = useState(false);

  const handleHamburgerClick = () => {
    setShow(!show);
  };

  return (
    <section className={`hamburger ${show ? 'show-hamburger' : ''}`} onClick={handleHamburgerClick}>
      <span className='menu-hamburger'></span>
      <span className='menu-hamburger'></span>
      <span className='menu-hamburger'></span>
    </section>
  );
}

export default Hamburger;

  