import styles from "../MainSection.module.css";

const ExperienceComponent = () => {
  return (
    <div className={styles.experienceContainer}>
      <span className={styles.experienceSpan}>Reflect who you are</span>
      <h2 className={styles.experienceTitle}>A Unique Experience</h2>
      <p className={styles.experienceParagraph}>
        At Tatto Studio, we're more than just tattoos; we offer a unique
        experience reflecting your individuality. Our dedicated designers craft
        personalized, identity-mirroring designs. Award-winning tattoo artists
        bring them to life with creativity. Cleopatra Ink transforms your
        journey into an art form, where your story shines. Join us for
        unparalleled body art, where creativity knows no bounds, and your
        narrative takes center stage
      </p>
      <button className={styles.experienceButton}>Learn More...</button>
    </div>
  );
};

export default ExperienceComponent;
