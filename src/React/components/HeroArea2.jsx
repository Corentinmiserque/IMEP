import ellipse from '../../../public/ellipse.svg';

function HeroArea2() {

  return (
      <section className="heroarea2 heroarea">

        <h1 className='heroarea__title' >Don’t miss <br /> <span  className='GT-Super'>anything</span></h1>
        <img className='heroarea__ellipse ' src={ellipse} alt="ellipse" />
      </section>
 
  );
}

export default HeroArea2;