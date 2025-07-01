import logoTatt from "../../../assets/img/logoTatt.jpg";
import styles from "../MainSection.module.css";

const LogoComponent = () => {
  return (
    <figure className={styles.logo}>
      <img
        className={styles.imgLogo}
        src={logoTatt}
        alt="Tattoo Studio business logo"
      />
    </figure>
  );
};

export default LogoComponent;
