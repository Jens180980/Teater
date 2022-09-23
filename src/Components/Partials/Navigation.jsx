import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Style from "../../Assets/scss/Navigation.module.scss";
import { AuthContent } from "../StateManagement/Authorize";
import { Login } from "./Login";
import { ShowLoginContent } from "../StateManagement/ShowLoginData";
import { slide as Menu } from "react-burger-menu";
import "../../Assets/scss/burger.scss";

export const Navigation = () => {
  const { loginData } = useContext(AuthContent);
  const { ShowLogin, setShowLogin } = useContext(ShowLoginContent);
  const navigate = useNavigate();

  const openLoginForm = () => {
    setShowLogin(true);
  };

  return (
    <nav className={Style.nav}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/events">Forestillinger & Events</NavLink>
        </li>
        <li>
          <NavLink to="/actors">Skuespillere</NavLink>
        </li>
        <li>
          {loginData.access_token ? (
            <NavLink to="/admin">Min side</NavLink>
          ) : (
            <button onClick={openLoginForm}>Login</button>
          )}
        </li>
        {ShowLogin ? <Login className={Style.loginForm} /> : null}
      </ul>
    </nav>
  );
};

export const BurgerNav = () => {
  return (
    <nav className={Style.burgerNav}>
      <Menu right>
        <NavLink id="home" className="menu-item" to="/">
          Forside
        </NavLink>
        <NavLink id="list" className="menu-item" to="/events">
          Forestillinger
        </NavLink>
        <NavLink id="login" className="menu-item" to="/login">
          Login
        </NavLink>
      </Menu>
    </nav>
  );
};
