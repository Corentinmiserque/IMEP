import chevronLeft from '../../../public/chevron-left.svg';
import chevronDown from '../../../public/chevron-down.svg';
import { useState } from 'react';
import circleDown from "../../../public/circle-down.svg"


function Herosection() {

  const [details1Expanded, setDetails1Expanded] = useState(false);
  const chevronIcon = details1Expanded ? chevronLeft : chevronDown;
  
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div className='herosection'>
      <h1 className='herosection__title title'>
        Unlock your <br />
        musical potential at <br />
        our renowned <span className='GT-Super'>Royal <br />
        Music Academy</span>
      </h1>

      <details onToggle={() => setDetails1Expanded(!details1Expanded)} open={details1Expanded} key="details1">
        <summary className='herosection__summary'>
          <span className="herosection__summary-title">you are</span>
          <img className="herosection__summary-chevron" src={chevronIcon} alt="chevron" />
        </summary>
        <div className="herosection__summary-content">
          <a className="herosection__summary-link" href="#">lorem</a>
          <a className="herosection__summary-link" href="#">lorem</a>
          <a className="herosection__summary-link" href="#">lorem</a>
        </div>
      </details>

      <img className='circle' src={circleDown} alt="CircleDown" onClick={scrollToBottom} />
    </div>
  );
}

export default Herosection;




  