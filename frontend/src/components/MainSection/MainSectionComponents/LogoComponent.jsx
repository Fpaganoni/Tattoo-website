import styles from "../MainSection.module.css";

const LogoComponent = () => {
  return (
    <figure className={styles.logo}>
      <img
        className={styles.imgLogo}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/logoTatt.jpg?updatedAt=1755811243884"
        alt="Tattoo Studio business logo"
      />
    </figure>
  );
};

export default LogoComponent;
