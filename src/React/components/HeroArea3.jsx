import ellipse from '../../../public/ellipse.svg';
import dots from '../../../public/dots.svg';

function HeroArea3() {
  return (
    <div className="heroarea3 heroarea">
      <div className="newsletter">
        <section className="heroarea3-sub-title">
          <img src={dots} alt="dots" />
          <h2>Newsletter</h2>
        </section>
        <h1 className="heroarea3__title">
          <span className="GT-Super">Stay Up-to-date</span> with the latest News
        </h1>
        <img className="heroarea__ellipse" src={ellipse} alt="ellipse" />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor cum sociis nato
        </p>
        <form>
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="Your email" required />
          <button className="" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroArea3;
