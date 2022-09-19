// Import react hooks
import { useState, useEffect, createContext } from "react";

// Import fetch tool dependency Axios
import axios from "axios";

// Creating new instance of content for storing data
const CommentsListContent = createContext();

// Creating wrapper to define access to content
const CommentsListWrapper = ({ children }) => {
  const [CommentsListData, setCommentsListData] = useState([]);

  // Get data
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/reviews`
      );

      setCommentsListData(result.data.items);
    };
    getData();
  }, []);

  // Send data to app
  return (
    <CommentsListContent.Provider value={{ CommentsListData }}>
      {children}
    </CommentsListContent.Provider>
  );
};
// Defining data
export { CommentsListContent, CommentsListWrapper };
