// Import react hooks
import { useState, useEffect, createContext } from "react";

// Import fetch tool dependency Axios
import axios from "axios";

// Creating new instance of content for storing data
const EventListContent = createContext();

// Creating wrapper to define access to content
const EventListWrapper = ({ children }) => {
  const [EventListData, setEventListData] = useState([]);

  // Get data
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/events`
      );

      setEventListData(result.data.items);
    };
    getData();
  }, []);

  // Send data to app
  return (
    <EventListContent.Provider value={{ EventListData }}>
      {children}
    </EventListContent.Provider>
  );
};
// Defining data
export { EventListContent, EventListWrapper };
