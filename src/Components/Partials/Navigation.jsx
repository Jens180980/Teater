import { NavLink } from "react-router-dom";
import Style from "../../Assets/scss/Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={Style.nav}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
      </ul>
    </nav>
  );
};
