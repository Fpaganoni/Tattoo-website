import styles from "../Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const NavbarTabs = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.navbarTabsContainer}>
      <ul className={styles.navbarTabs}>
        <Link to="/home" className={styles.navbarTab}>
          Home
        </Link>
        <Link to="/about" className={styles.navbarTab}>
          About
        </Link>
        {user?.login ? (
          <Link to="/myappointments" className={styles.navbarTab}>
            My Appointments
          </Link>
        ) : null}
      </ul>
    </div>
  );
};

export default NavbarTabs;
