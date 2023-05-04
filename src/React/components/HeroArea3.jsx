import ellipse from '../../../public/ellipse.svg';
import dots from "../../../public/dots.svg"

function HeroArea3() {

  return (
    <>
   
  
      <section className="heroarea3 heroarea">
      <section className="sub-title">
      <img src={dots} alt="dots" />
      <h2>Newsletter</h2>
    </section>
        <h1 className='heroarea3__title' ><span  className='GT-Super'>Stay Up-to-date</span> with<br /> the latest News </h1>
        <img className='heroarea__ellipse ' src={ellipse} alt="ellipse" />
        <p className='small'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aenean commodo ligula eget dolor cum sociis nato</p>
        <form>
      <label htmlFor="email"></label>
      <input
        type="email"
        id="email"
        placeholder="Your e-mail"
        required
      />
      <button className='all-button' type="submit">Register</button>
    </form>
      </section>
      </>
  );
}

export default HeroArea3;