// import react hooks
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// import modular style sheet
import Style from "../../Assets/scss/EventList.module.scss";

// EventList function component
export const EventList = () => {
  const [EventListData, setEventListData] = useState([]);

  // Get data
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/events`
      );

      setEventListData(result.data.items);
    };
    getData();
  }, []);

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
                  {item.startdate} - {item.stopdate}
                </h4>
              </div>
              <div className={Style.right}>
                <NavLink to={`/events/${item.id}`}>LÆS MERE</NavLink>
                <NavLink to={`/purchase/${item.id}`}>KØB BILLET</NavLink>
              </div>
            </section>
          );
        })}
    </section>
  );
};
