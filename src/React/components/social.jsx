
import dots from '../../../public/dots.svg';
import facebook from'../../../public/facebook-circle.svg';
import twitter from'../../../public/twitter-circle.svg';
import insta from'../../../public/insta-circle.svg';
import linkedin from'../../../public/linkedin-circle.svg';

function Social() {

  return (
    <>
      <div className="social">
        <section className="sub-title">
          <img src={dots} alt="dots" />
          <h2>Social</h2>
        </section>
        <h4>Connecting with <span className='GT-Super'> the Royal Music Academy</span>: Social Media Updates and Engagements</h4>
      <div className='social-media'>
        <section className='facebook'>
          <img src={facebook} alt="logo-facebook" />
        </section>
        <section className='twitter'>
          <img src={twitter} alt="logo-twitter" />
        </section>
        <section className='insta'>
          <img src={insta} alt="logo-instagram" />
        </section>
        <section className='linkedin'>
          <img src={linkedin} alt="logo-linkedin" />
        </section>
      </div>
      </div>
    </>
  );
}

export default Social;
