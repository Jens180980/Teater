// Import react hooks
import { createContext, useState } from "react";

// Creating new instance of content for storing data
const ShowLoginContent = createContext();

// Creating wrapper to define access to content
const ShowLoginWrapper = ({ children }) => {
  // set data
  const [ShowLogin, setShowLogin] = useState(false);

  // Send data to app
  return (
    <ShowLoginContent.Provider value={{ ShowLogin, setShowLogin }}>
      {children}
    </ShowLoginContent.Provider>
  );
};

// Define exports
export { ShowLoginContent, ShowLoginWrapper };
