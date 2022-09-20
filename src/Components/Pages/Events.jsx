// import subcomponents
import { Hero } from "../Partials/Hero";
import { EventList } from "../Partials/EventList";

// import modular style sheets
import Style from "../../Assets/scss/Events.module.scss";

//Events function component
export const Events = () => {
  return (
    <div className={Style.wrapper}>
      <Hero />
      <h2 className={Style.altFont}>Oversigt</h2>
      <EventList />
    </div>
  );
}; // End of function component
