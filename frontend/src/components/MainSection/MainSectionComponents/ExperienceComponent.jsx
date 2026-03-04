import styles from "../MainSection.module.css";
import { Link } from "react-router-dom";

const ExperienceComponent = () => {
  return (
    <div className={styles.experienceContainer}>
      <span className={styles.experienceSpan}>Reflect who you are</span>
      <h2 className={styles.experienceTitle}>A Unique Experience</h2>
      <p className={styles.experienceParagraph}>
        At Tattoo Studio, we're more than just tattoos — we offer a unique
        experience that reflects your individuality. Our award-winning artists
        craft personalized designs that mirror your identity, turning your story
        into permanent art that you'll carry with pride.
      </p>

      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>15+</span>
          <span className={styles.statLabel}>Years active</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Happy clients</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>8</span>
          <span className={styles.statLabel}>Expert artists</span>
        </div>
      </div>

      <Link to="/about" style={{ textDecoration: "none" }}>
        <button className={styles.experienceButton}>Our Story →</button>
      </Link>
    </div>
  );
};

export default ExperienceComponent;
