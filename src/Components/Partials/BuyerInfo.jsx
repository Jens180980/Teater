// import react hooks
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

// import data from provider
import { authHeader, AuthContent } from "../StateManagement/Authorize";

// import modular style sheet
import Style from "../../Assets/scss/BuyerInfo.module.scss";

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

  const SubmitBuy = async (data) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("address", data.address);
    formData.append("zipcode", data.zipcode);
    formData.append("email", data.email);
    formData.append("seats[]", data.value);

    const result = await axios.post(
      "https://api.mediehuset.net/detutroligeteater/reservations",
      formData,
      { headers: authHeader() }
    );
    console.log(result);
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
                placeholder="Vejnavn og nr"
                {...register("zipcode", { required: true })}
              />
              {errors.zipcode && <span>Udfyld venligst feltet korrekt</span>}
            </div>

            <button>Send bestilling</button>
          </form>
        ) : (
          <p>Du skal være logget ind for at bestille</p>
        )}
      </section>
    </section>
  );
};
