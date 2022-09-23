// import react hooks
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

// import data from provider
import { authHeader, AuthContent } from "../StateManagement/Authorize";

// import modular style sheet
import Style from "../../Assets/scss/BuyerInfo.module.scss";

// BuyerInfo function component
export const BuyerInfo = ({ event_id }) => {
  const [EventData, setEventData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/events/${event_id}`
      );

      setEventData(result.data.item);
    };
    getData();
  }, [event_id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginData } = useContext(AuthContent);
  const [SeatData, setSeatData] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/seats/${event_id}`
      );

      setSeatData(result.data.items);
    };
    getData();
  }, []);

  const SubmitBuy = async (data) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("address", data.address);
    formData.append("zipcode", data.zipcode);
    formData.append("email", data.email);
    //appending each seat
    data.seats &&
      data.seats.map((item) => {
        formData.append("seats[]", item);
      });

    const result = await axios.post(
      "https://api.mediehuset.net/detutroligeteater/reservations",
      formData,
      { headers: authHeader() }
    );
  };

  return (
    <section className={Style.outerWrap}>
      <div className={Style.imgWrap}>
        {EventData ? (
          <img src={EventData.image_small} alt="forestillinger"></img>
        ) : null}
      </div>
      <section className={!loginData ? Style.compWrapper : Style.displayNone}>
        {loginData && loginData.username ? (
          <form onSubmit={handleSubmit(SubmitBuy)}>
            <h2>Køb billet</h2>
            <div className={Style.inputField}>
              <input
                type="text"
                id="firstname"
                placeholder="Indtast fornavn"
                {...register("firstname", { required: true })}
              />

              {errors.firstname && <span>Udfyld venligst feltet korrekt</span>}
            </div>

            <div className={Style.inputField}>
              <input
                type="text"
                id="lastname"
                placeholder="Indtast efternavn"
                {...register("lastname", { required: true })}
              />
              {errors.lastname && <span>Udfyld venligst feltet korrekt</span>}
            </div>

            <div className={Style.inputField}>
              <input
                type="text"
                id="address"
                placeholder="Adresse"
                {...register("address", { required: true })}
              />
              {errors.address && <span>Udfyld venligst feltet korrekt</span>}
            </div>

            <div className={Style.inputField}>
              <input
                type="text"
                id="zipcode"
                placeholder="Indtast dit postnummer"
                {...register("zipcode", { required: true })}
              />
              {errors.zipcode && <span>Udfyld venligst feltet korrekt</span>}
            </div>

            <div className={Style.inputField}>
              <input
                type="email"
                id="email"
                placeholder="Indtast din email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Udfyld venligst feltet korrekt</span>}
            </div>

            {/* SeatPicker begins */}

            <section className={Style.SeatPickerWrapper}>
              <div className={Style.stage}>Scenen</div>
              {/* The div under this comment wraps all cases row === 1 for styling purposes*/}
              <div className={Style.line}>
                {SeatData &&
                  SeatData.map((item) => {
                    switch (item.line) {
                      case "1":
                        return (
                          <div key={item.id}>
                            <input
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                              type="checkbox"
                              name="seats[]}"
                              id="seats[]"
                              value={item.id}
                              {...register("seats[]", { required: true })}
                            ></input>
                            <span
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                            ></span>
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
                          <div key={item.id}>
                            <input
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                              type="checkbox"
                              name="seats[]}"
                              id="seats[]"
                              value={item.id}
                              {...register("seats[]", { required: true })}
                            ></input>
                            <span
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                            ></span>
                          </div>
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
                          <div key={item.id}>
                            <input
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                              type="checkbox"
                              name="seats[]}"
                              id="seats[]"
                              value={item.id}
                              {...register("seats[]", { required: true })}
                            ></input>
                            <span
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                            ></span>
                          </div>
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
                          <div key={item.id}>
                            <input
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                              type="checkbox"
                              name="seats[]}"
                              id="seats[]"
                              value={item.id}
                              {...register("seats[]", { required: true })}
                            ></input>
                            <span
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                            ></span>
                          </div>
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
                          <div key={item.id}>
                            <input
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                              type="checkbox"
                              name="seats[]}"
                              id="seats[]"
                              value={item.id}
                              {...register("seats[]", { required: true })}
                            ></input>
                            <span
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                            ></span>
                          </div>
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
                          <div key={item.id}>
                            <input
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                              type="checkbox"
                              name="seats[]}"
                              id="seats[]"
                              value={item.id}
                              {...register("seats[]", { required: true })}
                            ></input>
                            <span
                              className={
                                item.is_reserved > 0
                                  ? Style.thisSeatIsTaken
                                  : null
                              }
                            ></span>
                          </div>
                        );
                    }
                  })}
              </div>
            </section>

            <button>Send bestilling</button>
          </form>
        ) : (
          <p>Du skal være logget ind for at bestille</p>
        )}
      </section>
    </section>
  );
};
