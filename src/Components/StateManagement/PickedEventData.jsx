// Import react hooks
import { createContext, useState } from "react";

// Creating new instance of content for storing data
const PickedEventContent = createContext();

// Creating wrapper to define access to content
const PickedEventWrapper = ({ children }) => {
  // set data
  const [PickedEventData, setPickedEventData] = useState("");

  // Send data to app
  return (
    <PickedEventContent.Provider
      value={{ PickedEventData, setPickedEventData }}
    >
      {children}
    </PickedEventContent.Provider>
  );
};

// Define exports
export { PickedEventContent, PickedEventWrapper };
