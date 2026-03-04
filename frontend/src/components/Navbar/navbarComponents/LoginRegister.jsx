import styles from "../Navbar.module.css";
import { useContext, useState } from "react";
import Login from "../../../views/Login/Login";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const LoginRegister = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { user } = useContext(AuthContext);

  if (user?.login === true) return null;

  return (
    <>
      <Link to="register" className={styles.loginRegisterSpan}>
        Register
      </Link>

      <span
        onClick={() => setShowLogin(true)}
        className={`${styles.loginRegisterSpan} ${styles.loginPrimary}`}
      >
        Login
      </span>

      {showLogin && (
        <Login
          handleOnClose={() => setShowLogin(false)}
          onLoginSucces={() => setShowLogin(false)}
        />
      )}
    </>
  );
};

export default LoginRegister;
