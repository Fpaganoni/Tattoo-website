import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.paymentsContainer}>
          <h2 className={styles.paymentTitle}>PAYMENT METHODS</h2>
          <div className={styles.paymentImgContainer}>
            <img
              width={50}
              height={43}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/googlepay-logo.png?updatedAt=1755811264469"
              alt="Google Pay Logo"
            />
            <img
              width={95}
              height={30}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/maestro-logo.png?updatedAt=1755811264493"
              alt="Maestro Logo"
            />
            <img
              width={55}
              height={40}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/mastercard-logo.png?updatedAt=1755811264505"
              alt="Mastercard Logo"
            />
            <img
              width={40}
              height={45}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/visa-logo.png?updatedAt=1755811264532"
              alt="Visa Logo"
            />
            <img
              width={45}
              height={45}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/westernUnion-logo.png?updatedAt=1755811264516"
              alt="Western Union Logo"
            />
          </div>
        </div>

        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>CONTACT</h2>
          <span className={styles.contactInfo}>
            <img
              className={styles.contactIcons}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsMail.png?updatedAt=1755811286254"
              alt="email icon"
            />{" "}
            tattoStudio@gmail.com
          </span>
          <span className={styles.contactInfo}>
            <img
              className={styles.contactIcons}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/telephone-icon.png?updatedAt=1755811202520"
              alt="phone icon"
            />{" "}
            01169423436
          </span>
          <span className={styles.contactInfo}>
            <img
              className={styles.contactIcons}
              src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/iconsLocation.png?updatedAt=1755811286257"
              alt="location icon"
            />
            6200 Independence Ave, Kansas City, MO 64125, Estados Unidos
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
