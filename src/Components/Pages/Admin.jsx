import { Login } from "../Partials/Login";
import { AuthContent } from "../StateManagement/Authorize";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShowLoginContent } from "../StateManagement/ShowLoginData";

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
    <div>
      <Login />
      <div>
        <p>Du er logget ind som {loginData.username}</p>
        <button onClick={logOut}>Log ud</button>
      </div>
    </div>
  );
};
