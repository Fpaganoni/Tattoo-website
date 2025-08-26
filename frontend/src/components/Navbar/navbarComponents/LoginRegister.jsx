import styles from "../Navbar.module.css";
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
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/register.png?updatedAt=1755811286545"
          alt="register logo"
        />
        Register
      </Link>

      <span onClick={handleLoginClick} className={styles.loginRegisterSpan}>
        <img
          className={styles.loginRegisterIcons}
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/login.PNG?updatedAt=1755811286515"
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
