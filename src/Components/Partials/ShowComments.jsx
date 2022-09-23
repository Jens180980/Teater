// import react hooks
import { useEffect, useState } from "react";
import axios from "axios";

// Import subcomponents
import { MakeComment } from "./MakeComment";

// import modular style sheet and icons
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Style from "../../Assets/scss/ShowComments.module.scss";

// ShowComments function component
export const ShowComments = ({ event_id }) => {
  const [Comments, setComments] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/reviews?event_id=${event_id}`
      );

      setComments(result.data.items);
    };
    getData();
  }, [event_id]);

  return (
    <section className={Style.wrapper}>
      <h2>Anmeldelser</h2>
      {Comments &&
        Comments.map((item) => {
          // preparing rating stars
          const filledStars = item.num_stars;
          const remainingStars = 5 - filledStars;
          const filledStarsArr = [];
          const remainingStarsArr = [];

          // Filling arrays with correct number of icon components
          for (let i = 0; i < remainingStars; i++) {
            remainingStarsArr.push(<AiOutlineStar key={i} />);
          }
          for (let i = 0; i < filledStars; i++) {
            filledStarsArr.push(<AiFillStar key={i + 100} />);
          }

          return (
            <section className={Style.itemWrapper} key={item.id}>
              <div>
                {/* outputting correct number of icon components */}
                {filledStarsArr}
                {remainingStarsArr}
              </div>
              <h4>{item.created}</h4>
              <h3>
                {item.user.firstname} {item.user.lastname}
              </h3>
              <p>{item.comment}</p>
            </section>
          );
        })}
      <MakeComment event_id={event_id} />
    </section>
  );
};
