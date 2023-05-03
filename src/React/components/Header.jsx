import React, { useState } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Herosection from './Herosection';
import Hamburger from './Hamburger';
import Logo from './logo';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header>
        <div className={showNavbar ? 'header-open' : 'header'}>
          {showNavbar && <Navbar />}
          <div className='navbar2'>
            {showNavbar && <Navbar2 />}
            <Logo/>
          </div>
        </div>
        <Hamburger handleHamburgerClick={handleHamburgerClick} />
        <Herosection />
      </header>
      
    </>
  );
}

export default Header;


