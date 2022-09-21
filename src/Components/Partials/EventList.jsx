// import react hooks
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// import data from provider
import { EventListContent } from "../StateManagement/EventListData";

// import modular style sheet
import Style from "../../Assets/scss/EventList.module.scss";

export const EventList = () => {
  const { EventListData } = useContext(EventListContent);

  return (
    <section className={Style.componentWrapper}>
      {EventListData &&
        EventListData.map((item) => {
          return (
            <section className={Style.itemWrapper} key={item.id}>
              <div className={Style.image}>
                <img src={item.image_small} alt="forestilling"></img>
              </div>
              <h3>{item.title}</h3>
              <div className={Style.middle}>
                <p>{item.stage_name}</p>
                <h4>
                  {EventListData[0].startdate} - {EventListData[0].stopdate}
                </h4>
              </div>
              <div className={Style.right}>
                <NavLink to={`/events/${item.id}`}>LÆS MERE</NavLink>
                <button>KØB BILLET</button>
              </div>
            </section>
          );
        })}
    </section>
  );
};
