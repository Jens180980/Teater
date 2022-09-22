// import react hooks
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

// import data from provider
import { AuthContent, authHeader } from "../StateManagement/Authorize";

export const MyComments = () => {
  const { loginData } = useContext(AuthContent);
  const [AllComments, setAllComments] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/reviews`
      );

      setAllComments(result.data.items);
    };
    getData();
  }, []);

  const deleteComment = async (itemID) => {
    const result = await axios.delete(
      `https://api.mediehuset.net/detutroligeteater/reviews/${itemID}`,
      { headers: authHeader() }
    );
    console.log(result);
  };

  return (
    <section>
      <div>
        <AiFillStar />
        <h2>Mine Anmeldelser</h2>
      </div>
      <table>
        <tr>
          <th>Forestilling</th>
          <th>Emne</th>
          <th>Antal Stjerner</th>
          <th>Slet</th>
        </tr>
      </table>
      {AllComments &&
        AllComments.map((item) => {
          if (item.user.username === loginData.username) {
            return (
              <table key={item.id}>
                <tr>
                  <td>
                    {item.event_title}, {item.stage_name}
                  </td>
                  <td>{item.subject}</td>
                  <td>{item.num_stars}</td>
                  <td onClick={() => deleteComment(item.id)}>
                    <button>x</button>
                  </td>
                </tr>
              </table>
            );
          } else {
            console.log("nothing to report");
          }
        })}
    </section>
  );
};
