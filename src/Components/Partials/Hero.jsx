// import react hooks
import { useState, useEffect } from "react";
import axios from "axios";

// import modular style sheet
import Style from "../../Assets/scss/Hero.module.scss";

// Hero function component
export const Hero = () => {
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
              <img src={item.image_medium} alt="forestilling"></img>
            </section>
          );
        })}
    </section>
  );
};
