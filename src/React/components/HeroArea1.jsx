import ellipse from '../../../public/ellipse.svg';

function HeroArea1() {

  return (
      <section className="heroarea1 heroarea">
        
        <h1 className='heroarea__title' >Why join the <br /> <span  className='GT-Super'>Royal Music Academy</span></h1>
        <img className='heroarea__ellipse ' src={ellipse} alt="ellipse" />
      </section>
 
  );
}

export default HeroArea1;