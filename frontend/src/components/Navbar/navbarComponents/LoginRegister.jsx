import styles from "../navbar.module.css";
import login from "../../../assets/social-icons/login.png";
import register from "../../../assets/social-icons/register.png";
import { useContext, useState } from "react";
import Login from "../../../views/Login/Login";

import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";

const LoginRegister = () => {
  const [showLogin, setShowLogin] = useState(false);

  const { user } = useContext(AuthContext);

  if (user?.login === true) return null;

  const handleLoginClick = () => {
    // Logic to show the login form
    setShowLogin(true);
  };

  const handleOnClose = () => {
    // Logic to close the login form
    setShowLogin(false);
  };

  return (
    <div className={styles.loginRegisterContainer}>
      <Link to="register" className={styles.loginRegisterSpan}>
        <img
          className={styles.loginRegisterIcons}
          src={register}
          alt="register logo"
        />
        Register
      </Link>

      <span onClick={handleLoginClick} className={styles.loginRegisterSpan}>
        <img
          className={styles.loginRegisterIcons}
          src={login}
          alt="login logo"
        />
        Login
      </span>
      {showLogin && (
        <Login
          handleOnClose={handleOnClose}
          onLoginSucces={() => setShowLogin(false)}
        />
      )}
    </div>
  );
};

export default LoginRegister;
