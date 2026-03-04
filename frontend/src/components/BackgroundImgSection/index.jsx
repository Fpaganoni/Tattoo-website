import styles from "./BackgroundImgSection.module.css";
import { Link } from "react-router-dom";

const BackgroundImgSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroSection}>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Premium Custom Tattoo Studio</p>
          <h1 className={styles.heroTitle}>
            Art That Lives <br />
            <em>On Your Skin</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Every line tells your story. Book a session with our artists and
            turn your vision into a permanent masterpiece.
          </p>
          <div className={styles.heroActions}>
            <Link to="/register" className={styles.heroCta}>
              Book Your Session
            </Link>
            <Link to="/about" className={styles.heroCtaSecondary}>
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImgSection;
