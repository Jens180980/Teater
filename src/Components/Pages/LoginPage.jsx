// Import react hooks
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//Import UseContext data
import { AuthContent } from "../StateManagement/Authorize";

// Import modular style sheets
import Style from "../../Assets/scss/LoginPage.module.scss";

// Login function component
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Logindata now avaible to set and read
  const { loginData, setLoginData } = useContext(AuthContent);

  const Login = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const result = await axios.post(
      "https://api.mediehuset.net/token",
      formData
    );
    if (result.data) {
      sessionStorage.setItem("token", JSON.stringify(result.data));
      setLoginData(result.data);
    }
  };

  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
    // Navigates to home page after logout
    navigate("/", { replace: true });
  };

  return (
    <section className={Style.wrapper}>
      {!loginData && !loginData.username ? (
        <form onSubmit={handleSubmit(Login)}>
          <div className={Style.topWrap}>
            <input
              type="text"
              id="username"
              placeholder="Indtast brugernavn"
              {...register("username", { required: true })}
            />

            {errors.username && <span>Udfyld venligst feltet korrekt</span>}
          </div>
          <div className={Style.bottomWrap}>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Indtast adgangskode"
                {...register("password", { required: true })}
              />

              {errors.password && <span>Udfyld venligst feltet korrekt</span>}
            </div>

            <button>Login</button>
          </div>
          <div className={Style.bottomInfo}>
            <p>Glemt Adgangskode?</p>
            <p>Opret ny bruger</p>
          </div>
        </form>
      ) : (
        <div>
          <p>Du er logget ind som {loginData.username}</p>
          <button onClick={logOut}>Log ud</button>
        </div>
      )}
    </section>
  );
}; // End of function component
