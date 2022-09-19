// Import react hooks
import { Link } from "react-router-dom";

// Import subcomponents
import { Navigation } from "../Partials/Navigation";
import { SearchBar } from "./SearchBar";

// import modular style sheet
import Style from "../../Assets/scss/Header.module.scss";

// Header function component
export const Header = () => {
  return (
    <header className={Style.header}>
      <h2>Logo</h2>
      <p>Søgebar</p>
      <Navigation />
    </header>
  );
}; // End of function component
