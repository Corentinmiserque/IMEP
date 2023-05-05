import event1 from "../../../public/event1.svg";
import event2 from "../../../public/event2.svg";
import dots from "../../../public/dots.svg";
import eventData from "../../Json/Articles.json";

const EventCard = ({ event }) => (
  <div className="card">
    <section className="event-img">
      {event.photo === "event1" && <img src={event1} alt={event.title} />}
      {event.photo === "event2" && <img src={event2} alt={event.title} />}
      {event.photo === "event3" && <img src={event1} alt={event.title} />}
    </section>
    <h3 className="event-title big">{event.title} <span className="GT-Super">{event.span}</span></h3>
    <p className="event-description">{event.description}</p>
    <button className="all-button white-button">
      <a href={event.link}>Read Article</a>
    </button>
  </div>
);

const Event = () => {
  const eventCards = eventData.events.map((event, index) => (
    <EventCard key={index} event={event} />
  ));

  return (
    <div className="event">
      <section className="sub-title event-sub-title">
        <img src={dots} alt="dots" />
        <h2>Events</h2>
      </section>
      <h4>Upcoming events at the Royal Music Academy: <span className="GT-Super">Don't miss out!</span></h4>
      <section className="horizontal-scroll">
        {eventCards}
      </section>
    </div>
  );
};

export default Event;

