// import react hooks
import { useContext, useEffect } from "react";
import axios from "axios";

// import data from provider
import { EventListContent } from "../StateManagement/EventListData";

// import modular style sheet
import Style from "../../Assets/scss/Hero.module.scss";

export const Hero = () => {
  const { EventListData, setEventListData } = useContext(EventListContent);

  return (
    <section>
      {EventListData &&
        EventListData.splice(0, 1).map((item) => {
          return (
            <section className={Style.wrapper} key={item.id}>
              <div className={Style.left}>
                <div className={Style.leftTop}>
                  <h4>{item.stage_name}</h4>
                  <p>
                    {item.startdate} - {item.stopdate}
                  </p>
                </div>
                <div className={Style.leftBottom}>
                  <h2>{item.title}</h2>
                  <h3>{item.genre}</h3>
                </div>
              </div>
              {/* <div className={Style.image}> */}
              <img src={item.image_medium} alt="forestilling"></img>
              {/* </div> */}
            </section>
          );
        })}
    </section>
  );
};
