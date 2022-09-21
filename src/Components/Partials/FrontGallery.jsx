// import react hooks
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// import data from provider
import { EventListContent } from "../StateManagement/EventListData";

// import modular style sheet
import Style from "../../Assets/scss/FrontGallery.module.scss";
import { PickedEventContent } from "../StateManagement/PickedEventData";

export const FrontGallery = () => {
  const { EventListData } = useContext(EventListContent);
  const { setPickedEventData } = useContext(PickedEventContent);

  const setEvent_id = () => {
    console.log(EventListData);
    setPickedEventData(EventListData.id);
  };

  return (
    <section className={Style.wrapper}>
      {EventListData &&
        EventListData.splice(0, 3).map((item) => {
          return (
            <div className={Style.itemWrapper} key={item.id}>
              <img src={item.image_small} alt="forestilling"></img>
              <article>
                <h4>{item.stage_name}</h4>
                <p>
                  {item.startdate} - {item.stopdate}
                </p>
                <h2>{item.title}</h2>
                <h3>{item.author}</h3>
              </article>
              <div className={Style.btnWrap}>
                <NavLink to={`/events/${item.id}`}>LÆS MERE</NavLink>
                <NavLink to="/purchase" onClick={setEvent_id}>
                  KØB BILLET
                </NavLink>
              </div>
            </div>
          );
        })}
    </section>
  );
};
