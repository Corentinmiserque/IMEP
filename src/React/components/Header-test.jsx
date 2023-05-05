import React, { useState } from 'react';
import logo from '../../../public/logo.svg';
import chevronLeft from '../../../public/chevron-left.svg';
import chevronDown from '../../../public/chevron-down.svg'


function Headertest() {

    const [show, setShow] = useState(false);

    const handleClick = () => {
      setShow(!show);
      handleHamburgerClick();
    }

    const [details1Expanded, setDetails1Expanded] = useState(false);
    const [details2Expanded, setDetails2Expanded] = useState(false);
    const [details3Expanded, setDetails3Expanded] = useState(false);
  
    const chevronIcon1 = details1Expanded ? chevronLeft : chevronDown;
    const chevronIcon2 = details2Expanded ? chevronLeft : chevronDown;
    const chevronIcon3 = details3Expanded ? chevronLeft : chevronDown;
  return (
    <div className="navbar">
        <nav className='navbar__top'>
        <section className='navbar__top__left'>
            <a className='navbar__link' href="#">Rent a room</a>
            <a className='navbar__link' href="#">Brochure</a>
            <a className='navbar__link'  href="#">Media catalogue</a>
          </section>
          <section className='navbar__top__right'>
            <a className='navbar__link'  href="#">Intranet</a>
            <a className='navbar__link'  href="#">Support us</a>
            <a className='navbar__link'  href="#">Contact</a>
            <a className='navbar__link navbar__right__register' href="#">Register</a>
          </section>
        </nav>
        <div className='navbar2'>
            <section className='navbar2__logo'>
                <img src={logo} alt="logo" />
            </section>

        <nav className='navbar2__bottom'>
            
        <details onToggle={() => setDetails1Expanded(!details1Expanded)} open={details1Expanded} key="details1">
          <summary>
            <span className="summary-title">L’IMEP</span>
            <img className="summary-chevron-down" src={chevronIcon1} alt="chevron" />
          </summary>

          <div className="summary-content">
           <a href="#">lorem</a>
           <a href="#">lorem</a>
          </div>
        </details>

  <a href="#">Studies</a>

        <details onToggle={() => setDetails2Expanded(!details2Expanded)} open={details2Expanded} key="details2">
          <summary>
            <span className="summary-title">Our Teacher</span>
            <img className="summary-chevron-down" src={chevronIcon2} alt="chevron" />
          </summary>


          <summary className="summary-content">
           <a href="#">lorem</a>
           <a href="#">lorem</a>
       
          </summary>
        </details>

        <details onToggle={() => setDetails3Expanded(!details3Expanded)} open={details3Expanded} key="details3">
          <summary>
            <span className="summary-title">Admission</span>
            <img className="summary-chevron-down" src={chevronIcon3} alt="chevron" />
          </summary>

          <div className="summary-content">
           <a href="#">lorem</a>
           <a href="#">lorem</a>

          </div>
        </details>

        <a href="#">News</a>
        <a href="#">Events</a>
        </nav>
        </div>
        <section className={`hamburger ${show ? 'show-hamburger' : ''}`} onClick={handleClick}>
      <span className='menu-hamburger'></span>
      <span className='menu-hamburger'></span>
      <span className='menu-hamburger'></span>
    </section>
    </div>
  );
}

export default Headertest;
