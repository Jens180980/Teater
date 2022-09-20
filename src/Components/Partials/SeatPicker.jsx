import axios from "axios";
import { useState, useEffect } from "react";
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
  console.log(SeatData);

  return (
    <section className={Style.SeatPickerWrapper}>
      <p>{event_id}</p>
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
                  ></div>
                );
            }
          })}
      </div>
      <div className={Style.line}>
        {SeatData &&
          SeatData.map((item) => {
            switch (item.line) {
              case "2":
                return (
                  <div
                    key={item.id}
                    className={
                      item.is_reserved > 0
                        ? Style.thisSeatIsTaken
                        : Style.youCanSitHereIfYouWantTo
                    }
                  ></div>
                );
            }
          })}
      </div>
      <div className={Style.line}>
        {SeatData &&
          SeatData.map((item) => {
            switch (item.line) {
              case "3":
                return (
                  <div
                    key={item.id}
                    className={
                      item.is_reserved > 0
                        ? Style.thisSeatIsTaken
                        : Style.youCanSitHereIfYouWantTo
                    }
                  ></div>
                );
            }
          })}
      </div>
      <div className={Style.line}>
        {SeatData &&
          SeatData.map((item) => {
            switch (item.line) {
              case "4":
                return (
                  <div
                    key={item.id}
                    className={
                      item.is_reserved > 0
                        ? Style.thisSeatIsTaken
                        : Style.youCanSitHereIfYouWantTo
                    }
                  ></div>
                );
            }
          })}
      </div>
      <div className={Style.line}>
        {SeatData &&
          SeatData.map((item) => {
            switch (item.line) {
              case "5":
                return (
                  <div
                    key={item.id}
                    className={
                      item.is_reserved > 0
                        ? Style.thisSeatIsTaken
                        : Style.youCanSitHereIfYouWantTo
                    }
                  ></div>
                );
            }
          })}
      </div>
      <div className={Style.line}>
        {SeatData &&
          SeatData.map((item) => {
            switch (item.line) {
              case "6":
                return (
                  <div
                    key={item.id}
                    className={
                      item.is_reserved > 0
                        ? Style.thisSeatIsTaken
                        : Style.youCanSitHereIfYouWantTo
                    }
                  ></div>
                );
            }
          })}
      </div>
    </section>
  );
};
