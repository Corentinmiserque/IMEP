import React from "react";
import dots from "../../../public/dots.svg";
import Ning from "../../../public/Ning.svg";
import Gustin from "../../../public/Gustin.svg";
import Gustin2 from "../../../public/Gustin2.svg";
import teachersData from "../../Json/Teachers.json";

const TeacherCard = ({ teacher }) => (
  <div className="card">
      <section className="teachers-img">
        {teacher.photo === "Ning" && <img src={Ning} alt={teacher.name} />}
        {teacher.photo === "Gustin" && <img src={Gustin} alt={teacher.name} />}
        {teacher.photo === "Gustin2" && <img src={Gustin2} alt={teacher.name} />}
        </section>
        <p className="teachers-instrument">{teacher.instrument}</p>
        <h3 className="teachers-name GT-Super">{teacher.name}</h3>
        <button className="all-button intro__button--blue">
          <a href={teacher.link}>Read more</a>
        </button>
  </div>
);

const Teachers = () => {
  const teacherCards = teachersData.teachers.map((teacher) => (
    <TeacherCard key={teacher.name} teacher={teacher} />
  ));

  return (
    <div className="teachers">
      <section className="sub-title">
        <img src={dots} alt="dots" />
        <h2 className="title">  Our teachers</h2>
      </section>
      <h4>Learn from Our World-Class Faculty< br /> <span className="GT-Super">at the Royal Music Academy</span></h4>
        <section className="horizontal-scroll">
          {teacherCards}
        </section>

    </div>
  );
};

export default Teachers;






