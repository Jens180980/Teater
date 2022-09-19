// Import react hooks
import { useState, useEffect, createContext } from "react";

// Import fetch tool dependency Axios
import axios from "axios";

// Creating new instance of content for storing data
const ActorListContent = createContext();

// Creating wrapper to define access to content
const ActorListWrapper = ({ children }) => {
  const [ActorListData, setActorListData] = useState([]);

  // Get data
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/actors`
      );

      setActorListData(result.data.items);
    };
    getData();
  }, []);

  // Send data to app
  return (
    <ActorListContent.Provider value={{ ActorListData }}>
      {children}
    </ActorListContent.Provider>
  );
};
// Defining data
export { ActorListContent, ActorListWrapper };
