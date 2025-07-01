import styles from "./BackgroundImgSection.module.css";

const BackgroundImgSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stickySection}>
        <div className={styles.overlayContent}></div>
      </div>
    </div>
  );
};

export default BackgroundImgSection;
