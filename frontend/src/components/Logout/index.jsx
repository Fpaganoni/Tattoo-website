import styles from "./Logout.module.css";
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
      <img
        className={styles.logoutIcons}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/logOut.png?updatedAt=1755811286557"
        alt="log out icon"
      />
      Log Out
    </span>
  );
};

export default Logout;
