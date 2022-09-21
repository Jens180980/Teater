// import react hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import subcomponents
import { ShowComments } from "../Partials/ShowComments";

// import modular style sheet
import Style from "../../Assets/scss/EventDetail.module.scss";

export const EventDetails = () => {
  const { event_id } = useParams(0);
  const [EventDetails, setEventDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const result = await axios.get(
          `https://api.mediehuset.net/detutroligeteater/events/${event_id}`
        );
        setEventDetails(result.data.item);
      } catch (err) {
        console.error(err);
      }
    };
    getDetails();
  }, [event_id]);

  return (
    <>
      <section className={Style.wrapper}>
        {EventDetails ? (
          <div>
            <div className={Style.imgWrap}>
              <img src={EventDetails.image_medium} alt="forestilling"></img>
            </div>
            <div className={Style.contentWrap}>
              <div className={Style.topTxt}>
                <div>
                  <p>{EventDetails.stage_name}</p>
                  <h4>
                    {EventDetails.startdate} - {EventDetails.stopdate}
                  </h4>
                </div>
                <h3>Billetpris: {EventDetails.price} DKK</h3>
              </div>
              <article>
                <div>
                  <h2>{EventDetails.title}</h2>
                  <button>KØB BILLET</button>
                </div>
                <h4>{EventDetails.genre}</h4>
                <p>{EventDetails.description}</p>
              </article>
              <h4>MEDVIRKENDE</h4>
              <section className={Style.actorGallery}>
                {EventDetails.actors.map((item) => {
                  return (
                    <figure key={item.id}>
                      <div className={Style.imgWrap}>
                        <img src={item.image}></img>
                      </div>
                      <figcaption>
                        <h4>{item.name}</h4>
                      </figcaption>
                    </figure>
                  );
                })}
              </section>
            </div>
            <hr></hr>
            <ShowComments event_id={event_id} />
          </div>
        ) : null}
      </section>
    </>
  );
};
