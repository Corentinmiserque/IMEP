import container1 from "../../../public/container1.svg";
import container2 from "../../../public/container2.svg";
import container3 from "../../../public/container3.svg";
import container4 from "../../../public/container4.svg";
import dots from "../../../public/dots.svg"

function StudyCategory() {
  return (
    <div className="study-category">
      <section className="sub-title">
        <img src={dots} alt="dots" />
        <h2>Study Category</h2>
      </section>
      <div className="study-category__main">
        <h1 className="study-category__title title">
          Programs and courses <span className="GT-Super">at the Royal Music Academy</span>
        </h1>
        <div className="horizontal-scroll">
          <div className="horizontal-scroll__item study-category__container">
            <section className="container-text">
              <h2 className="container-title">Bachelier <span className="GT-Super">en musique</span></h2>
              <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing cras ullamcorper et</p>
              <button className="all-button intro__button--blue"> <a href="#">Read more</a></button>
            </section>
            <section className="container-img">
              <img src={container1} alt="container1"/>
            </section>
          </div>
          <div className="horizontal-scroll__item study-category__container">
            <section className="container-text">
              <h2 className="container-title">Master en musique <span className="GT-Super">à finalité didactique</span></h2>
              <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing cras ullamcorper et</p>
              <button className="all-button intro__button--blue"> <a href="#">Read more</a></button>
            </section>
            <section className="container-img">
              <img src={container2} alt="container2"/>
            </section>
          </div>
          <div className="horizontal-scroll__item study-category__container">
            <section className="container-text">
              <h2 className="container-title">Master en musique <span className="GT-Super"> à finalité spécialisée</span></h2>
              <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing cras ullamcorper et</p>
              <button className="all-button intro__button--blue"> <a href="#">Read more</a></button>
            </section>
            <section className="container-img">
              <img src={container3} alt="container3"/>
            </section>
          </div>
          <div className="horizontal-scroll__item study-category__container">
            <section className="container-text">
              <h2 className="container-title">Master en musique <span className="GT-Super">à finalité approfondie</span></h2>
              <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing cras ullamcorper et</p>
              <button className="all-button intro__button--blue"> <a href="#">Read more</a></button>
            </section>
            <section className="container-img">
              <img src={container4} alt="container4"/>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCategory;
