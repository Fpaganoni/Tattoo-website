import styles from "../Navbar.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.iconContainer}>
      <a className={styles.anchor} href="#">
        <img
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsFacebook.png?updatedAt=1755811286595"
          className={styles.socialIcons}
          alt="Facebook Logo"
        />
      </a>

      <a className={styles.anchor} href="#">
        <img
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsInstagram.png?updatedAt=1755811288189"
          className={styles.socialIcons}
          alt="Instagram Logo"
        />
      </a>

      <a className={styles.anchor} href="#">
        <img
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsTwitter.png?updatedAt=1755811286243"
          className={styles.socialIcons}
          alt="X Logo"
        />
      </a>

      <a className={styles.anchor} href="#">
        <img
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsTiktok.png?updatedAt=1755811286221"
          className={styles.socialIcons}
          alt="TikTok Logo"
        />
      </a>

      <a className={styles.anchor} href="#">
        <img
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsLinkedin.png?updatedAt=1755811288189"
          className={styles.socialIcons}
          alt="LinkedIn Logo"
        />
      </a>

      <a className={styles.anchor} href="#">
        <img
          src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsYoutube.png?updatedAt=1755811286539"
          className={styles.socialIcons}
          alt="YouTube Logo"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
