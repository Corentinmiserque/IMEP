import dots from "../../../public/dots.svg";
import Ning from "../../../public/Ning.svg";
import Gustin from "../../../public/Gustin.svg";
import Gustin2 from "../../../public/Gustin2.svg";
import teachersData from "../../Json/Teachers.json";

function Teachers() {
  return (
    <div className="teachers">
      <section className="teachers__sub-title">
        <img src={dots} alt="dots" />
        <h2>Our teachers</h2>
      </section>

      <div className="teachers__category-main">
        {teachersData.teachers.map((teacher) => (
          <div key={teacher.name} className="teachers__category-horizontal-scroll">
            <section className="teachers__category-container-img">
              {teacher.photo === "Ning" && <img src={Ning} alt={teacher.name} />}
              {teacher.photo === "Gustin" && <img src={Gustin} alt={teacher.name} />}
              {teacher.photo === "Gustin2" && <img src={Gustin2} alt={teacher.name} />}
            </section>
            <div className="teachers__category-horizontal-scroll-item teachers__category-container">
              <section className="teachers__category-container-text">
                <p>{teacher.instrument}</p>
                <h3>{teacher.name}</h3>
                <button className="all-button intro__button--blue">
                  <a href={teacher.link}>Read more</a>
                </button>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;




