// Import react hooks
import { NavLink } from "react-router-dom";

// Import subcomponents
import { Navigation } from "../Partials/Navigation";
import { SearchBar } from "./SearchBar";

// import modular style sheet & images
import Style from "../../Assets/scss/Header.module.scss";
import logo from "../../Assets/img/DUT_logo.png";

// Header function component
export const Header = () => {
  return (
    <header className={Style.header}>
      <NavLink to="./">
        <img src={logo} alt="logo" />
      </NavLink>

      <div>
        <SearchBar />
        <Navigation />
      </div>
    </header>
  );
}; // End of function component
