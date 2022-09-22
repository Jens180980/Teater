// import react hooks
import axios from "axios";
import { useState, useEffect, useContext } from "react";

// import modular style sheet
import Style from "../../Assets/scss/SeatPicker.module.scss";

export const SeatPicker = ({ event_id }) => {
  const [SeatData, setSeatData] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/seats/${event_id}`
      );

      setSeatData(result.data.items);
    };
    getData();
  }, [event_id]);

  return (
    <section className={Style.SeatPickerWrapper}>
      <div className={Style.stage}>Scenen</div>
      <div className={Style.line}>
        {SeatData &&
          SeatData.map((item) => {
            switch (item.line) {
              case "1":
                return (
                  <div
                    key={item.id}
                    className={
                      item.is_reserved > 0
                        ? Style.thisSeatIsTaken
                        : Style.youCanSitHereIfYouWantTo
                    }
                  >
                    <input type="checkbox" value={item.id}></input>
                    <span></span>
                  </div>
                );
            }
          })}
      </div>
    </section>
  );
};
