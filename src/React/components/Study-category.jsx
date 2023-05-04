import container1 from "../../../public/container1.svg";
import container2 from "../../../public/container2.svg";
import container3 from "../../../public/container3.svg";
import container4 from "../../../public/container4.svg";
import dots from "../../../public/dots.svg";
import coursesData from "../../Json/Courses.json";

const CourseCard = ({ course }) => (
  <div className="card">
    <section className="course-img">
      {course.photo === "container1" && <img src={container1} alt={course.title} />}
      {course.photo === "container2" && <img src={container2} alt={course.title} />}
      {course.photo === "container3" && <img src={container3} alt={course.title} />}
      {course.photo === "container4" && <img src={container4} alt={course.title} />}
    </section>
    <h3 className="course-title">{course.title} <span className="GT-Super">{course.span}</span></h3>
    <p className="course-description small">{course.description}</p>
    <button className="all-button intro__button--blue">
      <a href={course.link}>Read more</a>
    </button>
  </div>
);

const StudyCategory = () => {
  const courseCards = coursesData.courses.map((course, index) => (
    <CourseCard key={index} course={course} />
  ));

  return (
    <div className="courses">
      <section className="sub-title">
        <img src={dots} alt="dots" />
        <h2>Our courses</h2>
      </section>
      <h4>Programs and courses <span className="GT-Super">at the Royal Music Academy</span></h4>
      <section className="horizontal-scroll">
        {courseCards}
      </section>
    </div>
  );
};

export default StudyCategory;


