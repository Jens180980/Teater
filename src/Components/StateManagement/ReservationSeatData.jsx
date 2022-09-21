// Import react hooks
import { createContext, useState } from "react";

// Creating new instance of content for storing data
const ReservationSeatContent = createContext();

// Creating wrapper to define access to content
const ReservationSeatWrapper = ({ children }) => {
  // set data
  const [ReservationSeatData, setReservationSeatData] = useState([]);

  // Send data to app
  return (
    <ReservationSeatContent.Provider
      value={{ ReservationSeatData, setReservationSeatData }}
    >
      {children}
    </ReservationSeatContent.Provider>
  );
};

// Define exports
export { ReservationSeatContent, ReservationSeatWrapper };
