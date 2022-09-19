import { createContext } from "react";
import { useState } from 'react';

const SearchContent = createContext()

const SearchWrapper = ({children}) => {

const [searchData, setSearchData] = useState('');

return (
    <SearchContent.Provider value={{searchData, setSearchData}}>
        {children}
    </SearchContent.Provider>
)}

export { SearchContent, SearchWrapper }