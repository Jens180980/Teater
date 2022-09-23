// import react hooks
import { useState, useEffect } from "react";
import axios from "axios";

// import modular style sheet
import Style from "../../Assets/scss/Actors.module.scss";

// Actors function component
export const Actors = () => {
  const [ActorData, setActorData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/actors`
      );

      setActorData(result.data.items);
    };
    getData();
  }, []);

  return (
    <section className={Style.wrapper}>
      <h2>Skuespillere</h2>
      {ActorData &&
        ActorData.map((item) => {
          return (
            <section className={Style.itemWrapper} key={item.id}>
              <div className={Style.image}>
                <img src={item.image} alt="forestilling"></img>
              </div>

              <div className={Style.middle}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </section>
          );
        })}
    </section>
  );
};
