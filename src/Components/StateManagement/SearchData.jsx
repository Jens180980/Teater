// Import react hooks
import { createContext, useState } from "react";

// Creating new instance of content for storing data
const SearchContent = createContext();

// Creating wrapper to define access to content
const SearchWrapper = ({ children }) => {
  // set data
  const [searchData, setSearchData] = useState("");

  // Send data to app
  return (
    <SearchContent.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContent.Provider>
  );
};

// Define exports
export { SearchContent, SearchWrapper };
