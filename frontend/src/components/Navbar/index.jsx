import styles from "./Navbar.module.css";
import LoginRegister from "./navbarComponents/LoginRegister";
import NavbarTabs from "./navbarComponents/NavbarTabs";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../Logout/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link to="/home" className={styles.logoLink}>
        <div className={styles.logoMark}>T</div>
        <h1 className={styles.mainTitle}>
          Tattoo <span>Studio</span>
        </h1>
      </Link>

      {/* Nav links */}
      <NavbarTabs />

      {/* Auth buttons */}
      <div className={styles.loginRegisterContainer}>
        {user?.login === true ? <Logout /> : <LoginRegister />}
      </div>
    </nav>
  );
};

export default Navbar;
