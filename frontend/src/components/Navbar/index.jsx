import styles from "./navbar.module.css";
import LoginRegister from "./navbarComponents/LoginRegister";
import NavbarTabs from "./navbarComponents/NavbarTabs";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../Logout/index";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <LoginRegister />

      {user?.login === true ? <Logout /> : null}
      <h1 className={styles.mainTitle}>Welcome to Tattoo Studio</h1>
      <NavbarTabs />
    </nav>
  );
};

export default Navbar;
