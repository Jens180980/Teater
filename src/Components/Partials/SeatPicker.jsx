// import react hooks
import axios from "axios";
import { useState, useEffect, useContext } from "react";

// import data from provider
import { ReservationSeatContent } from "../StateManagement/ReservationSeatData";

// import modular style sheet
import Style from "../../Assets/scss/SeatPicker.module.scss";

export const SeatPicker = ({ event_id }) => {
  const [SeatData, setSeatData] = useState();
  const { ReservationSeatData, setReservationSeatData } = useContext(
    ReservationSeatContent
  );

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/seats/${event_id}`
      );

      setSeatData(result.data.items);
    };
    getData();
  }, [event_id]);

  const reserveSeat = (itemID, reserved) => {
    console.log("ran function");
    if (reserved > 0) {
      console.log("reserved");
    } else {
      setReservationSeatData(...ReservationSeatData, itemID);
      console.log(ReservationSeatData);
    }
  };

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
                    onClick={() => reserveSeat(item.id, item.is_reserved)}
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
      <div className={Style.line}>
        {SeatData &&
          SeatData.map((item) => {
            switch (item.line) {
              case "2":
                return (
                  <div
                    onClick={() => reserveSeat(item.id, item.is_reserved)}
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
                    onClick={() => reserveSeat(item.id, item.is_reserved)}
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
                    onClick={() => reserveSeat(item.id, item.is_reserved)}
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
                    onClick={() => reserveSeat(item.id, item.is_reserved)}
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
                    onClick={() => reserveSeat(item.id, item.is_reserved)}
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
