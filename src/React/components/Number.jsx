import number1 from '../../../public/1K.svg';
import number2 from '../../../public/13k.svg';
import number3 from '../../../public/200k.svg';
import number4 from '../../../public/15k.svg';

function Number() {

  return (
      <div className="numbers">
        <div className='numbers__header'>
        <section className="sub-title">
          <h2>Key numbers</h2>
          <h4>The Royal Music Academy's <span className='GT-Super'>Key Indicators</span></h4>
          <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.< br /> Adipiscing cras ullamcorper et</p>
        </section>
        </div>

        <div className='numbers__number'>
        <section className='numbers__number__1'>
            <img src={number1} alt="" />
            <h3>Formation</h3>
        <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa viverra pretium ut sed cursus. </p>
        </section>

        <section className='numbers__number__2'>
        <img src={number2} alt="" />
        <h3>Students</h3>
        <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa viverra pretium ut sed cursus. </p>
            </section>

            <section className='numbers__number__3'>
            <img src={number3} alt="" />
            <h3>Graduated</h3>
            <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa viverra pretium ut sed cursus. </p>
            </section>

            <section className='numbers__number__4'>
                  <img src={number4} alt="" />
            <h3>Students</h3>
            <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa viverra pretium ut sed cursus. </p>
            </section>
        </div>
    
      </div>
 
  );
}

export default Number;
