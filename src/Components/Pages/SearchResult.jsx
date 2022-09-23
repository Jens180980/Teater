// import react hooks
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import data from provider
import { SearchContent } from "../StateManagement/SearchData";

// import modular style sheet
import Style from "../../Assets/scss/SearchResult.module.scss";

// Searchresult function component
export const SearchResult = () => {
  const { searchData } = useContext(SearchContent);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/events/search/${searchData}`
      );
      setSearchResult(result.data.items);
    };
    getData();
  }, [searchData]);

  console.log(searchResult);

  return (
    <section className={Style.wrapper}>
      <h2>Søgeresultater</h2>
      <table>
        <tr>
          <th>Forestillingens navn</th>
          <th>Genre</th>
          <th>Tidspunkt</th>
          <th>Pris</th>
        </tr>
      </table>
      {searchResult &&
        searchResult.map((item) => {
          return (
            <Link to={`/events/${item.id}`} key={item.id}>
              <table>
                <tr>
                  <td>{item.title}</td>
                  <td>{item.genre}</td>
                  <td>{item.starttime}</td>
                  <td>{item.price}</td>
                </tr>
              </table>
            </Link>
          );
        })}
      {!searchResult
        ? () => {
            return <p>Der var desværre ingen søgeresultater</p>;
          }
        : null}
    </section>
  );
};
