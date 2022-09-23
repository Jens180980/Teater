// Import react hooks
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";

//Import UseContext data
import { AuthContent, authHeader } from "../StateManagement/Authorize";

// Import modular style sheets
import Style from "../../Assets/scss/MakeComment.module.scss";

// Login function component
export const MakeComment = ({ event_id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [Stars, setStars] = useState(0);
  const { loginData } = useContext(AuthContent);

  const submitComment = async (data) => {
    const formData = new FormData();
    formData.append("event_id", event_id);
    formData.append("subject", data.subject);
    formData.append("num_stars", Stars);
    formData.append("comment", data.comment);
    const result = await axios.post(
      "https://api.mediehuset.net/detutroligeteater/reviews",
      formData,
      { headers: authHeader() }
    );
    console.log(result);
    window.location.reload(true);
  };

  const ratingChanged = (newRating) => {
    setStars(newRating);
  };

  return (
    <section className={Style.wrapper}>
      {loginData && loginData.username ? (
        <form onSubmit={handleSubmit(submitComment)}>
          <h3>Skriv en anmeldelse</h3>
          <div className={Style.ratings}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              color="white"
              activeColor="#30454C"
              size={24}
            />
          </div>
          <div className={Style.topWrap}>
            <input
              type="text"
              id="subject"
              placeholder="Emne"
              {...register("subject", { required: true })}
            />

            {errors.subject && <span>Udfyld venligst feltet korrekt</span>}
          </div>
          <div className={Style.bottomWrap}>
            <div>
              <textarea
                id="comment"
                placeholder="Skriv din kommentar"
                {...register("comment", { required: true })}
              />

              {errors.comment && <span>Udfyld venligst feltet korrekt</span>}
            </div>

            <button>Send</button>
          </div>
        </form>
      ) : (
        <p className={Style.noLogin}>
          Du skal være logget ind for at kommentere
        </p>
      )}
    </section>
  );
}; // End of function component
