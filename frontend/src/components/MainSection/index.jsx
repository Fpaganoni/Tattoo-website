import styles from "./MainSection.module.css";
import LogoComponent from "./MainSectionComponents/LogoComponent";
import ExperienceComponent from "./MainSectionComponents/ExperienceComponent";

const MainSection = () => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.subContainer}>
        <ExperienceComponent />
        <LogoComponent />
      </div>
    </div>
  );
};

export default MainSection;
