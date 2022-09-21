// import react hooks
import { useContext } from "react";

// import data from provider
import { EventListContent } from "../StateManagement/EventListData";

// import modular style sheet
import Style from "../../Assets/scss/Hero.module.scss";

export const Hero = () => {
  const { EventListData } = useContext(EventListContent);
  // console.log(EventListData);
  return (
    <section className={Style.wrapper}>
      <div className={Style.left}>
        <div className={Style.leftTop}>
          <h4>{EventListData[0].stage_name}</h4>
          <p>
            {EventListData[0].startdate} - {EventListData[0].stopdate}
          </p>
        </div>
        <div className={Style.leftBottom}>
          <h2>{EventListData[0].title}</h2>
          <h3>{EventListData[0].genre}</h3>
        </div>
      </div>
      <div className={Style.image}>
        <img src={EventListData[0].image_medium} alt="forestilling"></img>
      </div>
    </section>
  );
};
