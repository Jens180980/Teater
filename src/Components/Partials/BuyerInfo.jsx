// import react hooks
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";

// import data from provider
import { authHeader, AuthContent } from "../StateManagement/Authorize";
import { ReservationSeatContent } from "../StateManagement/ReservationSeatData";
import { EventListContent } from "../StateManagement/EventListData";

// import modular style sheet
import Style from "../../Assets/scss/BuyerInfo.module.scss";

export const BuyerInfo = ({ event_id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginData } = useContext(AuthContent);
  const { EventListData } = useContext(EventListContent);
  const { ReservationData } = useContext(ReservationSeatContent);

  const Login = async (data) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("address", data.address);
    formData.append("zipcode", data.zipcode);
    formData.append("email", data.email);
    formData.append("seats[]", ReservationData);

    const result = await axios.post(
      "https://api.mediehuset.net/detutroligeteater/reservations",
      formData,
      { headers: authHeader() }
    );
    console.log(result);
  };

  return (
    <section className={Style.outerWrap}>
      <div>
        {EventListData ? (
          <img
            src={EventListData[event_id].image_medium}
            alt="forestillinger"
          ></img>
        ) : null}
      </div>
      <section className={!loginData ? Style.compWrapper : Style.displayNone}>
        {loginData && loginData.username ? (
          <form onSubmit={handleSubmit(Login)}>
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

            <button>Login</button>
          </form>
        ) : null}
      </section>
    </section>
  );
};
