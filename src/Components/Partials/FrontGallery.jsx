// import react hooks
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// import modular style sheet
import Style from "../../Assets/scss/FrontGallery.module.scss";

export const FrontGallery = () => {
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
                <NavLink to={`/purchase/${item.id}`}>KØB BILLET</NavLink>
              </div>
            </div>
          );
        })}
    </section>
  );
};
