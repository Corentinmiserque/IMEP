import logo from '../../../public/logo.svg';
import chevronLeft from '../../../public/chevron-left.svg';
import chevronDown from '../../../public/chevron-down.svg';
import { useState } from 'react';

function Navbar2() {
  const [details1Expanded, setDetails1Expanded] = useState(false);
  const [details2Expanded, setDetails2Expanded] = useState(false);
  const [details3Expanded, setDetails3Expanded] = useState(false);

  const chevronIcon1 = details1Expanded ? chevronLeft : chevronDown;
  const chevronIcon2 = details2Expanded ? chevronLeft : chevronDown;
  const chevronIcon3 = details3Expanded ? chevronLeft : chevronDown;

  return (
    <div className="navbar2">
      <section className="navbar2__logo">
        <img src={logo} alt="logo" />
      </section>
      <section className="navbar2__summary">

        <details onToggle={() => setDetails1Expanded(!details1Expanded)} open={details1Expanded} key="details1">
          <summary>
            <span className="summary-title">L’IMEP</span>
            <img className="summary-chevron-down" src={chevronIcon1} alt="chevron" />
          </summary>

          <div className="summary-content">
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
          </div>
        </details>

        <details onToggle={() => setDetails2Expanded(!details2Expanded)} open={details2Expanded} key="details2">
          <summary>
            <span className="summary-title">Our Teacher</span>
            <img className="summary-chevron-down" src={chevronIcon2} alt="chevron" />
          </summary>

          <a href="#">Studies</a>

          <div className="summary-content">
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
          </div>
        </details>

        <details onToggle={() => setDetails3Expanded(!details3Expanded)} open={details3Expanded} key="details3">
          <summary>
            <span className="summary-title">Admission</span>
            <img className="summary-chevron-down" src={chevronIcon3} alt="chevron" />
          </summary>

          <div className="summary-content">
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
           <a href="#">lorem</a>
          </div>
        </details>

        <a href="#">News</a>
        <a href="#">Events</a>
      </section>
    </div>
  );
}

export default Navbar2;



