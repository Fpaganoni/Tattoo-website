import styles from "./Logout.module.css";
import logOut from "../../assets/social-icons/logOut.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage or context
    setUser(null);
    // Optionally, redirect to home or login page
    navigate("/home");
  };

  return (
    <span className={styles.logoutRegisterSpan} onClick={handleLogout}>
      <img className={styles.logoutIcons} src={logOut} alt="log out" />
      Log Out
    </span>
  );
};

export default Logout;
