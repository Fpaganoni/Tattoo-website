import styles from "../navbar.module.css";
import iconsFacebook from "../../../assets/social-icons/iconsFacebook.png";
import iconsInstagram from "../../../assets/social-icons/iconsInstagram.png";
import iconsTwitter from "../../../assets/social-icons/iconsTwitter.png";
import iconsLinkedin from "../../../assets/social-icons/iconsLinkedin.png";
import iconsTiktok from "../../../assets/social-icons/iconsTiktok.png";
import iconsYoutube from "../../../assets/social-icons/iconsYoutube.png";

const SocialIcons = () => {
  return (
    <div className={styles.iconContainer}>
      <a className={styles.anchor} href="#">
        <img src={iconsFacebook} className={styles.socialIcons} alt="" />
      </a>

      <a className={styles.anchor} href="#">
        <img src={iconsInstagram} className={styles.socialIcons} alt="" />
      </a>

      <a className={styles.anchor} href="#">
        <img src={iconsTwitter} className={styles.socialIcons} alt="" />
      </a>

      <a className={styles.anchor} href="#">
        <img src={iconsTiktok} className={styles.socialIcons} alt="" />
      </a>

      <a className={styles.anchor} href="#">
        <img src={iconsLinkedin} className={styles.socialIcons} alt="" />
      </a>

      <a className={styles.anchor} href="#">
        <img src={iconsYoutube} className={styles.socialIcons} alt="" />
      </a>
    </div>
  );
};

export default SocialIcons;
