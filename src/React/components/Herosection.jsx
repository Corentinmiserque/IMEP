import chevronLeft from '../../../public/chevron-left.svg';
import chevronDown from '../../../public/chevron-down.svg';
import { useState } from 'react';

function Herosection() {
    const [detailsExpanded, setDetailsExpanded] = useState(false);
    const chevronIcon = detailsExpanded ? chevronLeft : chevronDown;

    return (
    <>
        <div className='herosection'>
            <h1>Unlock your <br />
                musical potential at <br />
                our renowned <span className='GT-Super'>Royal <br />
                Music Academy</span>
            </h1>

            <details onToggle={() => setDetailsExpanded(!detailsExpanded)} open={detailsExpanded} key="details2">
                <summary>
                    <span className="summary-title">you are</span>
                    <img className="summary-chevron-down" src={chevronIcon} alt="chevron" />
                </summary>
                <div className="summary-content">
                    <a href="#">lorem</a>
                    <a href="#">lorem</a>
                    <a href="#">lorem</a>
                </div>
            </details>
        </div>
    </>
    )
  }
  
  export default Herosection
  