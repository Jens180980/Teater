// import react hooks
import { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(Comments);

  return (
    <div>
      <h2>Anmeldelser</h2>
      {Comments &&
        Comments.map((item) => {
          return (
            <section>
              <p>{item.created}</p>
              <h4>
                {item.user.firstname} {item.user.lastname}
              </h4>
              <p>{item.comment}</p>
            </section>
          );
        })}
    </div>
  );
};
