import container1 from "../../../public/container1.svg";
import container2 from "../../../public/container2.svg";
import container3 from "../../../public/container3.svg";
import container4 from "../../../public/container4.svg";

function StudyCategory() {
  return (
    <div className="study-category">
      <h1 className="study-category__title">
        Programs and courses <span className="study-category__subtitle">at the Royal Music Academy</span>
      </h1>

      <div className="container1 study-category__container">
        <section className="container1__text container-text">
          <h2 className="container1__title">Bachelier en musique</h2>
          <p className="container1__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing cras ullamcorper et</p>
          <button className="all-button container1__button">Read more</button>
        </section>
        <section className="container1__img container-img">
          <img src={container1} alt="container1"/>
        </section>
      </div>

      <div className="container2 study-category__container">
        <section className="container2__text container-text">
          <h2 className="container2__title">Master en musique à finalité didactique</h2>
          <p className="container2__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing cras ullamcorper et</p>
          <button className="all-button container2__button">Read more</button>
        </section>
        <section className="container2__img container-img">
          <img src={container2} alt="container2"/>
        </section>
      </div>

      <div className="container3 study-category__container">
        <section className="container3__text container-text">
          <h2 className="container3__title">Master en musiqueà finalité spécialisée</h2>
          <p className="container3__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing cras ullamcorper et</p>
          <button className="all-button container3__button">Read more</button>
        </section>
        <section className="container3__img container-img">
          <img src={container3} alt="container3"/>
        </section>
      </div>

      <div className="container4 study-category__container">
        <section className="container4__text container-text">
          <h2 className="container4__title">Master en musique à finalité approfondie</h2>
          <p className="container4__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing cras ullamcorper et</p>
          <button className="all-button container4__button">Read more</button>
        </section>
        <section className="container4__img container-img">
        <img src={container4} alt="container4"/>
        </section>
      </div>
      
    </div>
    
  );
};
export default StudyCategory;