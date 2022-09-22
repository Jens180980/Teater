// Import react hooks
import { NavLink } from "react-router-dom";

// Import subcomponents
import { Navigation, BurgerNav } from "../Partials/Navigation";
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
      <div>
        <BurgerNav />
      </div>
    </header>
  );
}; // End of function component
