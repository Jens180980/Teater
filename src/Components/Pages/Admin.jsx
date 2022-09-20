// import react hooks
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Import data from provider
import { AuthContent } from "../StateManagement/Authorize";
import { ShowLoginContent } from "../StateManagement/ShowLoginData";

// import modular style sheets
import Style from "../../Assets/scss/Admin.module.scss";

// import subcomponents
import { MyFavorites } from "../Partials/MyFavorites";
import { MyReservations } from "../Partials/MyReservations";

// Admin function component
export const Admin = () => {
  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
    setShowLogin(false);
    navigate("/", { replace: true });
  };
  const { loginData, setLoginData } = useContext(AuthContent);
  const { setShowLogin } = useContext(ShowLoginContent);
  return (
    <section>
      <div className={Style.top}>
        <h2>Min side</h2>
        <div>
          <p>Du er logget ind som {loginData.username}</p>
          <button onClick={logOut}>Log ud</button>
        </div>
      </div>
      <MyReservations />
      <MyFavorites />
    </section>
  );
}; // end function component
