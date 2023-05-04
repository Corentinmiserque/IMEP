import dots from '../../../public/dots.svg';

function Intro() {

return (
<div className="intro">
<section className="intro__left sub-title">
<img className='intro__left__dots' src={dots} alt="dots" />
<h2 className="intro__title">Intro</h2>
</section>

<section className="intro__right">
        <p className="intro__right__text__big">Urna sapien nulla vel diam ut quis velit eu nec. Tempus proin eget sed cursus praesent adipiscing. Vitae fames nisl tristique parturient. <span className="GT-Super">Quam porttitor hendrerit proin fames nunc nibh aliquam</span>  Neque mattis ultricies </p>

        <p className="intro__right__text__small small">The Interdiocesan Institute (Institut Interdiocésain), the IMEP develops its action based on values of Christian inspiration. This action is rooted in the history of Catholic education, which has deeply worked for the humanization of society throughout the centuries.
        The education offered is multidisciplinary and based on research, creation, and openness to the world of Arts, Men, and Society: cutting-edge teaching, of a university type, it proposes the training of artists, educators, and social actors adapted to the realities of the field and the current society.</p>
        <button className="all-button intro__button--blue"> <a href="#">More Info</a></button>
    </section>
  </div>

 
  );
}

export default Intro;
