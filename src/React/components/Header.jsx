import React, { useState } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Herosection from './Herosection';
import Hamburger from './Hamburger';
import Logo from './Logo';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleHamburgerClick = () => {
    setShowNavbar(!showNavbar);
  };

  const handleResize = () => {
    if (window.innerWidth <= 440) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setShowNavbar(false);
    }
  };

  // écoute de l'événement resize pour gérer le changement de taille d'écran
  window.addEventListener('resize', handleResize);

  return (
    <>
      <header>
        <div className={isMobile && showNavbar ? 'header-open' : 'header'}>
          {showNavbar && <Navbar />}
          <div className='navbar2'>
            {!isMobile && <Navbar2 />}
            <Logo/>
          </div>
        </div>
        {isMobile && <Hamburger handleHamburgerClick={handleHamburgerClick} />}
        <Herosection />
      </header>
    </>
  );
}

export default Header;




